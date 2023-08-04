

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
        do{
            var saqueaux = parseFloat(prompt("Digite o valor de saque"));
            if(saqueaux > this.saldo){
                console.log("Voce nao possue esse saldo!");
                flag = 1;
            }else{
                this.saldo -= saqueaux;
                flag = 0;
            }
        }while(flag != 0);
        console.log("Seu saldo atual é %f senhor(a) %s", this.saldo, this.nomeTitu)
    }
}

do{
    var esc = prompt("Digite a operacao que deseja realizar\nConta "+ conta.numero +" \nagencia: "+conta.agencia+" \n0-cancelar\n1- deposito\n2- Saque");
    if (esc == 1) {
        conta.deposito();
    }else if(esc == 2){
        conta.saque();
    }
}while(esc != 0)