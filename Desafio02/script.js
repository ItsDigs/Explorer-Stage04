const alunos = [
    {
        nome: 'Amanda',
        nota1Prova: 1,
        nota2Prova: 3
    },
    {
        nome: 'Jorge',
        nota1Prova: 9,
        nota2Prova: 0
    },
    {
        nome: 'Cleber',
        nota1Prova: 10,
        nota2Prova: 8
    },
    {
        nome: 'Wilson',
        nota1Prova: 10,
        nota2Prova: 5
    },
]

function average(grade1, grade2){
    let average = (grade1 + grade2)/2
    return average
}

for (let aluno of alunos){
    frase1 = ''
    media = average(aluno.nota1Prova, aluno.nota2Prova)
    if (media < 7){
        frase1 = `Não foi desse vez ${aluno.nome}! Tente novamente!`
    } else {
        frase1 = `Parabéns ${aluno.nome}! Voce foi aprovado(a)`
    }
    alert(`A média do(a) aluno(a) foi: ${media} \n` + frase1)
}