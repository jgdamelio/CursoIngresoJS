var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	eleccionMaquina = Math.floor(Math.random() * 3 + 1);
	console.log(eleccionMaquina);
}

function piedra()
{
	if(eleccionMaquina == 1)
    {
        alert("Empató");
    }
    else
    {
        if(eleccionMaquina == 2)
        {
            alert("Perdió");
        }
        else
        {
            alert("Ganó");
        }
    }
}

function papel()
{
	if(eleccionMaquina == 1)
    {
        alert("Ganó");
    }
    else
    {
        if(eleccionMaquina == 2)
        {
            alert("Empató");
        }
        else
        {
            alert("Perdió");
        }
    }
}

function tijera()
{
	if(eleccionMaquina == 1)
    {
        alert("Perdió");
    }
    else
    {
        if(eleccionMaquina == 2)
        {
            alert("Ganó");
        }
        else
        {
            alert("Empató");
        }
    }
}

function mostrarResultado()
{
	ContadorDeEmpates=ContadorDeEmpates+1;
	ContadorDeGanadas=ContadorDeGanadas+1;
	ContadorDePerdidas=ContadorDePerdidas+1;

	document.getElementById("txtIdGanadas").value = ContadorDeGanadas;
	document.getElementById("txtIdPerdidas").value = ContadorDePerdidas;
	document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates;
}