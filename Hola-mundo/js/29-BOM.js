'use strict'

// BOM (Browser object model)

function getBom(){
console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(window.screen.width);
console.log(window.screen.height);
console.log(window.location.href);

}

getBom();

function redirect(){
	window.location.href = "http://www.google.com.ar";	
}

function abrirVentana(){
	window.open("http://www.google.com.ar","","width=400,height=300");
}



