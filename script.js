const fruits = ["maçã", "laranja", "morango"];
const numeros = [2, 3, 5, 7, 11, 12, 13, 14, 15];

/****************************************************************************
                                    forEach
****************************************************************************/

function demo(item, i) {
    console.log(i + " = " + item);
}

function duplica(item) {
    console.log(item *= 2);
}

function forEachBG(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        callback(item, i);
    }
}
console.log("forEachBG")
forEachBG(fruits, demo);
forEachBG(numeros, duplica);

/****************************************************************************
                                    map
****************************************************************************/

function duplos(item) {
    return item *= 2;
}

function mapBG(array, callback) {
    let novoArray = []
    for (let i = 0; i < array.length; i++) {
        item = array[i];
        novoArray[i] = callback(item);
    }
    return novoArray;
}
console.log("mapBG")
let dobles = mapBG(numeros, duplos);
console.log(dobles);

/****************************************************************************
                                    filter
****************************************************************************/

function pares(item) {
    if (item % 2 === 0) {
        return true;
    }
    return false;
}

function nones(item) {
    if(item % 2 !== 0){
        return true;
    }
    return false;
}

function primos(item) {
    if (item === 2) {
        return true;
    }
    if (item === 1 || item === 0 || item % 2 === 0){
        return false;
    }
    for (let i = 3; i <= Math.sqrt(item); i += 2){
        if (item % i === 0){
            return false;
        }
    }
    return true;
}
  

function filterBG(array, callback) {
    let novoArray = []
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (callback(item) === true) {
            novoArray.push(item);
        }
    }
    return novoArray;
}
console.log("filterBG")
let even = filterBG(numeros, pares);
console.log(even);

let odd = filterBG(numeros, nones);
console.log(odd);

let primes = filterBG(numeros, primos);
console.log(primes);

/****************************************************************************
                                    find
****************************************************************************/

function primerPrimo(item) {
    let start = 2;
    while (start <= Math.sqrt(item)) {
      if (item % start++ < 1) {
        return false;
      }
    }
    return item > 1;
}

function findBG(array, callback) {
    let respuesta;
    for (let i = 0; i < array.length; i++) {
        item = array[i];
        if (callback(item) === true) {
            return respuesta = item;
        }
    }
}

const numeros01 = [4, 6, 8, 9, 12, 14, 15, 29, 19, 21];

console.log("findBG");
let once = findBG(numeros01, primerPrimo);
console.log(once);

let non = findBG(numeros01, nones);
console.log(non);

/****************************************************************************
                                    find
****************************************************************************/

