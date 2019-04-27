'use strict'

//timer

function iniciarIntervalo(){
       	let tiempo = setInterval(function(){
		console.log("intervalo ejecutando");
	}, 2000);

	return tiempo;
}

function tiempoEjecutadoSoloUnaVez(){
		let tiempo = setTimeout(function(){
		console.log("solo un intervalo ejecutando");
	}, 2000);

	return tiempo;
}

/*

function pararTiempo(){
	clearInterval(intervalo(tiempo));
}

window.addEventListener('load', function(){
intervalo();
pararTiempo();
//tiempoEjecutadoSoloUnaVez();
})
*/

var tiempo;
var btnIniciarTiempo = document.getElementById("btnIniciarTiempo");
var btnPararTiempo = document.getElementById("btnPararTiempo");

btnIniciarTiempo.addEventListener("click", function(){
	alert("has iniciado intervalo");
	tiempo = iniciarIntervalo();
});

btnPararTiempo.addEventListener("click", function(){
	alert("Has parado el intervalo de tiempo");
	clearInterval(tiempo);	
});