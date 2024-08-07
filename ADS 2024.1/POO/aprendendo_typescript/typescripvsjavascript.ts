JavaScript:
	function soma(a, b){
		return a + b;
}
console.log(soma(5, "3")); //resultado "53"



TypeScript:
	function soma(a: number, b:number): number{
		return a + b;
}
console.log(soma(5, 3)); //resultado: 8
//O typeScript emitiria um erro se tentássemos passar uma string aqui
