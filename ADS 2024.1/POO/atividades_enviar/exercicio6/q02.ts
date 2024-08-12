class Hora{

    private date: Date;
    
    constructor(){
        this.date = new Date();
    }

    public lerHora(): number {
        return this.date.getHours();
    }

    public lerMinuto(): number {
        return this.date.getMinutes();
    }

    public lerSegundos(): number {
        return this.date.getSeconds();
    }
}

//Timereader
const hora = new Hora();
console.log(`Hora: ${hora.lerHora()}`);
console.log(`Minuto: ${hora.lerMinuto()}`);
console.log(`Segundo: ${hora.lerSegundos()}`);