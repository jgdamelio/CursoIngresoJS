
function mostrar()
{
    let ancho;
    let largo;
    let perimetro;

    ancho = prompt("Ingrese el ancho del rectángulo:");
    ancho = parseFloat(ancho);
    
    largo = prompt("Ingrese el largo del rectángulo:");
    largo = parseFloat(largo);

    perimetro = (ancho + largo) *2;

    alert("El perímetro de dicho rectángulo es " + perimetro);
}
