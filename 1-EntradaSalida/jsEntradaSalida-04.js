/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/

function mostrar()
{
	let nombre;
	nombre = prompt("Ingrese su nombre: ");
	document.getElementById("txtIdNombre").value = nombre;
	
}



/*

EJERCICIO 1, SABADO 6/2

1. Ingresar descripción (por prompt) y precio de un producto (por id).
El programa deberá mostrar por alert la descripción del producto junto al precio aumentado en un 30%. 
Pueden utilizar el html del ejercicio 4 para resolverlo.

function mostrar()
{
	let descripcion;
	let precio;
	let porcentajeAumento;
	let aumento;
	let precioFinal;
	let mensaje;

	descripcion = prompt("Ingrese la descripción del producto: ");

	precio = document.getElementById("txtIdNombre").value;
	precio = parseFloat(precio);

	porcentajeAumento = 30;

	aumento = (precio * porcentajeAumento) /100;

	precioFinal = precio + aumento;

	mensaje = "El producto seleccionado es " + descripcion + " y tiene un precio de " + precioFinal + " con el 30% de aumento incluido";

	alert(mensaje);

}