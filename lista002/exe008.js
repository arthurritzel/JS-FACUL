var lista = [];
let i = 0;

for(i = 0; true; i++){
    lista[i] = prompt("Digite um item da lista ou 0 para encerrar: ");
    
    if(lista[i] == 0){
        break;
    }
}

for(let j = 0; j < i; j++){
    console.log((j+1) + "° " + lista[j]);
}

