const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[]|:;"<>,.?/';

var tamanhoSenha = Number(prompt("Digite o tamanho da senha que deseja: "))
var senha = '';

function gerarSenha(){
    for (let i = 0; i < tamanhoSenha; i++) {
        var rand = Math.random() * ((caracteres.length + 1) - 1) + 1;
        senha += caracteres.charAt(rand)
    }
}
 
gerarSenha();
console.log("Sua senha é %s", senha);