const s = function(){
    s1 = prompt("Digite seu nome");
    return s1;
}()

console.log("%c %s", "color:blue; font-weight: bold", s);