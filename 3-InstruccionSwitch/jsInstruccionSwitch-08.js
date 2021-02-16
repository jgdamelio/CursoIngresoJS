/*
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/

function mostrar()
{
	let destinoIngresado;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	//Solución con SWITCH --------------------------------------------------------
	switch (destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			alert("Hace FRÍO");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("Hace CALOR");
	}

	/*Solución alternativa con IF ------------------------------------------------

	if(destinoIngresado == "Bariloche" || destinoIngresado == "Ushuaia")
	{
		alert("Hace FRÍO");
	}
	else // Mar del plata y Cataratas
	{
		alert("Hace CALOR");
	}*/
}