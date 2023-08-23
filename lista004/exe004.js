const form = document.forms.registration;
var cont = 0;
form.addEventListener("submit", (event)=>{
    event.preventDefault();

    const resp = document.createElement("p");
    resp.setAttribute("id", "teste");
    if(cont === 0){
        document.body.appendChild(resp);
        cont++;
    }
    var par = document.querySelector("#teste");
    if(form.raio.value){
        var area = parseFloat(form.raio.value)**2 * 3.14;
        
        par.innerHTML = `A area do circulo é ${area} <br> link usado para formula: <a href="https://pt.khanacademy.org/math/basic-geo/x7fa91416:circles-cylinders-cones-and-spheres/x7fa91416:area-and-circumference-of-circles/v/area-of-a-circle#:~:text=A%20área%20de%20um%20círculo,souber%20a%20medida%20do%20diâmetro" target="_blank" >formula area circulo</a>`
    }else{
        par.innerHTML = `Nada digitado`;
    }    
    
})