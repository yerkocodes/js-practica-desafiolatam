//Ejercicio 1 '' -------------------------------------------

let form = document.getElementById('formulario');

form.addEventListener('submit', function(e) {
  event.preventDefault();
  limpiarErrores();
  let textNombre = document.querySelector('#nombre').value;
  let textAsunto = document.querySelector('#asunto').value;
  let textMensaje = document.querySelector('#mensaje').value;

  let resultado = validar(textNombre,textAsunto,textMensaje);

  if (resultado == true) {
    exito();
  };
});


const limpiarErrores = () => {
  document.querySelector('.resultado').innerHTML = "";
  document.querySelector('.errorNombre').innerHTML = "";
  document.querySelector('.errorAsunto').innerHTML = "";
  document.querySelector('.errorMensaje').innerHTML = "";
};

const exito = () => {
  document.querySelector('.resultado').innerHTML = "Mensaje enviado con exito!";
}

const validar = (nombre,asunto,mensaje) => {
  let pasamosLaValidacion = true;

//  if (validacionGen.test(nombre,asunto,mensaje) == false) {
//    document.querySelector('.errorNombre').innerHTML = "El nombre es requerido.";
//    document.querySelector('.errorAsunto').innerHTML = "El asunto es requerido.";
//    document.querySelector('.errorMensaje').innerHTML = "El mensaje es requerido.";
//    pasamosLaValidacion = false;
//  };

  let validacionNombre =  /[a-zA-Z]/; // Expresion regular
  
  if (validacionNombre.test(nombre) == false) {
    document.querySelector('.errorNombre').innerHTML = "El nombre es requerido";
    pasamosLaValidacion = false;
  }

  let validacionAsunto =  /[a-zA-Z]/; // Expresion regular
  
  if (validacionAsunto.test(asunto) == false) {
    document.querySelector('.errorAsunto').innerHTML = "El asunto es requerido";
    pasamosLaValidacion = false;
  }

  let validacionMensaje =  /[a-zA-Z]/; // Expresion regular
  
  if (validacionMensaje.test(mensaje) == false) {
    document.querySelector('.errorMensaje').innerHTML = "El mensaje es requerido";
    pasamosLaValidacion = false;
  }


  return pasamosLaValidacion;

};







// Ejercicio 2 'Selector de colores'

//let btn1 = document.getElementById('btn-1'); 
//let btn2 = document.getElementById('btn-2'); 
//let btn3 = document.getElementById('btn-3'); 
//let btn4 = document.getElementById('btn-4'); 
//let btn5 = document.getElementById('btn-5'); 
//let btn6 = document.getElementById('btn-6'); 

//let colorBox = document.getElementById('caja');

//btn1.addEventListener('click', function() {
//})

//let color = document.getElementsByTagName('button');

//color.addEventListener('click',function(){
//console.log('bien hecho');
//})
