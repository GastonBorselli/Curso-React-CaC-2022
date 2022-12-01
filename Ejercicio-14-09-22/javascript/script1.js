let nombre = prompt("ingrese su nombre");
alert("Hola " + nombre + " bienvenid@ a la pagina");

let numero1 = prompt("ingrese un numero: ");
let numero2 = prompt("ingrese otro numero: ");

let suma = parseInt(numero1)+ parseInt(numero2);
alert("el resultado de la suma de los dos numeros es: " + suma);

let sumaTotal = parseInt(numero1) + parseInt(numero2) + nombre.length;
document.write("el resultado de la suma de tus numeros mas la cantidad de las letras de tu nombre es: " + sumaTotal);