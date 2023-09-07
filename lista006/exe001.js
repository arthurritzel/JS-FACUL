var h1 = document.createElement("h1")
h1.style.textAlign = "center"
document.body.appendChild(h1);
if(navigator.onLine){
    document.body.style.backgroundColor = "#028111"
    h1.innerHTML = `Voce esta online`
    
}else{
    document.body.style.backgroundColor = "red"
    h1.innerHTML = `Voce esta offline`

}