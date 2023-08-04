

var conta = {
    nomeTitu: "Resenha",
    numero: "001",
    agencia: "sicredi",
    saldo: 0,

    deposito: function(){
        this.saldo += parseFloat(prompt("Digite o valor de deposito"));
        console.log("Seu saldo atual é %f senhor(a) %s", this.saldo, this.nomeTitu)
    },
    saque: function(){
        this.saldo -= parseFloat(prompt("Digite o valor de saque"));
        console.log("Seu saldo atual é %f senhor(a) %s", this.saldo, this.nomeTitu)
    }
}

do{
    var esc = prompt("Digite a operacao que deseja\n0-cancelar\n1- deposito\n2- Saque")
    if (esc == 1) {
        conta.deposito();
    }else if(esc == 2){
        conta.saque();
    }
}while(esc != 0)