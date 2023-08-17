var array1 = ["chave1", "chave2", "chave3"];
var array2 = [1, 2, 3];

console.log(ordmap(array1, array2));

function ordmap(array1c, array2c){
    const map = new Map();
    for (let index = 0; index < array1.length; index++) {
        map.set(array1c[index], array2c[index]);
    }

    return map;
}