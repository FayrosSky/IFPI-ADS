"use strict";
class Hotel {
    constructor(initialReservations) {
        this.quantReservas = initialReservations;
    }
    adicionarReserva() {
        this.quantReservas++;
    }
}
let hotel = new Hotel(2);
console.log(hotel.quantReservas); // Saída: 2
//# sourceMappingURL=q03.js.map