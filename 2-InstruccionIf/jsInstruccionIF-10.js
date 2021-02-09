function mostrar()
{
	let notaExamen;

	notaExamen = Math.floor(Math.random() * 11);

	alert(notaExamen);

	if (notaExamen > 8)
	{
		alert("Excelente");
	}
	else{
		if (notaExamen < 4)
		{
			alert("Vamos, la próxima se puede");
		}
		else
		{
			alert("Aprobo");
		}
	}

}