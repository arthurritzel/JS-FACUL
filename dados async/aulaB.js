async function resenha(){
    var resultado = await fetch("https://api.chucknorris.io/jokes/random", {
        method: "GET"
    })

    var resultadoJson = await resultado.json();
    console.log(resultadoJson.value);
}

resenha();