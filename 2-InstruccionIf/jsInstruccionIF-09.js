/*
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
*/

function mostrar()
{
	let numeroRandom;
	let maximo = 10;
	let minimo = 1;

	numeroRandom = Math.round(Math.random() * (maximo - minimo) + minimo);
	alert(numeroRandom);
}