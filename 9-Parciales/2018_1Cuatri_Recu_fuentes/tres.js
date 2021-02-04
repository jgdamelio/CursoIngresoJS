function mostrar()
{
    let precio;
    let descuento;
    let precioFinal;

    precio = prompt("Ingrese el precio del producto:");
    precio = parseFloat(precio);

    descuento = prompt("Ingrese el descuento:");
    descuento = parseFloat(descuento);

    precioFinal = precio - (precio * descuento) /100;
    
    document.getElementById("elPrecioFinal").value = precioFinal;
}
