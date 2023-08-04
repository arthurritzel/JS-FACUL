var calc = {
    adicao: function(n1, n2){
        return n1+n2
    },
    subtracao: function(n1, n2){
        return n1-n2
    },
    divisao: function(n1, n2){
        return n1/n2
    },
    multiplicacao: function(n1, n2){
        return n1*n2
    },
}
var esc = prompt("Qual tipo de operacao deseja realizar\n1-adicao\n2-subtracao\n3-divisao\n4-multiplicação")
var n1 = parseFloat(prompt("Digite o primerio valor"))
var n2 = parseFloat(prompt("Digite o segundo valor"))
switch (esc) {
    case '1':
        console.log("Resultado: " + calc.adicao(n1, n2))
        break;
    case '2':
        console.log("Resultado: " + calc.subtracao(n1, n2))
        break;
    case '3':
        console.log("Resultado: " + calc.divisao(n1, n2))
        break;
    case '4':
        console.log("Resultado: " + calc.multiplicacao(n1,n2))
    default:
        break;
}