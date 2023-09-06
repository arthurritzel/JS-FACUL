async function previsao(){
    var resp = await fetch("https://run.mocky.io/v3/33e53364-4b51-423b-8463-8707d79f0982", {
        method: "GET"

    })
    var RESPjson = await resp.json()
    RESPjson.cidades.forEach(element => {
        var div = document.createElement("div");
        div.innerHTML = `
        <h1>${element.nome}</h1>
        <p>clima: ${element.clima}</p> 
        <p>temperatura: ${element.temperatura_atual}</p> 
        <p>temperatura minima: ${element.temperatura_minima}</p> 
        <p>temperatura maxima: ${element.temperatura_maxima}</p> 
        <img style="width: 30%"src="${element.imagem_url}">`
        document.body.appendChild(div);
    });
} 

previsao();