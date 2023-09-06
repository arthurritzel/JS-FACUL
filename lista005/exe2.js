var item = {
    conteudo: "lavar",
    prioridade: "alta",
    situacao: "baixa"
}

async function dados(){
    var envi = await fetch("https://my-json-server.typicode.com/arthurritzel/demo/posts", {
        method: "GET",
        // body: JSON.stringify(item)
    })
  

    var respjson = await envi.json()
}

dados();