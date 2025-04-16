document.addEventListener('DOMContentLoaded',function(){
    for (let i= 0; i < cuentas.length; i++) {
        const cuenta = cuentas[i];
        const $cuentaDesde = document.createElement('option');
        $cuentaDesde.setAttribute('id',cuenta.id);
        $cuentaDesde.textContent=`${cuenta.nombre} tiene en su saldo ${cuenta.saldo}`;
    }
})
