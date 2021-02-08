/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldoIngresado;
	let resultado;
	let porcentajeAumento;
	let aumento;

	sueldoIngresado = document.getElementById("txtIdSueldo").value;
	sueldoIngresado = parseInt(sueldoIngresado);

	porcentajeAumento = 10;

	aumento = (sueldoIngresado * porcentajeAumento)/100;

	resultado = sueldoIngresado + aumento;

	// resultado = sueldo + (sueldo * 0.1);

	// resultado = sueldo * 1.1;

	document.getElementById("txtIdResultado").value = resultado;
}
