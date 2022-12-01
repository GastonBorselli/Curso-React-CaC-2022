/*crear un programa que pida al usuario ingresar, por separado, la calle, el numero,
el departamento, el codigo postal, la ciudad y el pais, y muestre un mensaje con toda la
direccion completa */

// let calle = prompt("ingrese la dirección de su casa -El nombre de la calle");

// let numero = prompt("ingrese el numero de su domicilio");

// let depto = prompt("ingrese el numero de su departamento - Ejemplo 3C");

// let codPostal = prompt("ingrese el codigo postal de la localidad")

// let localidad = prompt("ingrese su localidad");

// let pais = prompt("ingrese su pais");

// console.log("la direccion que ha ingresado es: ", calle + ' ' +  numero + ' ' + depto + ', ' + codPostal
// + ', ' + localidad + ', ' + pais);


/*Años perro 
Crear un programa que pida ingresar una edad y devuelva el equivalente de esa edad en años perro*/

// let edad = prompt("ingrese su edad");

// let edadPerro = edad * 7;

// console.log("Su edad en años perros es: " + edadPerro)


/*3. Minutos a segundos
Crear un programa que pida ingresar una cantidad en minutos mediante un y muestre
un mensaje con el resultado de la conversión en segundos. */

// let minutos = parseInt(prompt("ingrese la cantidad de minutos que desea convertir en segundos: "));

// let segundos = minutos*60;
// console.log("la cantidad de segundos es de: "+ segundos);


/*4.Kilómetros a millas
Crear un programa que pida ingresar una cantidad de kilómetros y muestre un
mensaje con el resultado de la conversión en millas.*/

// let kilómetros = parseInt(prompt("ingrese la cantidad de kilómetros que desea convertir en millas; "));

// let millas = kilómetros*0.6214;
// console.log("la cantidad de millas para los kilómetros ingresados es de: "+ millas);


/*5. Area dede un triangulo
Crear un programa que pida al usuario ingresar el valor de la base y el valor de la altura de un triangulo
calcular su area y mostrar en un mensaje */

// let base = parseFloat(prompt("ingrese el valor de la base del triángulo"));

// let altura = parseFloat(prompt("ingrese la altura del triángulo"));

// var area = (base*altura)/2;

// console.log("El área del triángulo es: " + area)



/*6.Perímetro de un rectángulo
Crear un programa que pida al usuario ingresar el valor de la altura y el valor 
del ancho de un rectángulo, calcular su perímetro y mostrarlo en un mensaje.*/


// let altura = parseInt(prompt("ingrese la altura del rectángulo: "));
// let ancho = parseInt(prompt("ingrese el ancho del rectángulo: "));

// let perimetro = (altura+ancho)*2;
// console.log("el perimetro del rectángulo es de: "+ perimetro);


/*7.Porcentaje
Crear un programa que pida al usuario ingresar un número, y luego el porcentaje 
que se desea obtener del mismo. Devolver un mensaje muestre el porcentaje de 
dicho número.*/

let numero = parseInt(prompt("ingrese un numero: "));
let porcentaje = parseFloat(prompt("ingrese el porcentaje que desea averiguar acerca del numero: "));

let resultado = (porcentaje*numero)/100;
console.log("el numero " + resultado + " es el "+ porcentaje+"% de "+ numero);



/*8. Tiempo de viaje
Crear un programa que pida al usuario la distancia de su recorrido y mostrar en un mensaje
cuánto tiempo tardaría en completar el recorrido en distintos medios de transporte, definiendo de antemano
distintas velocidades para distintos medios de transporte (ejemplo: a pie: 5km/hora, bici 10km/hora,etc) */

// let distancia = prompt("ingrese la distancia de su recorrido");

// let transporte = prompt("ingrese el medio de transporte que va a utilizar - 1.Bici - 2.Pie - 3.Subte - 4.Colectivo");

// let bici = 10;
// let pie = 5;
// let colectivo = 80;
// let subte = 40;
// var tiempo = distancia/transporte;

// switch(transporte){
//     case '1': tiempo = distancia/bici;
//     console.log("El tiempo que tarda en completar el recorrido es de: " + tiempo + " horas");
//     break;
    
//     case '2': tiempo = distancia/pie;
//     console.log("El tiempo que tarda en completar el recorrido es de: " + tiempo + " horas");
//     break;

//     case '3': tiempo = distancia/subte;
//     console.log("El tiempo que tarda en completar el recorrido es de: " + tiempo + " horas");
//     break;

//     case '4': tiempo = distancia/colectivo;
//     console.log("El tiempo que tarda en completar el recorrido es de: " + tiempo + " horas");
//     break;
// }


