'use strict'

// TRANSFORMACION DE TEXTOS(CADENAS)
var numero = 444;
var texto1 = "Bienvenido al curso de java script";
var texto2 = "Gran estudiante";

var dato = numero.toString();
dato = texto1.toUpperCase();
dato = texto2.toLowerCase();

console.log(dato);

//calcular longitud

var nombre = "";
var nombre = ["hola","chau"];
console.log(nombre.length);

//CONCATENAR unir textos

//var textoTotal = texto1 + "/" + texto2;
var textoTotal = texto1.concat("/" + texto2);
console.log(textoTotal);

// BUSQUEDAS DE TEXTO

//var busqueda = texto1.indexOf("curso"); 
//la palabra comienza a partir del caracter nro: 

var busqueda = texto1.match("curso");
console.log(busqueda);

var busqueda = texto1.substr(14,5);
console.log(busqueda);

//var busqueda = texto1.startsWith("Bienvenido");
console.log(texto1.split(" "));
