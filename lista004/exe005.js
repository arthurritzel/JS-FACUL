var cont = 0;
var botao = document.querySelector("#botao");

botao.addEventListener("click", ()=>{
    var rand = Math.random() * (7 - 1) + 1;

    const sort = document.createElement("p");
    sort.setAttribute("id", "teste");
    if(cont === 0){
        document.body.appendChild(sort);
        cont++;
    }
    var id = document.querySelector("#teste");
    id.innerHTML = `O numero sorteado foi ${parseInt(rand)}`;
})