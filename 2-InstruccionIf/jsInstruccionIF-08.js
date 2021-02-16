/*
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
*/

function mostrar()
{
	let edad;
	let estadoCivil;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	estadoCivil = document.getElementById("estadoCivil").value;

	//if(!(edad < 18 || estadoCivil != "Soltero"))
	if(edad > 17 && estadoCivil == "Soltero")
	{
		alert("Es soltero y no es menor");
	}
}
/*

EJERCICIO 2, SABADO 13/2

2- con if
ingresar el nombre y los datos requeridos para calcular el IMC , e informar a la persona si es:
Bajo peso
Peso normal
Preobesidad
Obesidad I
Obesidad II
Obesidad II


function mostrar()
{
	let peso;
	let altura;
	let imc;

	peso = prompt("Ingrese su peso");
	peso = parseFloat(peso);

	altura = prompt("Ingrese su altura");
	altura = parseFloat(altura);

	console.log(peso);
	console.log(altura);

	imc = peso / Math.pow(altura,2);

	alert(imc);

	if(imc < 18.5)
	{
		alert("Bajo peso");
	}
	else
	{
		if(imc < 24.9)
		{
			alert("Peso Normal");
		}
		else
		{
			if(imc < 29.9)
			{
				alert("Sobrepeso");
			}
			else
			{
				alert("Obesidad");
			}
		}
		
	}
	
}
*/

