// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var arrayRes = array;
  for(var i = 0; i < array.length; i++){
    arrayRes[i] = arrayRes[i] + 1;
  }
  return arrayRes;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  var arrayRes = array;
  arrayRes.push(elemento);
  return arrayRes;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  var arrayRes = array;
  arrayRes.unshift(elemento);
  return arrayRes;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var res = '';
  for(var i = 0; i < palabras.length; i++){
    if(i === palabras.length-1){
      res = res + palabras[i]
    }else{
      res = res + palabras[i]+' ';
    }
  }
  return res;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  return array.includes(elemento);
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var res = 0;
  for(var i = 0; i < numeros.length; i++){
    res = res + numeros[i];
  }
  return res;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var prom = 0;
  var sum = 0;
  for(var i = 0; i < resultadosTest.length; i++){
    sum = sum + resultadosTest[i];
  }
  prom = sum / resultadosTest.length;
  return Math.round(prom);
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var nroGrande = 0;
  for(var i = 0; i < numeros.length; i++){
    if(numeros[i] > nroGrande){
      nroGrande = numeros[i];
    }
  }
  return nroGrande;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var mult = 1;
  if(arguments.length > 0){
    for(var i = 0; i < arguments.length; i++){
      mult = mult * arguments[i];
    }
  }else{
    mult = 0;
  }
  return mult;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var cantidad = 0;
  for(var i = 0; i < arreglo.length; i++){
    if(arreglo[i] > 18){
      cantidad++;
    }
  }
  return cantidad;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  var res = '';
  switch(numeroDeDia){
    case 1: res = 'Es fin de semana';
    break;
    case 2: res = 'Es dia Laboral';
    break;
    case 3: res = 'Es dia Laboral';
    break;
    case 4: res = 'Es dia Laboral';
    break;
    case 5: res = 'Es dia Laboral';
    break;
    case 6: res = 'Es dia Laboral';
    break;
    case 7: res = 'Es fin de semana';
    break;
    default: res = 'Necesita ingresar un número al dia correspondiente';
  }
  return res;
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var res = false;
  var num = n + '';
  if(num[0] == 9){
    res = true;
  }
  return res;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var iguales = true;
  var numAnterior = arreglo[0];
  for(var i = 1; i < arreglo.length; i ++){
    if(numAnterior !== arreglo[i]){
      iguales = false;
    }
    numAnterior = arreglo[i];
  }
  return iguales;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var arrayMeses = [];
  var arrayMinMeses = ['Enero','Marzo','Noviembre']
  var mensaje = 'No se encontraron los meses pedidos';
  var bandera = true;
  var res;
  for(var i = 0; i < array.length; i++){
    if(array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre'){
      arrayMeses.push(array[i]);
    }
  }
  for( var i = 0; i < arrayMinMeses.length; i++){
    if( !arrayMeses.includes(arrayMinMeses[i]) ){
      bandera = false;
    }
  }
  if(bandera === false){
    res = mensaje;
  }else{
    res = arrayMeses;
  }
  return res;
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nuevoArray = [];
  for(var i = 0; i < array.length; i++){
    if(array[i] > 100){
      nuevoArray.push(array[i]);
    }
  }
  return nuevoArray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var nuevoArray = [];
  var suma = 0;
  var nuevoNumero = numero;
  var res = '';
  var mensaje = 'Se interrumpió la ejecución';
  var bandera = false;
  for(var i = 0; i < 10; i ++){
    nuevoNumero = nuevoNumero + 2;
    suma = suma + nuevoNumero;
    if(suma === 10){
      bandera = true;
      break;
    }
    nuevoArray.push(nuevoNumero);
    
  }
  if(bandera){
    res = mensaje;
  }else{
    res = nuevoArray;
  }
  return res;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var nuevoArray = [];
  var suma = 0;
  var nuevoNumero = numero;
  var res = '';
  var mensaje = 'Se interrumpió la ejecución';
  var bandera = false;
  for(var i = 0; i < 10; i ++){
    if(i === 5){
      continue;
    }
    nuevoNumero = nuevoNumero + 2;
    suma = suma + nuevoNumero;
    nuevoArray.push(nuevoNumero);
    
  }
  if(bandera){
    res = mensaje;
  }else{
    res = nuevoArray;
  }
  return res;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
