/*
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/

function mostrar()
{
	let mes;
	mes = document.getElementById("txtIdMes").value;

	// Solución con SWITCH -------------------------------------------------------------
	switch (mes)
	{
		case "Febrero":
			alert("Tiene 28 días");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Tiene 30 días");
			break;
		default:
			alert("Tiene 31 días");
			break;
	}

	/* Solución con IF ------------------------------------------------------------------
	if(mes == "Febrero")
	{
		alert("Tiene 28 días");
	}
	else
	{
		if(mes == "Abril" || mes == "Junio" || mes == "Septiembre" || mes == "Noviembre")
		{
			alert("Tiene 30 días");
		}
		else
		{
			alert("Tiene 31 días");
		}
	}*/
}