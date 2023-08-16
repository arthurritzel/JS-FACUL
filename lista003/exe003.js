
const usuario ={
    nome: "maria",
    idade: 28,
    email: "maria@example.com",
    endereco: {
        cidade: "sao paulo",
        estado: "SP",
        pais: "Brasil",
    }
} ;

var {nome, idade, email, endereco: {cidade, estado, pais}} = usuario




console.log(nome, idade, email, cidade, estado, pais)