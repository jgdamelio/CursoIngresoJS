/*
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra
Norte, Sur, Este u Oeste
*/

function mostrar()
{
	let destinoIngresado;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	// Solución con SWITCH ----------------------------------------------------------------
	switch (destinoIngresado)
	{
		case "Bariloche":
			alert("Se encuentra al Oeste");
			break;
		case "Cataratas":
			alert("Se encuentra al Norte");
			break;
		case "Mar del plata":
			alert("Se encuentra al Este");
			break;
		case "Ushuaia":
			alert("Se encuentra al Sur");
			break;
	}

	/* Solución alernativa con IF ---------------------------------------------------------
	
	if(destinoIngresado == "Bariloche")
	{
		alert("Se encuentra al Oeste");
	}
	else
	{
		if(destinoIngresado == "Cataratas")
		{
			alert("Se encuentra al Norte");
		}
		else
		{
			if(destinoIngresado == "Mar del plata")
			{
				alert("Se encuentra al Este");
			}
			else // Ushuaia
			{
				alert("Se encuenta al Sur");
			}
		}
	}*/
}