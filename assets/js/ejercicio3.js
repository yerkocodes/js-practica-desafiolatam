// Ejercicio 3 'Calculadora'

let calcularSum = document.getElementById('btn-sumar');
let calcularRest = document.getElementById('btn-restar');

let num1 = document.getElementById('valor1');
let num2 = document.getElementById('valor2');

let resultado = document.querySelector('.resultado');

calcularSum.addEventListener('click', function(e){
  e.preventDefault();
  let a = parseInt(num1.value);
  let b = parseInt(num2.value);
  let result = a + b;

  resultado.innerHTML = `${result}`;
})

calcularRest.addEventListener('click', function(e){
  e.preventDefault();
  let a = parseInt(num1.value);
  let b = parseInt(num2.value);
  let result = a - b;
  let errorResult = 0;

  if ( result < 0){
    resultado.innerHTML = `${errorResult}`;
  } else {
    resultado.innerHTML = `${result}`;
  }
})
