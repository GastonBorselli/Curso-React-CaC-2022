let hola = "Hola mundo";

console.log(hola);

let numero = 20;
let num2 = 8;

var resultado = numero+num2;
console.log(resultado);

var resultado = numero - num2;
console.log(resultado);

var resultado= numero*num2;
console.log(resultado);

var resultado = numero / num2;
console.log(resultado);

var resultado= numero%num2;
console.log(resultado);

console.log("otros calculos");
var num = 17;

num+=10;
console.log(num);

num-=10;
console.log(num);

num/=10;
console.log(num);

num**=10; //potencia
console.log(num);

num%=10;
console.log(num);

let saco = 'red';

switch(saco){
    case 'red':
        console.log("el saco es rojo");
        break;
    case 'yellow':
        console.log("el saco es amarillo");
        break;
    case 'blue':
        console.log("el saco es azul");
        break;
    default:
        console.log("no tengo ese color");
}