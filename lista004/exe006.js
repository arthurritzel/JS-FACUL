var btncel = document.querySelector("#celsius");
var btnfar = document.querySelector("#far");
var temp = document.querySelector("#temp");
var cont = 0;

btncel.addEventListener("click", ()=>{
    if(cont == 0){
        var p = document.createElement("p");
        p.setAttribute("id", "resp");
        document.body.appendChild(p);
        cont++;
    }
    if(temp.value){
        document.querySelector("#resp").innerHTML = `O valor convertido para celsius é ${((parseFloat(temp.value) - 32) / 1.8).toFixed(2)}`;
    }else{
        document.querySelector("#resp").innerHTML = `Nada digitado`;
    }
})

btnfar.addEventListener("click", ()=>{
    if(cont == 0){
        var p = document.createElement("p");
        p.setAttribute("id", "resp");
        document.body.appendChild(p);
        cont++;
    }
    if(temp.value){
        document.querySelector("#resp").innerHTML = `O valor convertido para fahreneit é ${(parseFloat(temp.value) * 1.8 + 32).toFixed(2)}`
    }else{
        document.querySelector("#resp").innerHTML = `Nada digitado`;
    }
})

