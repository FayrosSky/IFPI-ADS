class Espelho {
    TipoVidro: string;
    Altura: number;
    Largura: number;

    constructor(TipoVidro: string, Altura: number, Largura: number) {
        this.TipoVidro = TipoVidro;
        this.Altura = Altura;
        this.Largura = Largura;
    }
}


class Telhado {
    constructor(public tipo: string, public cor: string) {}
}

class Parede {
    constructor(public cor: string, public altura: number) {}
}

class Espelho {
    constructor(public tipoVidro: string, public altura: number, public largura: number) {}
}

class Casa {
    TelhadoAreaExterna: Telhado;
    TelhadoAreaInterna: Telhado;
    ParedeQuarto: Parede;
    ParedeBanheiro: Parede;
    ParedeCozinha: Parede;
    EspelhoCorredor: Espelho;

    constructor(
        telhadoAreaExterna: Telhado,
        telhadoAreaInterna: Telhado,
        paredeQuarto: Parede,
        paredeBanheiro: Parede,
        paredeCozinha: Parede,
        espelhoCorredor: Espelho
    ) {
        this.TelhadoAreaExterna = telhadoAreaExterna;
        this.TelhadoAreaInterna = telhadoAreaInterna;
        this.ParedeQuarto = paredeQuarto;
        this.ParedeBanheiro = paredeBanheiro;
        this.ParedeCozinha = paredeCozinha;
        this.EspelhoCorredor = espelhoCorredor;
    }
}

class Acabamento {
    constructor(public tipo: string, public cor: string) {}
}

class Parede {
    Altura: number;
    Largura: number;
    Acabamento: Acabamento;

    constructor(altura: number, largura: number, acabamento: Acabamento) {
        this.Altura = altura;
        this.Largura = largura;
        this.Acabamento = acabamento;
    }
}

class TipoTelha {
    constructor(public nome: string, public cor: string) {}
}

class Telhado {
    TipoTelha: TipoTelha;
    Area: number;

    constructor(tipoTelha: TipoTelha, area: number) {
        this.TipoTelha = tipoTelha;
        this.Area = area;
    }
}

class Endereco {
    constructor(public rua: string, public numero: number, public cidade: string, public estado: string, public cep: string) {}
}

class Moradia {
    Area: number;
    Endereco: Endereco;

    constructor(area: number, endereco: Endereco) {
        this.Area = area;
        this.Endereco = endereco;
    }
}

class Espelho {
    constructor(public tipoVidro: string, public altura: number, public largura: number) {}
}

class Casa {
    TelhadoAreaExterna: Telhado;
    TelhadoAreaInterna: Telhado;
    ParedeQuarto: Parede;
    ParedeBanheiro: Parede;
    ParedeCozinha: Parede;
    EspelhoCorredor: Espelho;

    constructor(
        telhadoAreaExterna: Telhado,
        telhadoAreaInterna: Telhado,
        paredeQuarto: Parede,
        paredeBanheiro: Parede,
        paredeCozinha: Parede,
        espelhoCorredor: Espelho
    ) {
        this.TelhadoAreaExterna = telhadoAreaExterna;
        this.TelhadoAreaInterna = telhadoAreaInterna;
        this.ParedeQuarto = paredeQuarto;
        this.ParedeBanheiro = paredeBanheiro;
        this.ParedeCozinha = paredeCozinha;
        this.EspelhoCorredor = espelhoCorredor;
    }
}

class Casa extends Moradia {
    TelhadoAreaExterna: Telhado;
    TelhadoAreaInterna: Telhado;
    ParedeQuarto: Parede;
    ParedeBanheiro: Parede;
    ParedeCozinha: Parede;
    EspelhoCorredor: Espelho;

    constructor(
        area: number,
        endereco: Endereco,
        telhadoAreaExterna: Telhado,
        telhadoAreaInterna: Telhado,
        paredeQuarto: Parede,
        paredeBanheiro: Parede,
        paredeCozinha: Parede,
        espelhoCorredor: Espelho
    ) {
        super(area, endereco); // Chama o construtor da classe base (Moradia)
        this.TelhadoAreaExterna = telhadoAreaExterna;
        this.TelhadoAreaInterna = telhadoAreaInterna;
        this.ParedeQuarto = paredeQuarto;
        this.ParedeBanheiro = paredeBanheiro;
        this.ParedeCozinha = paredeCozinha;
        this.EspelhoCorredor = espelhoCorredor;
    }
}

class Parede {
    constructor(public cor: string, public altura: number) {}
}

class Telhado {
    constructor(public tipo: string, public cor: string) {}
}

class Casa {
    Endereco: Endereco;
    TelhadoExterno: Telhado;
    TelhadoInterno: Telhado;
    ParedeQuarto: Parede;
    ParedeBanheiro: Parede;
    ParedeCozinha: Parede;

    constructor(
        endereco: Endereco,
        telhadoExterno: Telhado,
        telhadoInterno: Telhado,
        paredeQuarto: Parede,
        paredeBanheiro: Parede,
        paredeCozinha: Parede
    ) {
        this.Endereco = endereco;
        this.TelhadoExterno = telhadoExterno;
        this.TelhadoInterno = telhadoInterno;
        this.ParedeQuarto = paredeQuarto;
        this.ParedeBanheiro = paredeBanheiro;
        this.ParedeCozinha = paredeCozinha;
    }
}