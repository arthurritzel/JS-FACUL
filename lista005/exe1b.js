async function noticias(){
    var resp = await fetch("https://run.mocky.io/v3/d869b7b3-cd3f-420d-9343-9924cf2e535d", {
        method: "GET"

    })
    var RESPjson = await resp.json()
    RESPjson.noticias.forEach(element => {
        var div = document.createElement("div");
        div.innerHTML = `
        <h1>${element.titulo}</h1>
        <p>${element.conteudo}</p> 
        <img style="width: 80%"src="${element.imagem_url}">`
        document.body.appendChild(div);
    });
} 

noticias();