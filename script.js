const frutas = ["maçã", "laranja", "morango"];
const numeros = [2, 3, 5, 7, 11, 12, 13, 14, 15];
const numeros01 = [4, 6, 8, 9, 12, 14, 15, 29, 19, 21];
const dobles = [4, 6, 8, 10, 12, 14, 16, 18];
const impares = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const vacio = [];

/****************************************************************************
                                    forEach
****************************************************************************/

function demo(item, i) {
    console.log(i + " = " + item);
}

function duplica(item) {
    console.log(item *= 2);
}

function newForEach(array, callback) {
    let respuesta;
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        respuesta = callback(item, i);
    }
    return respuesta;
}
console.log("newForEach")
frutas.forEach(demo);
newForEach(frutas, demo);
console.log(frutas);
numeros.forEach(duplica);
newForEach(numeros, duplica);
console.log(numeros);

/****************************************************************************
                                    map
****************************************************************************/

function triplos(item) {
    return item *= 3;
}

function gosto(item) {
    return "eu gosto de " + item;
}

function newMap(array, callback) {
    let novoArray = []
    for (let i = 0; i < array.length; i++) {
        item = array[i];
        novoArray[i] = callback(item);
    }
    return novoArray;
}

console.log("newMap");
console.log(numeros.map(triplos));
console.log(newMap(numeros, triplos));
console.log(numeros);
console.log(frutas.map(gosto));
console.log(newMap(frutas, gosto));
console.log(frutas);

/****************************************************************************
                                    filter
****************************************************************************/

function pares(item) {
    return item % 2 === 0
        
}

function nones(item) {
    return item % 2 !== 0
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
  

function newFilter(array, callback) {
    let novoArray = []
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (callback(item)) {
            novoArray.push(item);
        }
    }
    return novoArray;
}

console.log("newFilter");
console.log(numeros.filter(pares));
console.log(newFilter(numeros, pares));
console.log(numeros.filter(nones));
console.log(newFilter(numeros, nones));
console.log(numeros.filter(primos));
console.log(newFilter(numeros, primos));
console.log(numeros);

/****************************************************************************
                                    find
****************************************************************************/

function newFind(array, callback) {
    let respuesta;
    for (let i = 0; i < array.length; i++) {
        item = array[i];
        if (callback(item)) {
            return respuesta = item;
        }
    }
}

console.log("newFind");
console.log(numeros01.find(primos));
console.log(newFind(numeros01, primos));
console.log(numeros01.find(nones));
console.log(newFind(numeros01, nones));
console.log(numeros01);

/****************************************************************************
                                findIndex
****************************************************************************/

function newFindIndex(array, callback) {
    let respuesta;
    for (let i = 0; i < array.length; i++) {
        item = array[i];
        if (callback(item) === true) {
            return respuesta = i;
        }
    }
}

console.log("newFindIndex");
console.log(numeros01.findIndex(primos));
console.log(newFindIndex(numeros01, primos));
console.log(numeros01.findIndex(nones));
console.log(newFindIndex(numeros01, nones));
console.log(numeros01[7]);
console.log(numeros01[3]);
console.log(numeros01);

/****************************************************************************
                                reduce
****************************************************************************/

function suma(a, b) {
    return a + b;
}

function newReduce(array, callback) {
    let respuesta;
    let a = 0;
    let b = 0;
    for (let i = 0; i < array.length; i++) {
        
        b = array[i];
        a += b
        respuesta = callback(a, b);
    }
    return respuesta - b;
}

console.log("newReduce");
console.log(numeros.reduce(suma));
console.log(newReduce(numeros, suma));
console.log(numeros);
console.log(numeros01.reduce(suma));
console.log(newReduce(numeros01, suma));
console.log(numeros01);
console.log(dobles.reduce(suma));
console.log(newReduce(dobles, suma));
console.log(dobles);

/****************************************************************************
                                some
****************************************************************************/

function newSome(array, callback) {
    for (let i = 0; i < array.length; i++) {
        item = array[i];
        if (callback(item)) {
            return true;
        }
    }
    return false;
}

console.log("newSome");
console.log(vacio.some(pares));
console.log(newSome(vacio, pares));
console.log(numeros01.some(nones));
console.log(newSome(numeros01, nones));
console.log(dobles.some(primos));
console.log(newSome(dobles, primos));

/****************************************************************************
                                every
****************************************************************************/

function newEvery(array, callback) {
    for (let i = 0; i < array.length; i++) {
        item = array[i];
        if (callback(item) === false) {
            return false;
        }
    }
    return true;
}

console.log("newEvery");
console.log(numeros.every(pares));
console.log(newEvery(numeros, pares));
console.log(impares.every(nones));
console.log(newEvery(impares, nones));
console.log(dobles.every(pares));
console.log(newEvery(dobles, pares));

/****************************************************************************
                                fill
****************************************************************************/

