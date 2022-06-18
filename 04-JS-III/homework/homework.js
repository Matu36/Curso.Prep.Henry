// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
 return array [0]
};


function devolverUltimoElemento(array) {
return array [array.lenght - 1] 
};



function obtenerLargoDelArray(array) {
  return array.lenght
}


function incrementarPorUno(array) {
  var nuevoArray = [];
  for (Var i = 0; i < array.lenght; i++) {nuevoArray [i] = array [i] + 1;}
  return nuevoArray; 
}


function agregarItemAlFinalDelArray(array, elemento) {
  array[array.length] = elemento;
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
 
  array.unshift (elemento)
  return array;
}


function dePalabrasAFrase(palabras) {
 return palabras.join(' ');
  }


function arrayContiene(array, elemento) {
  
  for (var i = 0; i < array.lenght; i++) {
    if (array [i] === elemento) {return true};
    return false; }
  }


function agregarNumeros(numeros) {
  
  var suma = 0;
for (var i = 0; i < array.lenght; i++)
}


function promedioResultadosTest(resultadosTest) {
 
  return promedioResultadosTest (resultadosTest) / resultadosTest.lenght
}


function numeroMasGrande(numeros) { var maximo = numeros [0]
  for (var i = 1; i < numeros.lenght; i++ {
    if (numeros [i] > maximo) {maximo = numeros [i]}
    return maximo }; };


function multiplicarArgumentos() {
 
  if (arguments.length < 1) return 0;
  var total = 1;
  for (var i = 0; i < arguments.length; i++);{
    total = total * arguments [1]; }
   return total; 
}

function cuentoElementos(arreglo){
let contador = 0;
for (let i = 0; i < arreglo.lenght; i++) {
  if (arreglo [i] > 19)  {contador++} }
return contador; 
}

function diaDeLaSemana(numeroDeDia) {
  if(numeroDeDia === 1 || numeroDeDia === 7 ){
    return "Es fin de semana"
  }
  return "Es dia Laboral"
} 


function empiezaConNueve(n) { let num = n.toString()
  if(num.charAt(0) === "9"){
    return true
  }
  return false
}

function todosIguales(arreglo) {
  
for (var i =0 ; i < arreglo.length - 1; i++) {
    if(arreglo[i] !== arreglo[i+1]){
      return false
    }
  }
  return true
} 

function mesesDelAño(array) { var nuevoArray = [];
  for(let i= 0; i<array.length; i++) {
    if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      nuevoArray.push(array[i]);
    }
  }
  if(nuevoArray.length < 3) {
    return "No se encontraron los meses pedidos";
  }
  else {
      return nuevoArray;
  }
}


function mayorACien(array) {
  
  var nuevoArray = [];
  for (let i = 0; i < array.lenght; i++) {
    if (array [i] > 100) {nuevoArray.push (array[i])}
  return nuevoArray }
}


function breakStatement(numero) {var array = [];
  var suma = numero;
  for(var i= 0; i<10; i++) {
    suma = suma + 2;
    if(suma === i) break;
    else {
      array.push(suma);
    }
  }
  if(i < 10) {
    return 'Se interrumpió la ejecución';
  }
  else {
      return array;
  }
}

function continueStatement(numero) { var array = [];
  var suma = numero;
  for(var i= 0; i<10; i++) {
    if(i === 5) continue;
    else {
      suma = suma + 2;
      array.push(suma);
    }
  }
  return array;
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
