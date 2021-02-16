/*
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4

Test

notaExamen = 9
notaExamen = 8
notaExamen = 4
notaExamen = 3
*/


function mostrar()
{
	let notaExamen;

	/* El 9 surge de la diferencia entre el número máximo del rango deseado (10)
	y el número mínimo del mismo (1) Al resultado se le suma el mínimo. En este caso (1)*/
	notaExamen = Math.round(Math.random() * 9 + 1);

	console.log(notaExamen);

	/* Hardcodeo

	notaExamen = 9
	*/

	if (notaExamen > 8)
	{
		alert("Excelente");
	}
	else
	{
		if (notaExamen < 4)
		{
			alert("Vamos, la próxima se puede");
		}
		else
		{
			alert("Aprobó");
		}
	}

}