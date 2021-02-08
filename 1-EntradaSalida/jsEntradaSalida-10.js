/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

/*
function mostrarAumento()
{
	let importe;
	let resultado;
	let descuento;

	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);

	descuento = importe * 0.25;

	resultado = importe - descuento;

	// resultado = importe - (importe * 0.25);

	// resultado = importe * 0.75;

	document.getElementById("txtIdResultado").value = resultado;
}
*/

/*
EJERCICIO 2, SÁBADO 6/2
2- en el ejercicio 10 de entrada y salida , se debe pedir el nombre del producto , 
tambien se debe pedir el porcentaje de descuento al usuario, mostar el mensaje 
"usted compro un XXXXXX con XX % de descuento, el precio final es XXXX"
*/

function mostrarAumento()
{
	let nombreProducto;
	let importe;
	let porcentajeDescuento;
	let descuento;
	let precioFinal;

	nombreProducto = prompt("Ingrese el nombre del producto:");

	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);

	porcentajeDescuento = prompt("Ingrese el porcentaje de descuento del producto:");
	porcentajeDescuento = parseInt(porcentajeDescuento);

	descuento = (importe * porcentajeDescuento) /100;

	precioFinal = importe - descuento;

	alert("Usted compró un " + nombreProducto + " con " + porcentajeDescuento + " % de descuento y el precio final del mismo es $" + precioFinal);

	/*

	Variante de salida, utilizando el input de resultado

	document.getElementById("txtIdResultado").value = "Usted compró un " + nombreProducto + " con " + porcentajeDescuento + " % de descuento y el precio final del mismo es $" + precioFinal
	*/
}