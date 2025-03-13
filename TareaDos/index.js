// Tarea 2
// Preguntar el salario anual y calcular el salario mensual
// Preguntar el salario mensual y calcular el anual
// Preguntar el salario anual y calcular el salario mensual
// Preguntar el salario mensual y calcular el salario anual
const nombreUsuario = (prompt("¿Cuál es tu Nombre?"));
const salarioMensual = parseFloat(prompt("¿Cuál es tu salario mensual?"));
const salarioAnual = salarioMensual * 12;
document.getElementById('resultado').innerText = ` Saludos ${nombreUsuario} Ganando por mes ${salarioMensual} tu salario anual sera. ${salarioAnual}`;

const salarioAnualCalculado = salarioAnual
const salarioMensualCalculado = salarioAnualCalculado / 12;
document.getElementById('resultadoDos').innerText = `como ya te preguntamos tu salario anual que es  ${salarioAnual} tu salario mensual claramente es. ${salarioMensual}`;
// TAREA: Tenemos 2 funciones de la tarea anterior -- 'sumar' y 'restar'
//      Vamos a decirle a la máquina qué función tiene que correr, dependiendo del operador artmético (+, -, /, *, etc.)
//
//      Si el operador es '+', vamos a usar la función para sumar.
//      Si no, vamos a usar la función para restar.
//
// Paso 1 - Crear una variable llamada 'operador' y asignarle el valor '+'.
// Paso 2 - Crear 2 variables que contengan 2 números cualquiera.
// Paso 3 - Crear una condición if/else basada en el operador que tenemos.
//
// Si tenemos un operador igual a '+', llamamos la función 'sumar' con nuestros números (las variables del paso 2).
// Si no, tenemos que llamar la función 'restar', con nuestros números (las variables del paso 2).
//
// No se olviden de hacer un console.log para ver el resultado!
// Función para sumar dos números
function sumar(a, b) {
    return a + b;
}

// Función para restar dos números
function restar(a, b) {
    return a - b;
}

// Función que determina qué operación realizar
function calcular() {
    // Obtener los valores del formulario
    const num1 = Number(document.getElementById('num1').value);
    const operador = document.getElementById('operador').value;
    const num2 = Number(document.getElementById('num2').value);

    let resultadoCalculadora;

    // Verificar el operador y realizar la operación correspondiente
    if (operador === '+') {
        resultadoCalculadora = sumar(num1, num2);
    } else if (operador === '-') {
        resultadoCalculadora = restar(num1, num2);
    } else {
        resultadoCalculadora = "Operador no válido. Usa '+' o '-'.";
    }

    // Mostrar el resultado en la consola
    console.log(`Resultado: ${resultado}`);

    // Mostrar el resultado en el HTML
    document.getElementById('resultadoCalculadora').textContent = `Resultado: ${resultadoCalculadora}`;
}
