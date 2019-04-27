'use strict'

//ejercicio 1

//Programa que pida dos numeros y que nos diga cual es
//el mayor, cual el menos y si son iguales

var num = prompt("introduce el primer numero", 0);
var num2 = prompt("introduce el segundo numero",0);

console.log("el numero 1 es:" + num);
console.log("el numero 2 es: " + num2);

if(num < num2)
{
	console.log("el numero 1 es menor al numero 2");
}
else if(num > num2)
{
	console.log("el numero 1 es mayor al numero 2");
}
else
{
	console.log("son iguales");
}

//console.log("el resultado es: " + (parseInt(num) + parseInt(num2)));

/* 
    PLUS: Si los numeros no son un numero o son menores a cero, que nos lo vuelva a pedir
*/ 

var num3 = prompt("introduce un numero", "");

while(!(num3 > 0) || isNaN(num3))
{
  num3 = prompt("vuelva a ingresar el numero", 0);
}
