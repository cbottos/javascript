'use strict'

// FUNCIONES

function porConsola(numero1, numero2)
{
	console.log(numero1);
	console.log(numero2);
}

function porPantalla(numero1, numero2)
{
	document.write(String(numero1) + "<br/>");
	document.write(String(numero2));
} 

function calculadora(param1, param2, mostrar = false)
{
	if(!mostrar)
	{
		porConsola(param1, param2);
	}
	else
	{
		porPantalla(param1,param2);
	}	
}
calculadora(12,10, true);
calculadora(12,10);