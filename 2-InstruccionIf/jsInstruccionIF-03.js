function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	/* El condicional if/else presenta una ÚNICA condición. En caso de ser V se ejecuta el if
	y en caso de ser F se ejecuta el else*/

	if(edad >= 18){
		alert("Es mayor de edad");
		}
		else{
			alert("Es menor de edad");}

}