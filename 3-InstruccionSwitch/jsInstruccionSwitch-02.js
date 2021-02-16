/*
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
*/

function mostrar()
{
	let mes;
	mes = document.getElementById("txtIdMes").value;

	// Solución con SWITCH ----------------------------------------------------------------
	switch (mes)
	{
		default:
			alert("Falta para el invierno");
			break;
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frío");
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasó el frío, ahora calor!!!");
			break; // No es necesario poner el último break del switch
	}
	/* Solución alternativa con IF ------------------------------------------------------
	if(mes == "Julio" || mes == "Agosto")
	{
		alert("Abrigate que hace frío");
	}
	else
	{
		if(mes == "Septiembre" || mes == "Octubre" || mes == "Noviembre" || mes == "Diciembre")
		{
			alert("Ya pasó el frío. Ahora calor!!!");
		}
		else
		{
			alert("Falta para el invierno");
		}
	}*/
}