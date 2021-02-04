
function mostrar()
{
    let lados;
    let perimetro;

    lados = prompt("Ingrese la medida de uno de los lados del triángulo, teniendo en cuenta que el mismo es equilatero:");
    lados = parseFloat(lados);

    perimetro = lados*3;

    alert("El perímetro de un triágulo equilatero de esas medidas es " + perimetro);
}
