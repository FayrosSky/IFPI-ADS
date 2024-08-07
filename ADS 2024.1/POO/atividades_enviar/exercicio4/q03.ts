class Hotel {
    quantReservas: number;

    constructor(initialReservations: number) {
        this.quantReservas = initialReservations;
    }

    adicionarReserva(): void {
        this.quantReservas++;
    }
}

let hotel: Hotel = new Hotel(2);
console.log(hotel.quantReservas); // Saída: 2