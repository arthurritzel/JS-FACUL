var qtnNum = Number(prompt("Quantos numeros deseja informar?"));

var vet = [];
let soma = 0;

for (var i = 0; i < qtnNum; i++) {
    vet[i] = Number(prompt(i + " valor:"));
    soma += vet[i];
}
for (var i = 0; i < qtnNum; i++) {
    if(i != 0){
        console.log("+");
    }
    console.log("%d", vet[i]);
}
console.log("/");
console.log("%d", qtnNum);
console.log("=");
var media = soma/qtnNum
console.log("%d", media);