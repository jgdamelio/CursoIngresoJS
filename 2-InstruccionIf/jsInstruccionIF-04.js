function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad > 12 && edad < 18)  //edad >= 13 && edad <= 17
	{
		alert("Es adolescente");
	}
	
}

/*
	if (edad > 12)
	{
		if (edad < 18)
		{
			alert(Es adolescente);
		}
	}