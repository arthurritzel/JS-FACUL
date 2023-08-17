var arr = [1, 1, 2, 3, 3, 3];
var novaArr = arr.filter(function(num, i) {
    return arr.indexOf(num) === i;
});

console.log(novaArr);