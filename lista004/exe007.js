var senha = '';
var cont = 0;
const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[]|:;"<>,.?/';

function gerarSenha(tamanhoSenhaa){
    for (let i = 0; i < tamanhoSenhaa; i++) {
        var rand = Math.random() * ((caracteres.length + 1) - 1) + 1;
        senha += caracteres.charAt(rand)
    }
}

function gerarP(){
    var p = document.createElement("p");
    p.setAttribute("id", "senhaGer");
    document.body.appendChild(p);
    cont++;
}

var gerar = document.querySelector("#gerar");
var tamanhoSenha = document.querySelector("#senha");

gerar.addEventListener("click", ()=>{
    senha = '';
    if(cont == 0){
        gerarP();
    }
    if(tamanhoSenha.value){
        gerarSenha(parseFloat(tamanhoSenha.value));
        document.querySelector("#senhaGer").innerHTML = `A senha gerada foi ${senha}`
    }else{
        document.querySelector("#senhaGer").innerHTML = `Nada digitado`;
    }
})