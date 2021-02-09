function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	/* El condicional if/else presenta una ÚNICA condición. En caso de ser V se ejecuta el if
	y en caso de ser F se ejecuta el else*/

	if (edad > 17) { //(edad >= 18) Optimizar el programa. Un cálculo (> que) en lugar de dos (> e = que)
		alert("Es mayor de edad");
		}
		else{
			alert("Es menor de edad");}

}