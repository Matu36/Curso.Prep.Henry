// Do not change any of the function names

function mayuscula(nombre) {
  return nombre[0].toUpperCase() + nombre.slice(1);
}


function invocarCallback(cb) {

  cb ();
}

function operacionMatematica(n1, n2, cb) {

  return cb(n1, n2);}

function sumarArray(numeros, cb) {

  var sumaTotal = numeros.reduce(function(acc, curr) {
    return acc + curr;
  },0);
  cb(sumaTotal);
}

function forEach(array, cb) {
 
  for(var i = 0; i < array.length; i++) {
    cb(array[i]);
  }
}


function map(array, cb) {
 
  var nuevoArray = array.map(function(el) {
    return cb(el);
  });
  return nuevoArray;
}

function filter(array) {
  var nuevoArray = [];
  for(let i = 0; i<array.length; i++) {
    if(array[i][0] === "a") {
      nuevoArray.push(array[i])
    }
  }
  return nuevoArray;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
