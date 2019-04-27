'esu strict'

// parametros REST y SPREAD

function listadoFrutas(fruta1, fruta2, ...restoFrutas)
{
	console.log("Fruta 1: " + fruta1);
	console.log("Fruta 2: " + fruta2);
	console.log("Resto de Frutas: " + restoFrutas)
}

listadoFrutas("Pera", "Sandia", "banana", "manzana", "coco"); //REST

var frutas = ["Naranja", "Manzana"];

listadoFrutas(...frutas,"Pera", "Sandia", "banana", "manzana", "coco") // SPREAD