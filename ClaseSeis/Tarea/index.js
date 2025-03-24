document.addEventListener('DOMContentLoaded', function() {
    const $form = document.querySelector('#formulario');

    if ($form) {
        $form.addEventListener('submit', function(e) {
            e.preventDefault(); // Evita que el formulario se envíe y recargue la página
            saludarPersona(); // Llama la función de saludo
        });
    }

    function saludarPersona() {
        const nombre = document.querySelector('#nombre').value;
        const apellido = document.querySelector('#apellido').value;
        const edad = document.querySelector('#edad').value;
        const saludo = `Hola ${nombre} ${apellido}, de edad ${edad}`;
        
        console.log(saludo);
        document.querySelector('#saludo').textContent = saludo;
    }
});
