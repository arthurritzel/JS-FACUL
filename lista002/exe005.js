const vog = 'AEIOUaeiou';

var frase = prompt('Dgite uma palavra ou frase');
var numVog = 0;
function qtnvogais(){
    for (let i = 0; i < frase.length; i++) {
        for (let j = 0; j < vog.length; j++) {
            if(frase.charAt(i) === vog.charAt(j)){
                numVog++;
            }
        }
    }
    return numVog;
}

console.log("Voce digitou %i vogais", qtnvogais());