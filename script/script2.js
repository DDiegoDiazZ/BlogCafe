
// VARIABLES DE MI HTML
const btnEnviar = document.querySelector('[data-nro="3"]');
const chckVerde = document.querySelector('#verde');
const chckRojo = document.querySelector('#rojo');
const chckAmarillo = document.querySelector('#verde');
const inptNombre =  document.querySelector('#nombre');
const inptEmail =  document.querySelector('#mail');
const txtMsj =  document.querySelector('#msj');
const formulario =document.querySelector('.formulario');

// OBJETO DATA
const data = {
    nombre : "",
    mail : "",
    msj : ""
}


// chckVerde.checked = true;
//btnEnviar.addEventListener('click', (e) => {
    //EL PARAMETRO e HACE REFERENCIA AL EVENTO QUE ESTA OCURRIENDO Y PASA 
    //AUTOMATICAMENTE
//    e.preventDefault();
//    console.log(e);
//});

// THIS HACE REFERENCIA AL OBJETO AL QUE SE LE ESTA HACIENDO ADDEVENT LISTENER 
chckVerde.addEventListener('click', function (e) {
    // console.log(this);
    if (this.checked) {
        console.log('hola');
        // this.style.backgroundColor = 'bg-verde' //ADD NEWS STYLES
    }
    // console.log(this);
});


// TRES OBJETOS EJECUTAN LA MISMA FUNCION 
// A LA FUNCION CON ADDEVENT LISTENER NO ES NECESARIO PASARLE ARGUMENTO
// EL ARGUMENTO PASA SOLO ( QUE ES EL EVENTO)

inptNombre.addEventListener('input',leerText);
inptEmail.addEventListener('input',leerText);
txtMsj.addEventListener('input',leerText);

function leerText(e) {
    data[this.id] = this.value; //AGREGANDO A NUESTRO OBJETO VALUES DEL FORM
    console.log(data);
}


// EVENTO SUBMIT
formulario.addEventListener('submit',function (e) {
    e.preventDefault();

    //Validar Formulario
    const {nombre, mail, msj} = data;

    if (nombre == '') {
        mostrarMensaje('Completa el nombre');
        return false; // CORTA LA EJECUCION DEL CODIGO DE ABAJO 
    }

    if (mail == '') {
        mostrarMensaje('Completa el email');
        return false; // CORTA LA EJECUCION DEL CODIGO DE ABAJO 
    }

    if (msj == '') {
        mostrarMensaje('Completa el mensaje');
        return false; // CORTA LA EJECUCION DEL CODIGO DE ABAJO 
    }

    success('Formulario Enviado');
});


function mostrarMensaje(msj) {
    const elemento = document.createElement('P');
    elemento.textContent = msj;
    elemento.classList.add('error');
    formulario.appendChild(elemento);
    setTimeout(() => {
        elemento.remove();
    }, 2000);
}

function success(msj) {
    const element = document.createElement('P');
    element.textContent = msj;
    element.classList.add('error');
    element.style.backgroundColor = 'green';
    formulario.appendChild(element);
    setTimeout(() => {
        element.remove();
    }, 2000);
    
}