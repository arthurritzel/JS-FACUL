async function api(){
    var rest = await fetch("https://rickandmortyapi.com/api/character", {
        method: "GET"
    })
    var restJSON = await rest.json();

    restJSON.results.forEach(element => {
        var div = document.createElement("div");
        div.innerHTML = `
        <img src = "${element.image}"></img>
        <h1>${element.name}</h1>`
        document.body.append(div);
    });
}

api();