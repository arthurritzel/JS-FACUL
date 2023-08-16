var array = [];

for(let i = 0; true; i++){
    array[i] = parseFloat(prompt("Digite um valor para encontrar o maior, digite 0 para encerrar"));
    if(array[i] == 0){
        break;
    }
    
}

function maiorv(array) {
    let maior = 0;
    for(let i = 0; i < array.length; i++){
        if(i == 0){
            maior = array[i];
        }
        if(array[i] > maior){
            maior = array[i];
        }
    }
    return maior;
}

console.log(`O maior é ${maiorv(array)}`);