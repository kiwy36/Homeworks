// TAREAS video clase 1
// Tarea 1:
// Crear una funcion que tome como parametro el año actual y el año de nacimiento y calcule aproximadamente la edad del usuario
// Preguntarle estos datos al usuario y guardarlo en 2 variables.
// Ejecutar la funcion con estos datos
// Imprimir el resultado en la consola
// Función que calcula los años transcurridos
function CalcularEdad (natalicio,fechaActual){
    return natalicio-fechaActual;
}
//conseguir info del año actual y el año de natalicio
const fechaActual =Number(prompt('en que año estamos ?'));
const natalicio = Number(prompt('que año naciste ?'))
// Calculamos cuántos años han pasado
const tiempoTranscurrido = CalcularEdad(fechaActual,natalicio);
// Mostramos el resultado en consola
console.log(`Han pasado ${tiempoTranscurrido} años desde que naciste.`);
// Mostramos el resultado en el HTML
document.getElementById('resultado').innerText = `Han pasado ${tiempoTranscurrido} años desde que naciste.`;