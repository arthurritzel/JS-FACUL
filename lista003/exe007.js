const array1 = [ 12, 8, 130, 44];

function parOuN(array1){
    const found = array1.find((num) => num % 2 !== 0);
    return found === undefined? true:false;
}

console.log(parOuN(array1));

