//tarea tres
/*if(condicion){
    //si es true hacer una cosa
}else{
    // si era falce hacer otra cosa
}*/
//puede ser un buleano (true//false)
//ejemplo
const numero = 7
if (numero >=7){
    console.log('es mayor o igual que numero');
}else{
    console.log('es otra cosa');
}
const num1 = Number(prompt('ingresa un numero'));
const num2 = Number(prompt('ingresa un numero'));
const operador = prompt('ingrese el operador +,-,/,*')
function sumar (num1, num2){
    return num1 + num2
}
function restar (num1, num2){
    return num1 - num2
}
function dividir (num1, num2){
    return num1 / num2
}
function multiplicar (num1, num2){
    return num1 * num2
}
if(operador==='+'){
    console.log(sumar(num1, num2))
}else if(operador==='-'){
    console.log(restar(num1,num2))
}else if(operador==='/'){
    console.log(dividir(num1,num2))
}else if(operador==='*'){
    console.log(multiplicar(num1,num2))
}else{
    console.log('contenido no requerido')
}
