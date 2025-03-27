
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
