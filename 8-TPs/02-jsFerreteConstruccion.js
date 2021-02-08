/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largoTerreno;
    let anchoTerreno;
    let alambre;

    largoTerreno = document.getElementById("txtIdLargo").value;
    largoTerreno = parseInt(largoTerreno);

    anchoTerreno = document.getElementById("txtIdAncho").value;
    anchoTerreno = parseInt(anchoTerreno);

    alambre = [(largoTerreno + anchoTerreno) *2] *3; // Perímetro de un rectángulo = suma de los lados *2

    alert("El alambre necesario para esas medidas es: " + alambre);

}
function Circulo () 
{
    let radio;
    let alambre;

    radio = document.getElementById("txtIdRadio").value;
    radio = parseInt(radio);

    // alambre = 2*3.14*radio*3; // Circunferencia de un círculo = 2*PI*radio
    alambre = (Math.PI *2*radio)*3;
    alambre = alambre.toFixed(2);

    alert("El alambre necesario para esas medidas es: " + alambre);
	
}
function Materiales () 
{
    let largoTerreno;
    let anchoTerreno;
    let bolsasCemento;
    let bolsasCal;

    largoTerreno = document.getElementById("txtIdLargo").value;
    largoTerreno = parseInt(largoTerreno);

    anchoTerreno = document.getElementById("txtIdAncho").value;
    anchoTerreno = parseInt(anchoTerreno);

    bolsasCemento = [(largoTerreno * anchoTerreno) *2]; //Superficie de un rectángulo = base por altura
    bolsasCal = [(largoTerreno * anchoTerreno) *3];

    alert("Para esas medidas, lo que usted necesita son " + bolsasCemento + " bolsas de cemento y " + bolsasCal + " bolsas de cal");
	
}