fetch("https://api.chucknorris.io/jokes/random",{
    method: "GET"
})

    .then(function(resposta){
        return resposta.json()
    })  

    .then(function(respostaJson){
        console.log(respostaJson.value);
    })