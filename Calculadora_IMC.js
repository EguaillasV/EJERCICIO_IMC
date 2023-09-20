// Programa para Calcular el Índice de Masa Corporal (IMC) segun su peso y estatura.


// Definir el peso en kilogramos y la estatura en metros


var weightKg = 78; // valor  peso en kilogramos

var heightmeters = 1.70; // valor estatura en metros

// Calcular el índice de masa corporal (IMC)
var imc = weightKg / (heightmeters * heightmeters);

// Redondear el resultado a dos decimales
imc = imc.toFixed(2);

// Mostrar el resultado en pantalla
console.log("Tu índice de masa corporal es: " + imc);
