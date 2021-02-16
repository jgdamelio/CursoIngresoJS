/*
una agencia de viajes debe sacar las tarifas de los viajes ,
se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año
y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10%
Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10%
Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10%
Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/

function mostrar()
{
	let estacionIngresada;
	let destinoIngresado;
	let estadia;
	let aumento;
	let descuento;
	let precioFinal;
	let mensaje;

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	estadia = 15000;
	aumento = 0;
	descuento = 0;

	// Solución con SWITCH -----------------------------------------------------------------

	switch (estacionIngresada) {
		case "Invierno":
			switch (destinoIngresado) {
				case "Bariloche":
					aumento = 20;
					break;
				case "Mar del plata":
					descuento = 20;
					break;
				default: // Córdoba y Cataratas
				descuento = 10;
				break;
			}
		break;
		case "Verano":
			switch (destinoIngresado) {
				case "Bariloche":
					descuento = 20;
					break;
				case "Mar del plata":
					aumento = 20;
					break;
				default: // Córdoba y Cataratas
					aumento = 10;
					break;
			}
		break;
		case "Primavera":
		case "Otoño":
			if(destinoIngresado != "Cordoba")
			{
				aumento = 10;
			}
		break;
	}
	
	/*Solución con SWITCH e IF -------------------------------------------------------

	switch (estacionIngresada) {
		case "Invierno":
			if(destinoIngresado == "Bariloche")
			{
				aumento = 20;
			}
			else
			{
				if(destinoIngresado == "Mar del plata")
				{
					descuento = 20;
				}
				else
				{
					descuento = 10;
				}
			}
			break;
	
		case "Verano":
			if(destinoIngresado == "Bariloche")
			{
				descuento = 20; 
			}
			else
			{
				if(destinoIngresado == "Mar del plata")
				{
					aumento = 20;
				}
				else
				{
					aumento = 10;
				}
			}
			break;
		case "Otoño":
		case "Primavera":
			if(destinoIngresado != "Cordoba")
			{
				aumento = 10;
			}
			break;
	}*/
	
	/*Solución alternativa con IF ----------------------------------------------------
	
	if(estacionIngresada == "Invierno")
	{
		if(destinoIngresado == "Bariloche")
		{
			aumento = 20;
		}
		else
		{
			if(destinoIngresado == "Mar del plata")
			{
				descuento = 20;
			}
			else
			{
				descuento = 10;
			}
		}
	}
	else
	{
		if(estacionIngresada == "Verano")
		{
			if(destinoIngresado == "Bariloche")
			{
				descuento = 20;
			}
			else
			{
				if(destinoIngresado == "Mar del plata")
				{
					aumento = 20;
				}
				else
				{
					aumento = 10;
				}
			}
		}
		else
		{
			if(destinoIngresado != "Cordoba")
			{
				aumento = 10;
			}
		
		}
	}*/

	/*
	Cálculo de aumentos y descuentos

	Aumento 20% 	= $18000
	Aumento 10% 	= $16500
	Descuento 10%	= $13500
	Descuento 20%	= $12000
	*/

	if(aumento != 0)
	{
		precioFinal = estadia + estadia * aumento /100;
	}
	else
	{
		if(descuento != 0)
		{
			precioFinal = estadia - estadia * descuento /100;
		}
		else
		{
			precioFinal = estadia;
		}
	}

	// Salida del programa

	mensaje = "El precio final para este destino es $" + precioFinal;
	alert(mensaje);
}