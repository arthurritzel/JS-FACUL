var notas = [];
var soma = 0;
nome = prompt("Digite seu nome:");
for(let i = 0; i < 3; i++){
     notas[i] = Number(prompt("Digite a nota " + i+1));
}
media(notas, nome)

function media(notas, nome){
    for(let i = 0; i < 3; i++){
        soma += notas[i];
   }

   console.log(`${nome} sua media é ${soma/3}`);
}