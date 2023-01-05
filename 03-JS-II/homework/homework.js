// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  var mayor = 0;
  if(x > y){
    mayor = x;
  }else{
    mayor = y;
  }
  return mayor;
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  var res = 'Not allowed';
  if(edad >= 18){
    res = 'Allowed';
  }
  return res;
}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  var res = 'Offline';
  if(status === 1){
    res = 'Online';
  }else if(status === 2){
    res = 'Away';
  }
  return res;
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  var res = 'Hola!';
  if(idioma === 'aleman'){
    res = 'Guten Tag!';
  }else if(idioma === 'mandarin'){
    res = 'Ni Hao!';
  }else if(idioma === 'ingles'){
    res = 'Hello!';
  }
  return res;
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  var res = 'Color not found';
  switch(color){
    case "blue": res = 'This is blue';
    break;
    case "red": res = 'This is red';
    break;
    case "green": res = 'This is green';
    break;
    case "orange": res = 'This is orange';
    break;
  }
  return res;
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  var res = false;
  if(numero === 10 || numero === 5){
    res = true;
  }
  return res;
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  var res = false;
  if(numero < 50 && numero > 20){
    res = true;
  }
  return res;
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  var res = false;
  if(numero === Math.floor(numero)){
    res = true;
  }
  return res;
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  var res = numero;
  if( numero % 3 === 0 && numero % 5 === 0 ){
    res = 'fizzbuzz';
  }else if(numero % 5 === 0){
    res = 'buzz';
  }else if( numero % 3 === 0 ){
    res = 'fizz';
  }
  return res;
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  var res = false;
  if( num1 > 0 && num2 > 0 && num3 > 0){
    if(num1 > num2 && num1 > num3){
      res = 'Número 1 es mayor y positivo';
    }
    if(num3 > num2 && num3 > num1){
      res = num3 + 1;
    }
  }else if(num1 === 0 || num2 === 0 || num3 === 0){
    res = 'Error';
  }else if(num1 < 0 || num2 < 0 || num3 < 0) {
    res = 'Hay negativos';
  }
  return res;
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  var res = true;
  if(numero < 0){
    return res = 'Es un número negativo';
  }
  if(numero === 1 || numero === 0){
    res = false;
  }else{
    for(var i = 2 ; i < numero ; i++){
      if(numero % i === 0){
        res = false;
      }
    }
  }
  return res;
}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  var res = 'Dato incorrecto';
  if(valor === true){
    res = 'Soy verdadero';
  }else if(valor === false){
    res = 'Soy falso';
  }
  return res;
}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  var list = [];
  var max = 0;
  for(var i = 0; max <= 60; i++){
    var res = 6*i;
    max = 6*(i+1);
    list.push(res);
  }
  return list;
}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  var res = false;
  var num = numero;
  var nroDigitos = 0;
  while(num > 9){
    num = Math.floor(num/10);
    nroDigitos++;
    if(num < 10){
      nroDigitos++;
    }
  }
  if(nroDigitos === 3){
    res = true;
  }
  return res;
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  var i = 0;
  var num = numero;
  do{
    num = num +5;
    i++;
  }while(i < 8);
  return num;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
