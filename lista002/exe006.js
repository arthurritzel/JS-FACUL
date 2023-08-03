const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
var verymins = "não";
const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var verymaius = "não";
const especiais = "!@#$%^&*()_+-={}[]|:;<>,.?/";
var veryesp = "não";
const numeros = "1234567890";
var verynum = "não";

var senha = prompt("Digite a senha")

function minusculas(){
    for(var j = 0; j < senha.length; j++){
        for(var i = 0; i < letrasMinusculas.length; i++){
            if(senha.charAt(j) === letrasMinusculas.charAt(i)){
                verymins = 'sim'
            }
        }
    }
}

function maiusculas(){
    for(var j = 0; j < senha.length; j++){
        for(var i = 0; i < letrasMaiusculas.length; i++){
            if(senha.charAt(j) === letrasMaiusculas.charAt(i)){
                verymaius = 'sim'
            }
        }
    }
}

function espec(){
    for(var j = 0; j < senha.length; j++){
        for(var i = 0; i < especiais.length; i++){
            if(senha.charAt(j) === especiais.charAt(i)){
                veryesp = 'sim'
            }
        }
    }
}

function num(){
    for(var j = 0; j < senha.length; j++){
        for(var i = 0; i < numeros.length; i++){
            if(senha.charAt(j) === numeros.charAt(i)){
                verynum = 'sim'
            }
        }
    }
}

minusculas();
maiusculas();
espec();
num();

console.log("Possue letras maiusculas: " + verymaius);
console.log("Possue letras minusculas: " + verymins);
console.log("Possue letras especiais: " + veryesp);
console.log("Possue numeros: " + verynum);

if (veryesp && verymaius && verymins && verynum === 'sim') {
    console.log("A senha é valida");
    
}else{
    console.log("A senha é invalida");
    
}