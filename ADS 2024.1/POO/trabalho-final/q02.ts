class UsuarioExistenteException extends Error {
    constructor(message: string) {
        super(message);
        this.name = "UsuarioExistenteException";
    }
}

class EmailExistenteException extends Error {
    constructor(message: string) {
        super(message);
        this.name = "EmailExistenteException";
    }
}

class IdInvalidoException extends Error {
    constructor(message: string) {
        super(message);
        this.name = "IdInvalidoException";
    }
}

class PublicacaoJaReagidaException extends Error {
    constructor(message: string) {
        super(message);
        this.name = "PublicacaoJaReagidaException";
    }
}

class Usuario {
    constructor(public id_usuario: number, public email: string) {}
}

class Publicacao {
    constructor(public id_publicacao: number, public conteudo: string, public data_criacao: Date) {}
}

class PublicacaoAvancada extends Publicacao {
    public reacoes: number = 0;
    public usuarios_reagiram: Set<number> = new Set();

    constructor(id_publicacao: number, conteudo: string, data_criacao: Date) {
        super(id_publicacao, conteudo, data_criacao);
    }

    public reagir(usuario_id: number): void {
        if (this.usuarios_reagiram.has(usuario_id)) {
            throw new PublicacaoJaReagidaException("Usuário já reagiu a esta publicação.");
        }
        this.reacoes++;
        this.usuarios_reagiram.add(usuario_id);
    }
}

class RedeSocial {
    private usuarios: Map<number, Usuario> = new Map();
    private publicacoes: Publicacao[] = [];

    public cadastrarUsuario(id_usuario: number, email: string): void {
        if (this.usuarios.has(id_usuario)) {
            throw new UsuarioExistenteException("Usuário com este ID já existe.");
        }
        if (Array.from(this.usuarios.values()).some(u => u.email === email)) {
            throw new EmailExistenteException("Email já cadastrado.");
        }
        this.usuarios.set(id_usuario, new Usuario(id_usuario, email));
    }

    public cadastrarPublicacao(publicacao: Publicacao): void {
        this.publicacoes.push(publicacao);
    }

    public listarPublicacoes(): Publicacao[] {
        return this.publicacoes.sort((a, b) => b.data_criacao.getTime() - a.data_criacao.getTime());
    }

    public listarPublicacoesUsuario(email: string): Publicacao[] {
        const usuarioIds = Array.from(this.usuarios.values())
            .filter(u => u.email === email)
            .map(u => u.id_usuario);
        return this.publicacoes
            .filter(p => usuarioIds.includes(p.id_publicacao))
            .sort((a, b) => b.data_criacao.getTime() - a.data_criacao.getTime());
    }

    public reagirPublicacaoAvancada(id_publicacao: number, usuario_id: number): void {
        const publicacao = this.publicacoes.find(p => p.id_publicacao === id_publicacao) as PublicacaoAvancada;
        if (publicacao) {
            publicacao.reagir(usuario_id);
        } else {
            throw new Error("Publicação não encontrada.");
        }
    }
}

// Exemplo de uso
const redeSocial = new RedeSocial();

// Cadastrando usuários
redeSocial.cadastrarUsuario(1, "usuario1@example.com");
redeSocial.cadastrarUsuario(2, "usuario2@example.com");

// Cadastrando publicações
const pub1 = new PublicacaoAvancada(1, "Primeira publicação!", new Date());
redeSocial.cadastrarPublicacao(pub1);

// Listando publicações
redeSocial.listarPublicacoes().forEach(pub => {
    console.log(`Publicação: ${pub.conteudo}, Data: ${pub.data_criacao}`);
});

// Reagindo a uma publicação
redeSocial.reagirPublicacaoAvancada(1, 1);
console.log(`Reações na publicação: ${pub1.reacoes}`);