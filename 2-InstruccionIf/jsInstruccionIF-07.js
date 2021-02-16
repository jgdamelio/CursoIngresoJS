/*
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
*/

function mostrar()
{
	let edad;
	let estadoCivil;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	estadoCivil = document.getElementById("estadoCivil").value;

	if(edad < 18 && estadoCivil != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
	}
}
/*
EJERCICIO 1, SÁBADO 13/2

1-con if
pedir a una persoan que fue de vaciones , la distancia que viajo y el tiempo que tardo, 
para calcular la velocidad
e informar:
60 km/hr = muy lento
hata 80km/h= lento
hasta 100= buen ritmo
hasta 120= ahi de la ley
mas = eso no se hace


function mostrar()
{
	let distancia;
	let tiempo;
	let kmsPorHora;

	distancia = prompt("Ingrese la distancia recorrida");
	distancia = parseFloat(distancia);

	tiempo = prompt("Ingrese el tiempo que tardó");
	tiempo = parseFloat(tiempo);

	kmsPorHora = distancia / tiempo;
	
	if(kmsPorHora < 61)
	{
		alert("Muy lento");
	}
	else
	{
		if(kmsPorHora < 81)
		{
			alert("Lento");
		}
		else
		{
			if(kmsPorHora < 101)
			{
				alert("Buen ritmo");
			}
			else
			{
				if(kmsPorHora < 121)
				{
					alert("Ahí de la ley");
				}
				else
				{
					alert("Eso no se hace");
				}
			}
		}
	}
}
*/