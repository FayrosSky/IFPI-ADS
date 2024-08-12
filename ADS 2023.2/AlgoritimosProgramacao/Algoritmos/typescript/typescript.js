var Motor = /** @class */ (function () {
    function Motor() {
    }
    Motor.prototype.start = function () {
        console.log('Motor ligado');
    };
    return Motor;
}());
var Carro = /** @class */ (function () {
    function Carro() {
        this.motor = new Motor();
    }
    Carro.prototype.ligarMotor = function () {
        this.motor.start();
    };
    return Carro;
}());
var meuCarro = new Carro();
meuCarro.ligarMotor();
