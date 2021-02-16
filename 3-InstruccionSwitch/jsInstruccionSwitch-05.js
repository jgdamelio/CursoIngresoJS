
/*
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
*/

function mostrar()
{
	let horaDelDia;
	horaDelDia = document.getElementById("txtIdHora").value;
	horaDelDia = parseInt(horaDelDia); 
	
/*
Para entrar en el case, debe tener EL MISMO VALOR Y EL MISMO TIPO DE DATO.
El == que usa el SWITCH es el más restrictivo (===) 
Si parseo el dato ingresado por input, en el CASE debo recordar tratarlo como número y NO entrcomillarlo.
En caso de no parsearlo, será un string. Y por ende habría que entrecomillarlo. Ej: case "7", case "8"...
*/

	//Solución con SWITCH -----------------------------------------------------------------
	switch (horaDelDia)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana");
			break;
	}
	/* Solución con IF ----------------------------------------------------------------------
	if(horaDelDia > 6 && horaDelDia < 12)
	{
		alert("Es de mañana");
	}*/
}