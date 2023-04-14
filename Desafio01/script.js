const num1 = prompt('Digite o primeiro número')
const num2 = prompt('Digite o segundo número')

const mathCalc = {
    soma: num1 + num2,
    subtracao: num1 - num2,
    divisao: num1/num2,
    multiplicacao: num1*num2,
    rest: num1%num2
}

for (const calc in mathCalc) {
    if (calc === 'soma'){
        if (mathCalc.soma%2 == 0) {
            alert(`a soma dos dois números é par: ${mathCalc[calc]}`)
        } else{
            alert(`a soma dos dois números é ímpar: ${mathCalc[calc]}`)
        }
    } else{
        alert(`a ${calc} dos dois elementos é: ${mathCalc[calc]}`)
    }
};

if (num1 === num2){
    alert('Os dois números são iguais')
}else{
    alert('Os dois números são diferentes')
}