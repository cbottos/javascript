'use strict'

//DOM (Document Object Model)

function cambiaColor(color){
	caja.style.background = color;
}

//CONSEGUIR ELEMENTOS POR ID

//var caja = document.getElementById("micaja");
var cajaPorClase = document.querySelector(".hola"); // selecciona por clase
var caja = document.querySelector("#micaja"); //Selecciona por id del elemento

caja.innerHTML = "texto en la caja desde js";
cambiaColor("red");
caja.style.padding = "20px";
caja.className = "hola";

console.log(caja);

// CONSEGUIR ELEMETOS POR SU ETIQUETA

var todosLosDivs = document.getElementsByTagName("div");
console.log(todosLosDivs);

//var contenidoEnTexto = todosLosDivs[2].innerHTML;
//console.log(contenidoEnTexto);


var valor;

for(valor in todosLosDivs){
	if(typeof(todosLosDivs[valor].textContent) == "string"){
	let parrafo = document.createElement("p");
	let hr = document.createElement("h1");
	let texto = document.createTextNode(todosLosDivs[valor].textContent);
	hr.append(texto);
	parrafo.append(hr);
	document.querySelector("#miSection").appendChild(parrafo);
	}
	
}

// CONSEGUIR ELEMENTOS POR SU CLASE

var rojo = document.getElementsByClassName("rojo");

var clase;
for(clase in rojo){
	if(rojo[clase].className == "rojo"){
		rojo[clase].style.color = "yellow";	
	}
	
}

