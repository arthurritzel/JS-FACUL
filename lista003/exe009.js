var string = "palavra com ou sem palavra com";


function contagemOc(stringr){
    var cont
    const map = new Map();
    var stringmult = stringr.split(" ");
    for(let i = 0; i < stringmult.length; i++){
        cont = 0;
        for(let j = 0; j < stringmult.length; j++){
            if(stringmult[i] == stringmult[j]){
                cont++
            }
        }
        map.set(stringmult[i], cont)
    }
    return map;
}


console.log(contagemOc(string));