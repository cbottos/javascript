'use strict'

// ARRAYS MULTIDIMENCIONALES: ARRAYS DENTRO DE OTROS ARRAYS

var categorias = ["Accion","Terror","Comedia"];
var peliculas = ["La verdad duele","La vida es bella","Gran Torino"];
var cine = [categorias, peliculas];

console.log(peliculas);
console.log(peliculas.sort());
console.log(peliculas.reverse())
console.log(cine[0][1]);
console.log(cine[1][2]);

for(let lenguaje in peliculas)
{
	document.write("<h3>" +  peliculas[lenguaje] + "</h3>");
}

peliculas.push = "batman";
peliculas[0] = undefined;
console.log(categorias.indexOf("Terror"));

//console.log(categorias.splice(1,2));
peliculas = peliculas.join();
console.log(peliculas);

var cadena = "texto1, texto2, texto3";
cadena = cadena.split(", ");
console.log(cadena);

