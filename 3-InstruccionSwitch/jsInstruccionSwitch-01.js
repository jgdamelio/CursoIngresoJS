/*al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."
*/

function mostrar()
{
	let mes;
	mes = document.getElementById("txtIdMes").value;
	// let edad;

	// Solución con SWITCH -----------------------------------------------------------
	switch (mes)
	{
		case "Enero":
			alert("Que comiences bien el año!!!");
			break;
		case "Marzo":
			/*edad = prompt("¿Cuántos años tenés?");
			if(edad < 18)*/
			{
			alert("A clases!!!");
			}
			break;
		case "Julio":
			alert("Se vienen las vacaciones!!!");
			break;
		case "Diciembre":
			alert("Felices fiestas!!!");
			break;
	}
	/* Solución con IF ---------------------------------------------------------------
	if(mes == "Enero")
	{
		alert("Que comiences bien el año!!!");
	}
	else
	{
		if(mes == "Marzo")
		{
			alert("A clases!!!");
		}
		else
		{
			if(mes == "Julio")
			{
				alert("Se vienen las vacaciones!!!");
			}
			else
			{
				if(mes == "Diciembre")
				{
					alert("Felices fiestas!!!");
				}
			}
		}
	}*/
}