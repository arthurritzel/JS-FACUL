var campo = document.querySelector("#nome");
var botao = document.querySelector("button");

botao.addEventListener("click", function(){
    var texto = campo.value;
    var mnsg = document.createElement("h1");
    mnsg.innerHTML = `Seja bem vindo ${texto}`
    document.body.appendChild(mnsg);
})