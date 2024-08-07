class Postagem {
    id: number;
    texto: string;
    quantidadeCurtidas: number;
  
    constructor(id: number, texto: string) {
      this.id = id;
      this.texto = texto;
      this.quantidadeCurtidas = 0;
    }
  
    curtir(): void {
      this.quantidadeCurtidas++;
    }
  
    toString(): string {
      return `Postagem ${this.id}: "${this.texto}" (${this.quantidadeCurtidas} curtidas)`;
    }
  }
  
  class Microblog {
    private postagens: Postagem[] = [];
  
    adicionarPostagem(postagem: Postagem): void {
      this.postagens.push(postagem);
    }
  
    excluirPostagem(id: number): void {
      this.postagens = this.postagens.filter((p) => p.id !== id);
    }
  
    obterPostagemMaisCurtida(): Postagem | null {
      if (this.postagens.length === 0) {
        return null;
      }
      return this.postagens.reduce((maisCurtida, postagem) =>
        postagem.quantidadeCurtidas > maisCurtida.quantidadeCurtidas
          ? postagem
          : maisCurtida
      );
    }
  
    curtir(id: number): void {
      const postagem = this.postagens.find((p) => p.id === id);
      if (postagem) {
        postagem.curtir();
      }
    }
  
    toString(): string {
      return this.postagens.map((p) => p.toString()).join("\n");
    }
  }
  
  // Exemplo de uso
  const microblog = new Microblog();
  
  const postagem1 = new Postagem(1, "Olá, mundo!");
  const postagem2 = new Postagem(2, "Essa é minha segunda postagem.");
  const postagem3 = new Postagem(3, "Curtam essa postagem!");
  
  microblog.adicionarPostagem(postagem1);
  microblog.adicionarPostagem(postagem2);
  microblog.adicionarPostagem(postagem3);
  
  microblog.curtir(1);
  microblog.curtir(1);
  microblog.curtir(3);
  microblog.curtir(3);
  microblog.curtir(3);
  
  console.log(microblog.toString());
  // Saída:
  // Postagem 1: "Olá, mundo!" (2 curtidas)
  // Postagem 2: "Essa é minha segunda postagem." (0 curtidas)
  // Postagem 3: "Curtam essa postagem!" (3 curtidas)
  
  const maisCurtida = microblog.obterPostagemMaisCurtida();
  console.log(
    maisCurtida
      ? `A postagem mais curtida é: ${maisCurtida.toString()}`
      : "Não há postagens no microblog."
  );
  // Saída: A postagem mais curtida é: Postagem 3: "Curtam essa postagem!" (3 curtidas)
  
  microblog.excluirPostagem(2);
  console.log(microblog.toString());
  // Saída:
  // Postagem 1: "Olá, mundo!" (2 curtidas)
  // Postagem 3: "Curtam essa postagem!" (3 curtidas)