
function main(): void {

    let numero = 5;

    console.log(Verificar_Par_Impar(numero))




    function Verificar_Par_Impar(numero: number): boolean {
        if (numero % 2 == 0) {
            return true;
        }
        return false;
    }


}

main();