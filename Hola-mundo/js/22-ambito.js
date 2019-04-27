'use strict'

// ANBITO

var numero = 12;

function holaMundo(texto){
	var hola_mundo="texto dentro de la funcion";
	console.log(hola_mundo);
	console.log(texto);
	console.log(numero.toString());
}

var texto = "Hola mundo soy una variable global";
holaMundo(texto);