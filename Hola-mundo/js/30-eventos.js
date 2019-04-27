'use strict'

// EVENTOS DEL RATON

var boton = document.getElementById("btn");

boton.addEventListener('click', function(){
	cambiarColor();
});

function cambiarColor(){
	console.log("me has dado click");
	
	let bg = boton.style.background;
	
	if(bg == "red"){
		boton.style.background = "green";
	}
	else{
		boton.style.background = "red";	
	}
}

boton.addEventListener("mouseover", function(){
	boton.style.background = "yellow";
})

boton.addEventListener("mouseout", function(){
	boton.style.background = "black";
})
	
var input = document.getElementById("txtPrueba");

input.addEventListener("keypress", function(event){
	console.log("Tecla presionada:  " + String.fromCharCode(event.keyCode));
});
