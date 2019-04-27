'use strict'

//Tipos de datos
var num1 = 7;
var num2 = 12;
var operacion = num1 + num2;
//alert("el resultado de la operacion es: " + operacion);

var texto = "10";
var numero = Number(texto);
var entero = parseInt(texto);
var flotante = parseFloat(texto);
var texto2 = String(numero);

console.log(numero,flotante, entero, texto2); 
console.log(typeof(entero));
