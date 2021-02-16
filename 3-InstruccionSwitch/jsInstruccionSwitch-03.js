/*
al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
*/

function mostrar()
{
	let mes;
	mes = document.getElementById("txtIdMes").value;

	// Solución con SWITCH ---------------------------------------------------------------
	switch (mes)
	{
		case "Febrero":
			alert("Este mes no tiene más de 29 días.");
			break;
		default:
			alert("Este mes tiene 30 o más días");
			break;
	}

	/* Solución alternativa con IF ------------------------------------------------------
	if(mes == "Febrero")
	{
		alert("Este mes no tiene más de 29 días");
	}
	else
	{
		alert("Este mes tiene 30 días o más");
	}*/
}