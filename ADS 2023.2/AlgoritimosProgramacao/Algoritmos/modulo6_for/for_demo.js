import { print } from "../utils/input.js"

function main(){
    const alunos = ['Ronald', 'MN', 'ME', 'Mari', 'Helô']

    let i = 0

    while(i < alunos.length)
        const aluno = alunos[i]
        print(`: ${aluno} - ${aluno.length} letras`)

        i++
}

main()