const contador = document.getElementById("contador");
const sumar = document.getElementById("suma");
const restar = document.getElementById("resta");
const resetear = document.getElementById("reset");

let numero = 0;

sumar.addEventListener("click", () =>{
    numero++;
    contador.innerHTML = numero;
});

restar.addEventListener("click", () =>{
    if(numero==0){}
    else{
        numero--;
        contador.innerHTML = numero;
    }
});

reset.addEventListener("click", () =>{
    numero = 0;
    contador.innerHTML = numero; 
    
}); 