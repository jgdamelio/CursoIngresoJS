function mostrar()
{
  let primerNombre;
  let segundoNombre;
  let peso1;
  let peso2;
  let sumaPeso;
  let promedioPeso;

  primerNombre = prompt("Ingrese su nombre:");
  segundoNombre = prompt("Ingrese el nombre de su pareja:");

  peso1 = prompt("Ingrese su peso:");
  peso1 = parseFloat(peso1);

  peso2 = prompt("Ingrese el peso de su pareja:");
  peso2 = parseFloat(peso2);

  sumaPeso = peso1 + peso2;
  
  promedioPeso = (peso1 + peso2) /2;

  alert("Ustedes se llaman " + primerNombre + " y " + segundoNombre + ", pesan " + peso1 + " y " + peso2 + " kilos, que sumados son " + sumaPeso + " kilos y el promedio de peso es " + promedioPeso);

}
