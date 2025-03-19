//tarea tres
/*if(condicion){
    //si es true hacer una cosa
}else{
    // si era falce hacer otra cosa
}*/
//puede ser un buleano (true//false)
//ejemplo
/*const numero = 7
if (numero >=7){
    console.log('es mayor o igual que numero');
}else{
    console.log('es otra cosa');
}*/
function calcular() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const operador = document.getElementById('operador').value;

    function sumar(num1, num2) {
        return num1 + num2;
    }
    function restar(num1, num2) {
        return num1 - num2;
    }
    function dividir(num1, num2) {
        return num1 / num2;
    }
    function multiplicar(num1, num2) {
        return num1 * num2;
    }

    let resultado;
    if (operador === '+') {
        resultado = sumar(num1, num2);
    } else if (operador === '-') {
        resultado = restar(num1, num2);
    } else if (operador === '/') {
        resultado = dividir(num1, num2);
    } else if (operador === '*') {
        resultado = multiplicar(num1, num2);
    } else {
        resultado = 'Operador no válido';
    }

    document.getElementById('resultadoCalculadora').textContent = `Resultado: ${resultado}`;
}
//
//CLASE 4 ---------ARRAY
//
const conjuntoElementos = ['lementoUno', 'lementoDos','azul', 'siete']
console.log(conjuntoElementos);
console.log(conjuntoElementos.length);
//console.log(conjuntoElementos.[0]);
conjuntoElementos[3]='comida coso'//sustitucion

document.getElementById('elementoArray').textContent = `Resultado comidas: ${conjuntoElementos[3]}`;
//Tarea hacer un console.log que recorra toda la array
document.getElementById('elementosArray').textContent = `Resultado comidas: ${conjuntoElementos}`;
conjuntoElementos.push('pizza');//agregar elemento
document.getElementById('elementoCuatro').textContent = `elemento nuevo: ${conjuntoElementos[4]}`;

//Tarea hacer un console.log que recorra toda la array
console.log(conjuntoElementos);
//
//////////////////////////////////
////////////bucles///////////////
//punto de partida, condicion, contador
//bucle while
//siempre se ejecuta en lo que la condicion es true
let numerito = 0
while (numerito<10){
    numerito = numerito +1 ;
    console.log(numerito);
    document.getElementById('numerito').textContent = `numerito se ejecuto`;
}if(numerito==10){
    console.log(numerito);
    document.getElementById('numerito').textContent = `numerito se detuvo`;
}
//bucle for
/*let i
for (i =0; i<=5; i ++){//punto de partida, condicion ,paso
    console.log('check');
}*/
for(let i=3;i<=30;i+=3){
    console.log(i);
}
const nuevasComidas = ['pizza','empanadas','milanesas']
let resultado = ''; // Variable para almacenar todas las comidas

for (let i = 0; i < nuevasComidas.length; i++) {
    resultado += `comida nueva: ${nuevasComidas[i]}\n`;
}

document.getElementById('nuevacomida').textContent = resultado;
