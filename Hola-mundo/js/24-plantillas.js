'use strict'

//PLANTILLA

var nombre = prompt("ingrese su nombre: ","");
var apellidos = prompt("Ingrese su/sus apellido/s","");

var texto = `
<h1>Mi nombre es: ${nombre} </h1>
<h3>Mi apellido es: ${apellidos} </h3>
`;

document.write(texto);