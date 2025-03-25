const $numeros = document.querySelectorAll('.num');
console.log($numeros);
const $calcular = document.querySelector('#calcular')
$calcular.addEventListener('click',function(){
    let acumulador =0;
    for(let i=0; i< $numeros.length;i++){
        acumulador += Number($numeros[i].value)
        console.log($numeros[i].value);//ver numeros
        console.log(acumulador)//ver acumulador
        const promedio = acumulador/$numeros.length;
        console.log(`el promedio es ${promedio}`)
        document.querySelector('#resultado').textContent=Math.round(promedio);
    }
})
const $form = document.querySelector('form');
$form.addEventListener('submit',function(e){
    e.preventDefault();
});

