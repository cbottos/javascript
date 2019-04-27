'use strict'

/*
1. Pida 6 numeros por pantalla y los meta en un array
2. Mostrar array entero en el cuerpo de la pagina
3. Ordenar y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor intruducido por el usuario, que nos diga si lo encuentra y su indice
(se valorará el uso de funciones)
*/
var contador = 0;
var numeros = [];

while(contador < 6)
{
	let numero = prompt("Ingrese un numero",0);
	if(numero > 0 && !isNaN(numero))
	{
		numeros.push(numero);
		contador++;
	}
	else
	{
		numero = prompt("Ingrese nuevamente el numero",0);
	}
}


numeros.forEach(elemento =>{
document.write("<h3>" + elemento + "</h3>");
});

