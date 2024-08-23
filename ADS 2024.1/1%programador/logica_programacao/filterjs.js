let pessoas = [
    {
        nome: "joao",
        idade: 17
    },
    {
        nome: "Carlos",
        idade: 24,
    },
    {
        nome: "Murilo",
        idade: 19
    },
    {
        nome: "Pedro",
        idade: 48
    }
]

const maiorQue20 = pessoas.filter(
    pessoa => pessoa.idade > 20
)

console.log(maiorQue20)

console.log(`${maiorQue20}`)