function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad > 17)
	{
		alert("Es mayor de edad");
	}

	else
	{
		if(edad < 13)
		{
			alert("Es un niño");
		}

		else
		{
			alert("Es adolescente");
		}
	}
	
	/*
	else
	{
		if (edad < 18 && edad > 12)
		{
			alert("Es adolescente");
		}

	else
		{
			alert("Es un niño");
		}
	}
	*/
}