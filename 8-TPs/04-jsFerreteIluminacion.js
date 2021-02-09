/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    // Declaración variables embebidas del HTML

    let cantidadLamparas;
    let marcaLamparas;
    let precioFinal;

    // Declaración variables de los porcentajes de descuento

    let descuentoCincuenta;
    let descuentoCuarenta;
    let descuentoTreinta;
    let descuentoVeinticinco;
    let descuentoVeinte;
    let descuentoQuince;
    let descuentoDiez;
    let descuentoCinco;

    // Declaración de la variable para el 10% de aumento 

    let aumentoDiezPorCiento;

    // Asignación y parseo del input cantidad lámparas

    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    cantidadLamparas = parseInt(cantidadLamparas);

    // Asignación del input marca lámparas

    marcaLamparas = document.getElementById("Marca").value;

    // Asignación precio final de cada lámpara

    precioFinal = 35 * cantidadLamparas;

    // Calculos de los distintos descuentos solicitados

    descuentoCincuenta = precioFinal *50 /100;
    descuentoCuarenta = precioFinal *40 /100;
    descuentoTreinta = precioFinal *30 /100;
    descuentoVeinticinco = precioFinal *25 /100;
    descuentoVeinte = precioFinal *20 /100;
    descuentoQuince = precioFinal *15 /100;
    descuentoDiez = precioFinal *10 /100;
    descuentoCinco = precioFinal *5 /100;

    // Calculo del 10% de aumento

    aumentoDiezPorCiento = precioFinal * 10 /100;

    // Solución al enunciado A

    if(cantidadLamparas > 5)
    {
        document.getElementById("txtIdprecioDescuento").value = precioFinal - descuentoCincuenta;
    }
   
    // Solución al enunciado B

    if(cantidadLamparas == 5)
    {
        if(marcaLamparas == "ArgentinaLuz")
        {
        document.getElementById("txtIdprecioDescuento").value = precioFinal - descuentoCuarenta;
        }
        else
        {
        document.getElementById("txtIdprecioDescuento").value = precioFinal - descuentoTreinta;
         }
    }

    // Solución al enunciado C

    if(cantidadLamparas == 4)
    {
        if(marcaLamparas == "ArgentinaLuz" || marcaLamparas == "FelipeLamparas")
        {
            document.getElementById("txtIdprecioDescuento").value = precioFinal - descuentoVeinticinco;
        }
        else
        {
            document.getElementById("txtIdprecioDescuento").value = precioFinal - descuentoVeinte;
        }
    }

    // Solución al enunciado D

    if(cantidadLamparas == 3)
    {
        if(marcaLamparas == "ArgentinaLuz")
        {
            document.getElementById("txtIdprecioDescuento").value = precioFinal - descuentoQuince;
        }
        else
        {
            if(marcaLamparas == "FelipeLamparas")
            {
                document.getElementById("txtIdprecioDescuento").value = precioFinal - descuentoDiez;
            }
            else
            {
               document.getElementById("txtIdprecioDescuento").value = precioFinal - descuentoCinco;
            }
        }
    }

    // Solución al enunciado E

    if(cantidadLamparas > 6)
    {
        document.getElementById("txtIdprecioDescuento").value = (precioFinal - descuentoCincuenta) + aumentoDiezPorCiento;
        alert("Usted pagó $" + aumentoDiezPorCiento + " de IIBB");
    }

}
