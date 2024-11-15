function obtener_notas() {
    return [6, 8, 9, 2, 5, 10];
}
function calcular_promedio() {
    let notas = obtener_notas();
    let suma = 0;

    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
}
let promedio = suma / notas.length;
return promedio.toFixed(2);
}
console.log('el promedio del alumno es ' + calcular_promedio());

