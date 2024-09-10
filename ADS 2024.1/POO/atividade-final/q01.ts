enum TipoInteracao {
    Curtir = "curtir",
    NaoCurtir = "não curtir",
    Riso = "riso",
    Surpresa = "surpresa",
}

class Usuario {
    private id: number;
    private email: string;
    private apelido: string;
    private documento: string;

    constructor(id: number, email: string, apelido: string, documento: string) {
        this.id = id;
        this.email = email;
        this.apelido = apelido;
        this.documento = documento;
    }

    public getId(): number {
        return this.id;
    }

    public getEmail(): string {
        return this.email;
    }

    public getApelido(): string {
        return this.apelido;
    }

    public getDocumento(): string {
        return this.documento;
    }
}

class Publicacao {
    private id: number;
    private usuario: Usuario;
    private conteudo: string;
    private dataHora: Date;

    constructor(id: number, usuario: Usuario, conteudo: string, dataHora: Date) {
        this.id = id;
        this.usuario = usuario;
        this.conteudo = conteudo;
        this.dataHora = dataHora;
    }

    public getId(): number {
        return this.id;
    }

    public getUsuario(): Usuario {
        return this.usuario;
    }

    public getConteudo(): string {
        return this.conteudo;
    }

    public getDataHora(): Date {
        return this.dataHora;
    }
}

class Interacao {
    private id: number;
    private publicacao: Publicacao;
    private tipoInteracao: TipoInteracao;
    private usuario: Usuario;
    private dataHora: Date;

    constructor(id: number, publicacao: Publicacao, tipoInteracao: TipoInteracao, usuario: Usuario, dataHora: Date) {
        this.id = id;
        this.publicacao = publicacao;
        this.tipoInteracao = tipoInteracao;
        this.usuario = usuario;
        this.dataHora = dataHora;
    }

    public getId(): number {
        return this.id;
    }

    public getPublicacao(): Publicacao {
        return this.publicacao;
    }

    public getTipoInteracao(): TipoInteracao {
        return this.tipoInteracao;
    }

    public getUsuario(): Usuario {
        return this.usuario;
    }

    public getDataHora(): Date {
        return this.dataHora;
    }
}

class PublicacaoAvancada extends Publicacao {
    private interacoes: Interacao[];

    constructor(id: number, usuario: Usuario, conteudo: string, dataHora: Date) {
        super(id, usuario, conteudo, dataHora);
        this.interacoes = [];
    }

    public adicionarInteracao(interacao: Interacao): void {
        this.interacoes.push(interacao);
    }

    public getInteracoes(): Interacao[] {
        return this.interacoes;
    }
}