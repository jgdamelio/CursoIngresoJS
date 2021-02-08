/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."

function SacarResto()
{
	let dividendo;
	let divisor;
	let resto;

	dividendo = document.getElementById("txtIdNumeroDividendo").value;
	divisor = document.getElementById("txtIdNumeroDivisor").value;

	dividendo = parseInt(dividendo);
	divisor = parseInt(divisor);

	resto = dividendo % divisor;

	alert("El resto es " + resto);
}

*/

/*

3 - Ingresar dos numeros por id
Se pide:
mostrar por console.log:
a) La suma de los dos numeros
b) El promedio de los numeros.
c) El modulo de los numeros (el primero en modulo del segundo)

UTILIZAR EL EJERCICIO 8 para resolverlo

*/

function SacarResto()
{
	let numeroUno;
	let numeroDos;
	let suma;
	let promedio;
	let modulo;
	let mensajeSuma;
	let mensajePromedio;
	let mensajeModulo;

	numeroUno = document.getElementById("txtIdNumeroDividendo").value;
	numeroUno = parseInt(numeroUno);

	numeroDos = document.getElementById("txtIdNumeroDivisor").value;
	numeroDos = parseInt(numeroDos);

	suma = numeroUno + numeroDos;

	promedio = suma /2;

	modulo = numeroUno % numeroDos;

	mensajeSuma = "La suma de estos números es " + suma;
	mensajePromedio = "El promedio de estos números es " + promedio;
	mensajeModulo = "El módulo de estos números es " + modulo;

	console.log(mensajeSuma);
	console.log(mensajePromedio);
	console.log(mensajeModulo);
}
