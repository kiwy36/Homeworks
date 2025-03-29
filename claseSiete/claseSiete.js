function calcularPromedio(numeros){
    let acumulador = 0 ;
    for(let i=0; i<numeros.length;i++){
        acumulador += numeros[i];
    }
    return acumulador/numeros.length
}
const $calcularPromedioNotas = document.querySelector('#calcular-promedio-notas')
$calcularPromedioNotas.addEventListener('click',function(){
    const $notas = document.querySelectorAll('.nota');
    const notas = [];
    for(let i=0; i< $notas.length;i++){
        notas.push(Number($notas[i].value))
        const promedio = calcularPromedio(notas);
        document.querySelector('#resultado-notas').textContent=Math.round(promedio);
    }
})
const $calcularPromedioAsistencias = document.querySelector('#calcular-asistencias')
$calcularPromedioAsistencias.addEventListener('click',function(){
    const $asistencias = document.querySelectorAll('.asistencia');
    const asistencias = [];
    for(let i=0; i< $asistencias.length;i++){
        asistencias.push(Number($asistencias[i].value))
        const promedio = calcularPromedio(asistencias);
        document.querySelector('#resultado-asistencias').textContent=Math.round(promedio);
    }
})

//fomularios no sumiteables
const $formNotas = document.querySelector('#form-notas');
$formNotas.addEventListener('submit',function(e){
    e.preventDefault();
});
const $formAsistencias = document.querySelector('#form-asistencias');
$formAsistencias.addEventListener('submit',function(e){
    e.preventDefault();
});
//tarea:
//HACER Lo mismo con promedio con salarios de grupos familiares
//preguntar grupo familiar y crear inputs por usuarios
//calcular el promedio de valores
//agregar boton reset
//agregar opcion para borrar un input
document.querySelector('#generar-inputs').addEventListener('click', function () {
    const cantidad = Number(document.querySelector('#cantidad-familiares').value);
    const contenedor = document.querySelector('#contenedor-salarios');
    
    contenedor.innerHTML = ''; // Limpiar antes de generar nuevos inputs

    for (let i = 0; i < cantidad; i++) {
        const div = document.createElement('div');
        div.classList.add('salario-item');

        const input = document.createElement('input');
        input.type = 'number';
        input.classList.add('salario');
        input.placeholder = `Salario del familiar ${i + 1}`;

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'X';
        botonEliminar.classList.add('eliminar-salario');
        botonEliminar.addEventListener('click', function () {
            div.remove();
        });

        div.appendChild(input);
        div.appendChild(botonEliminar);
        contenedor.appendChild(div);
    }
});
document.querySelector('#calcular-promedio-salarios').addEventListener('click', function () {
    const $salarios = document.querySelectorAll('.salario');
    const salarios = Array.from($salarios).map(salario => Number(salario.value) || 0);
    document.querySelector('#resultado-salarios').textContent = Math.round(calcularPromedio(salarios));
});
document.querySelector('#reset-salarios').addEventListener('click', function () {
    document.querySelector('#contenedor-salarios').innerHTML = ''; // Elimina todos los inputs
    document.querySelector('#resultado-salarios').textContent = ''; // Borra el resultado
});





