function mostrar()
{
	let edad;
	let estadoCivil;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	estadoCivil = document.getElementById("estadoCivil").value;

	if(edad > 17)
	{
		if(estadoCivil == "Soltero")//(estadoCivil !="Casado" && estadoCivil != "Divorciado")
		{
			alert("Es soltero y no es menor");
		}
	}
	
}