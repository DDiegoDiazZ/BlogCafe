"use strict";

const nuevo = document.createElement('A');
nuevo.textContent = "Nuevo";
nuevo.href= "www.google.com";
nuevo.hidden = true;
console.log(nuevo);




console.log(1);
console.log(2);
window.addEventListener('load',()=>{ 
    //Espera a que todo el documento html este listo
    console.log(3);
});
window.onload = function () {
    console.log(5);
}


document.addEventListener('DOMContentLoaded',function (i) {
    //Espera que se descargue el contenido html.
    console.log(i);
});

// Scroll de Pagina
window.addEventListener('scroll',() => {
    console.log('__');
});


function imprimir() {
    console.log('HOLA MUNDO');
    
}

console.log(4);

