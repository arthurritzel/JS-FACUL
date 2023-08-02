
do{
    var flag = prompt("Digite 1 para gerar um numero e 0 para encerrar")
    var rand = Math.random() * (7 - 1) + 1;
    console.log(parseInt(rand));
}while (flag != 0);