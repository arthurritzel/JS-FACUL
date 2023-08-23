const formu = document.forms.registration

formu.addEventListener("submit", (event)=>{
    event.preventDefault();
    
    var dobro = parseFloat(formu.n1.value) * 2;

    var titulo = document.createElement("h1");
    titulo.innerText = `O dobro é ${dobro}`;
    document.body.appendChild(titulo);
})
