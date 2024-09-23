import * as readlineSync from "readline-sync";

class DeserializationError extends Error {}
class IdEmUsoError extends Error {}
class PerfilNaoEncontradoError extends Error {}
class PostagemNaoEncontradaError extends Error {}

function askStr(ask: string): string {
    return readlineSync.question(ask).trim();
}

function askEnter(ask: string = "aperte Enter para continuar"): void {
    readlineSync.keyInPause(ask);
}

function askInt(ask: string, max: number, min: number = 0): number {
    while (true) {
        const num = Number(readlineSync.question(ask).trim());
        if (Number.isSafeInteger(num) && num >= min && num <= max) {
            return num;
        }
        console.log(`Digite um número inteiro entre ${min} e ${max}`);
    }
}

class Perfil {
    private _id: number;
    private _nome: string;
    private _email: string;
    private _postagens: Postagem[];

    constructor(id: number, nome: string, email: string) {
        this._id = id;
        this._nome = nome;
        this._email = email;
        this._postagens = [];
    }

    getId(): number { return this._id; }
    getNome(): string { return this._nome; }
    getEmail(): string { return this._email; }
    getPostagens(): Postagem[] { return this._postagens; }

    pushPostagem(postagem: Postagem): void {
        this._postagens.push(postagem);
    }

    serializarParaJson(): any {
        return { id: this._id, nome: this._nome, email: this._email };
    }

    static deserializarDeJson(json: any): Perfil {
        return new Perfil(json.id, json.nome, json.email);
    }
}

class Postagem {
    private _id: number;
    private _texto: string;
    private _curtidas: number;
    private _descurtidas: number;
    private _perfil: Perfil;
    private _responde: number | null;

    constructor(id: number, texto: string, perfil: Perfil, responde: number | null) {
        this._id = id;
        this._texto = texto;
        this._curtidas = 0;
        this._descurtidas = 0;
        this._perfil = perfil;
        this._responde = responde;
        perfil.pushPostagem(this);
    }

    getId(): number { return this._id; }
    getTexto(): string { return this._texto; }
    getCurtidas(): number { return this._curtidas; }
    getDescurtidas(): number { return this._descurtidas; }
    getPerfil(): Perfil { return this._perfil; }
    getResponde(): number | null { return this._responde; }

    curtir(): void { this._curtidas++; }
    descurtir(): void { this._descurtidas++; }

    ehPopular(): boolean {
        return this._curtidas / (this._descurtidas || 1) > 1.5;
    }

    serializarParaJson(): any {
        return {
            tipo: "Postagem",
            id: this._id,
            texto: this._texto,
            curtidas: this._curtidas,
            descurtidas: this._descurtidas,
            perfil: this._perfil.getId(),
            responde: this._responde,
        };
    }

    static deserializarDeJson(json: any, perfis: IRepositorioDePerfis): Postagem {
        const perfil = perfis.consultar({ id: json.perfil });
        return new Postagem(json.id, json.texto, perfil, json.responde);
    }
}

class PostagemAvancada extends Postagem {
    private _visualizacoes: number;

    constructor(id: number, texto: string, perfil: Perfil, responde: number | null) {
        super(id, texto, perfil, responde);
        this._visualizacoes = 10; // Exemplo de visualizações restantes
    }

    getVisualizacoesRestantes(): number { return this._visualizacoes; }
    decrementarVisualizacoes(): void { if (this._visualizacoes > 0) this._visualizacoes--; }

    serializarParaJson(): any {
        return { ...super.serializarParaJson(), tipo: "PostagemAvancada" };
    }

    static deserializarDeJson(json: any, perfis: IRepositorioDePerfis): PostagemAvancada {
        const postagem = Postagem.deserializarDeJson(json, perfis);
        return new PostagemAvancada(postagem.getId(), postagem.getTexto(), postagem.getPerfil(), postagem.getResponde());
    }
}

interface IRepositorioDePerfis {
    incluir(perfil: Perfil): void;
    listar(): Perfil[];
    consultar(filtros: { id?: number; nome?: string; email?: string }): Perfil;
    gerarId(): number;
    serializarParaJson(): any;
    deserializarDeJson(json: any): void;
}

class RepositorioDePerfisArray implements IRepositorioDePerfis {
    private _perfis: Perfil[] = [];
    private _genId: number = 0;

    incluir(perfil: Perfil): void {
        this._perfis.push(perfil);
    }
    
    listar(): Perfil[] { return this._perfis; }
    
    consultar({ id, nome, email }: { id?: number; nome?: string; email?: string }): Perfil {
        for (let perfil of this._perfis) {
            if ((id !== undefined && perfil.getId() === id) ||
                (nome !== undefined && perfil.getNome() === nome) ||
                (email !== undefined && perfil.getEmail() === email)) {
                return perfil;
            }
        }
        throw new PerfilNaoEncontradoError();
    }
    
    gerarId(): number { return ++this._genId; }
    
    serializarParaJson(): any {
        return { perfis: this._perfis.map(x => x.serializarParaJson()), genId: this._genId };
    }

    deserializarDeJson(json: any): void {
        if (typeof json.genId !== "number" || !Number.isSafeInteger(json.genId) || json.genId < 0) {
            throw new DeserializationError();
        }

        if (!Array.isArray(json.perfis)) {
            throw new DeserializationError();
        }

        this._genId = json.genId;
        this._perfis = json.perfis.map(Perfil.deserializarDeJson);
    }
}

interface IRepositorioDePostagens {
    incluir(postagem: Postagem): void;
    consultar(filtros: {
        id?: number;
        texto?: string;
        perfil?: Perfil;
        popular?: boolean;
        visivel?: boolean;
        responde?: number | null;
    }): Postagem[];
    gerarId(): number;
    serializarParaJson(): any;
    deserializarDeJson(json: any, perfis: IRepositorioDePerfis): void;
}

class RepositorioDePostagensArray implements IRepositorioDePostagens {
    private _postagens: Postagem[] = [];
    private _genId: number = 0;

    incluir(postagem: Postagem): void {
        this._postagens.push(postagem);
    }

    consultar({ id, texto, perfil, popular, visivel, responde }: {
        id?: number; texto?: string; perfil?: Perfil; popular?: boolean; visivel?: boolean; responde?: number | null;
    }): Postagem[] {
        return this._postagens.filter(x => (
            (id === undefined || x.getId() === id) &&
            (texto === undefined || x.getTexto().includes(texto)) &&
            (perfil === undefined || x.getPerfil() === perfil) &&
            (popular === undefined || x.ehPopular() === popular) &&
            (visivel === undefined || x.ehVisivel()) &&
            (responde === undefined || x.getResponde() === responde)
        ));
    }

    gerarId(): number { return ++this._genId; }

    serializarParaJson(): any {
        return { postagens: this._postagens.map(x => x.serializarParaJson()), genId: this._genId };
    }

    deserializarDeJson(json: any, perfis: IRepositorioDePerfis): void {
        if (typeof json.genId !== "number" || !Number.isSafeInteger(json.genId) || json.genId < 0) {
            throw new DeserializationError();
        }

        if (!Array.isArray(json.postagens)) {
            throw new DeserializationError();
        }

        this._genId = json.genId;
        this._postagens = json.postagens.map((x: any) => {
            if (x.tipo === "Postagem") {
                return Postagem.deserializarDeJson(x, perfis);
            } else if (x.tipo === "PostagemAvancada") {
                return PostagemAvancada.deserializarDeJson(x, perfis);
            } else {
                throw new DeserializationError();
            }
        });
    }
}

class Auth {
    private static _usuarios: { [key: string]: string } = {};

    static cadastrar(email: string, senha: string): void {
        if (this._usuarios[email]) throw new Error("Usuário já cadastrado");
        this._usuarios[email] = senha;
    }

    static login(email: string, senha: string): boolean {
        return this._usuarios[email] === senha;
    }
}

// Exemplo de uso
const perfisRepo = new RepositorioDePerfisArray();
const postagensRepo = new RepositorioDePostagensArray();

// Aqui você pode adicionar lógica para interagir com o usuário e os repositórios
