document.addEventListener('DOMContentLoaded',function(){
    mostrarCuentas()
})
//evitar el submit
document.querySelector('form').addEventListener('submit',function(event){
    event.preventDefault();
    const cuentaDesdeId = document.querySelector('#cuenta-desde').value;
    const cuantaHaciaId = document.querySelector('#cuenta-hacia').value;
    const cuentaDesde = encontrarCuentaPorId(cuentaDesdeId);
    const cuentaHacia = encontrarCuentaPorId(cuantaHaciaId);
    const montoSolicitado = document.querySelector('#monto').value
    
    if(cuentaDesde.id === cuentaHacia.id){
        console.log('no se puede tranferir entre la misma cuenta');
        return false
    }
    if(montoSolicitado <= 0){
        console.log('ingrese un monto mayor a cero');
        return false
    }
    if (cuentaDesde.saldo >= montoSolicitado){
        console.log('transferencia exitosa')
    }else{
        console.log('saldo insuficiente');
    }
})

function mostrarCuentas(){
    const $cuentasDesde = document.querySelector('#cuenta-desde');
    const $cuentasHacia = document.querySelector('#cuenta-hacia');
    for (let i= 0; i < cuentas.length; i++) {
        const cuenta = cuentas[i];
        const $cuentaDesde = document.createElement('option');
        $cuentaDesde.setAttribute('id','cuenta-'+ cuenta.id);
        $cuentaDesde.setAttribute('value',cuenta.id)
        $cuentaDesde.textContent=`${cuenta.nombre} tiene en su saldo ${cuenta.saldo}`;
        $cuentasDesde.appendChild($cuentaDesde)
        
        const $cuentaHacia = document.createElement('option');
        $cuentaHacia.setAttribute('id','cuenta-'+ cuenta.id);
        $cuentaHacia.setAttribute('value',cuenta.id)
        $cuentaHacia.textContent=`${cuenta.nombre} tiene en su saldo ${cuenta.saldo}`;
        $cuentasHacia.appendChild($cuentaHacia)
    }
}
function encontrarCuentaPorId(id){
    for (let i = 0; i < cuentas.length; i++) {
        if(cuentas[i].id.toString()===id)
            return cuentas[i]
    }
}