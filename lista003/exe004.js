var array = [];
var soma = 0;

function somar() {
    for(let i = 0; true; i++){
        array[i] = parseFloat(prompt("Digite um valor para somar, digite 0 para encerrar"));
        if(array[i] == 0){
            break;
        }
        soma += array[i];
    }
}

somar();

console.log(`A soma é ${soma}`)
