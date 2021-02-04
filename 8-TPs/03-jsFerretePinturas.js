/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let fahrenheit;
    let centigrados;

    fahrenheit = document.getElementById("txtIdTemperatura").value;
    fahrenheit = parseFloat(fahrenheit);

    // La fórmula para calcular el paso de °Fahrenheit a °Centígrados es = (°F -32) * 5/9

    centigrados = [(fahrenheit - 32) *5] /9;
    //centigrados = (fahrenheit - 32) *1.8; No me estaría dando de esta manera

    alert(fahrenheit + " Fahrenheit son " + centigrados + " Centígrados");
	
}

function CentigradosFahrenheit () 
{
    let centigrados;
    let fahrenheit;

    centigrados = document.getElementById("txtIdTemperatura").value;
    centigrados = parseFloat(centigrados);

    // La fórmula para pasar de °C a °F es = (°C * 5/9) + 32. En este caso multipliqué por 1.8, que es lo mismo

    fahrenheit = (centigrados * 1.8) + 32;

    alert(centigrados + " Centígrados son " + fahrenheit + " Fahrenheit");
	
}