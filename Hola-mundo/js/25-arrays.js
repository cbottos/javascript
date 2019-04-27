'use strict'

//ARRAYS, ARREGLOS, MATRICES

var nombres = ["Cristian", "Ariel", 52, true];
// INDICES        0           1     2    3

var lenguajes = new Array("PHP","JS","JAVA");

console.log(nombres);
console.log(lenguajes);

console.log(nombres[1]);

//----------------------

console.log(nombres.length);

lenguajes.forEach((elemento, index, data) =>
{
	//document.write(elemento + "</br>", index + "</br>", data + "</br>");
	document.write(elemento);
});