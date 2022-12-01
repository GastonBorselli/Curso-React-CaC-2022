// function sumar(a,b){
//     let resultado = a+b;
//     document.write("la suma de los valores ingresados es: "+resultado);
//     return resultado;
// }



let a= parseInt(prompt("ingrese el primer numero: "));
let b= parseInt(prompt("ingrese el segundo numero: "));

let suma = sumar (a,b);

document.write("la nueva suma es: " + (suma+8));

//funcion mas de 1 linea
const sum = (a,b,funcionParametro) =>{
    let resultado = a+b;
    funcionParametro ("el valor retornado es: " + resultado);
    return resultado;
}
sum(10,78);

sum( 15,25, alert());