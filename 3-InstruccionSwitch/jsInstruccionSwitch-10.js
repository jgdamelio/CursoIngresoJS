/*
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos,
informar si "Se viaja" o "No se viaja" a ese lugar
en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"
en Verano: Se viaja a Mar del plata y Cataratas solamente
en Otoño: Se viaja a todos los destinos.
primavera: solo no se viaja a Bariloche
*/

function mostrar()
{
	let estacionIngresada;
	let destinoIngresado;

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	//Solución con SWITCH ----------------------------------------------------------------------

	switch (estacionIngresada)
	{
		case "Invierno":
			switch (destinoIngresado)
			{
				case "Bariloche":
					alert("Se viaja");
					break;
				default:
					alert("No se viaja");
					break;
			}
		break;
		case "Verano":
			switch (destinoIngresado)
			{
				case "Cataratas":
				case "Mar del plata":
					alert("Se viaja");
					break;
				default:
					alert("No se viaja");
					break;
			}
		break;
		case "Otoño":
			default:
				alert("Se viaja");
		break;
		case "Primavera":
			switch (destinoIngresado)
			{
				case "Bariloche":
					alert("No se viaja");
					break;
				default:
					alert("Se viaja");
					break;
			}
		break;
	}
	/*
	Solución alternativa con IF ------------------------------------------------------------
	
	if(estacionIngresada == "Invierno")
	{
		if(destinoIngresado == "Bariloche")
		{
			alert("Se viaja");
		}
		else
		{
			alert("No se viaja");
		}
	}
	else
	{
		if(estacionIngresada == "Verano")
		{
			if(destinoIngresado == "Mar del plata" || destinoIngresado == "Cataratas")
			{
				alert("Se viaja");
			}
			else
			{
				alert("No se viaja");
			}
		}
		else
		{
			if(estacionIngresada == "Otoño")
			{
				alert("Se viaja");
			}
			else
			{
				if(estacionIngresada == "Primavera")
				{
					if(destinoIngresado != "Bariloche")
					{
						alert("Se viaja");
					}
					else
					{
						alert("No se viaja");
					}
				}
			}
		}
	}*/
}