/*
    Visa ocultar partes internas de um objeto e exibir apenas o necessário para uso externo.
    geralmento vamos fazer isso com modificadores de acesso(como o private, por exemplo.)
    Pode até ser perigoso expor coisas que vc não quer, pois alguém pode mudar um valor que não queremos.
*/

export class RemoteControl {
    constructor(private powerStatus = false)

    public turnOn(): void{
        this.powerStatus = true;
    }

    public turnOff(): void {
        this.powerStatus = false;
    }

    public getStatus(): boolean {
        return this.powerStatus;
    }


}