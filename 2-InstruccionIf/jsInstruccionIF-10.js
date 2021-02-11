
/* Test

notaExamen = 9
notaExamen = 8
notaExamen = 4
notaExamen = 3
*/


function mostrar()
{
	let notaExamen;

	notaExamen = Math.floor(Math.random() * 10 + 1);

	/* Hardcodeo

	notaExamen = 9
	*/

	alert(notaExamen);

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