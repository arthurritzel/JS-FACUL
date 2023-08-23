const formu = document.forms.registration

formu.addEventListener("submit", (event)=>{
    event.preventDefault();
    
    var soma = parseFloat(formu.n1.value) + parseFloat(formu.n2.value)

    var titulo = document.createElement("h1");
    titulo.innerText = `A soma é ${soma}`;
    document.body.appendChild(titulo);
})
