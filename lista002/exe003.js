var esc = Number(prompt("Digite 1 para converter de celsius para fahrenheit ou 0 para o contrario"))
var temp = Number(prompt("Digite a temperatura"))

if(esc == 1){
    console.log("Fahrenheit: %d", (temp * 9/5) + 32);
}else if (esc == 0){
    console.log("Celsius: %d", (temp - 32) * 5/9);
}