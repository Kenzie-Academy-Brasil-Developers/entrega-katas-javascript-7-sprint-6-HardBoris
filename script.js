let frutas = ["maçã", "laranja", "morango"];
let manzana = ["m", "a", "ç", "a"];
let laranja = ["l", "a", "r", "a", "n", "j", "a"];
let morango = ["m", "o", "r", "a", "n", "g", "o"];
let numeros = [2, 3, 5, 7, 11, 12, 13, 14, 15];
let numeros01 = [4, 6, 8, 9, 12, 14, 15, 29, 19, 21];
let dobles = [4, 6, 8, 10, 12, 14, 16, 18];
let impares = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let vacio = [];

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

function newFill(array = vacio, troca, inicio = 0, final = array.length) {
    for (let i = inicio; i < final; i++) {
        array[i] = troca;
    }
    return array;
}

console.log("newFill");
console.log(numeros.fill("*"));
console.log(newFill(impares, "*"));
console.log(numeros01.fill("*", 4));
console.log(newFill(dobles, "*", 4));
console.log(laranja.fill("8", 2, 5));
console.log(newFill(morango, "8", 2, 5));

/****************************************************************************
                        recuperando las matrices
****************************************************************************/

frutas = ["maçã", "laranja", "morango"];
manzana = ["m", "a", "ç", "a"];
laranja = ["l", "a", "r", "a", "n", "j", "a"];
morango = ["m", "o", "r", "a", "n", "g", "o"];
numeros = [2, 3, 5, 7, 11, 12, 13, 14, 15];
numeros01 = [4, 6, 8, 9, 12, 14, 15, 29, 19, 21];
dobles = [4, 6, 8, 10, 12, 14, 16, 18];
impares = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
vacio = [];

/****************************************************************************
                                includes
****************************************************************************/

function newIncludes(array = vacio, busca, inicio = 0) {
    for (let i = inicio; i < array.length; i++) {
        if (busca === array[i]) {
           return true 
        }
    }
    return false;
}

console.log("newIncludes");
console.log(laranja.includes("p"));
console.log(newIncludes(morango, "p"));
console.log(numeros.includes(2, 3));
console.log(newIncludes(numeros, 7, 4));
console.log(laranja.includes("a", 4));
console.log(newIncludes(morango, "o", 4));

/****************************************************************************
                                indexOf
****************************************************************************/

function newIndexOf(array = vacio, busca, inicio = 0) {
    for (let i = inicio; i < array.length; i++) {
        if (busca === array[i]) {
           return i 
        }
    }
    return -1;
}

console.log("newIndexOf");
console.log(laranja.indexOf("p"));
console.log(newIndexOf(morango, "p"));
console.log(numeros.indexOf(2, 3));
console.log(newIndexOf(numeros, 7, 4));
console.log(laranja.indexOf("a", 4));
console.log(newIndexOf(morango, "o", 4));

/****************************************************************************
                                concat
****************************************************************************/

function newConcat(array = vacio, otro) {
    let novoArray = [];
    let long = array.length
    let j = otro.length;
    for (let i = 0; i < long + j; i++) {
        if (i < long) {
           novoArray[i] = array[i] 
        } else if (typeof otro === "object") {
            novoArray[i] = otro[i-long]
        } else {
            novoArray[i] = otro;
        }
    }
    return novoArray;
}

console.log("newConcat");
console.log(laranja.concat("s"));
console.log(newConcat(morango, "s"));
console.log(numeros.concat(manzana));
console.log(newConcat(numeros, manzana));

/****************************************************************************
                                join
****************************************************************************/

function newJoin(array = vacio, separador) {
    let novoString = "";
    let long = array.length
    for (let i = 0; i < long; i++) {
        if (i >= 0 && i < long - 1) {
            novoString += `${array[i]}${separador}`;
        }
        if (i === long - 1) {
            novoString += `${array[i]}`;
        }
    }
    return novoString;
}

console.log("newJoin");
console.log(laranja.join(""));
console.log(newJoin(morango, ""));
console.log(numeros.join(" - "));
console.log(newJoin(numeros, " - "));

/****************************************************************************
                                extras
*****************************************************************************
                                slice
****************************************************************************/

function newSlice(array = vacio, inicio = 0, final = array.length) {
    let novoArray = [];
    if (inicio > array.length) {
        return novoArray;
    }
    if (inicio < 0 && final < 0) {
        return novoArray;
    }
    if (inicio < 0) {
        for (let i = final + inicio; i < final; i++) {
            novoArray.push(array[i]);
        }
        return novoArray
    }
    if (final < 0) {
        final = array.length + final;
        for (let i = inicio; i < final; i++) {
            novoArray.push(array[i]);
        }
        return novoArray
    }
    for (let i = inicio; i < final; i++) {
        novoArray.push(array[i]);
    }
    return novoArray;
}

console.log("newSlice");
console.log(numeros.slice());
console.log(newSlice(numeros));
console.log(numeros.slice(2));
console.log(newSlice(numeros, 2));
console.log(laranja.slice(2, 5));
console.log(newSlice(laranja, 2, 5));
console.log(laranja.slice(-2));
console.log(newSlice(laranja, -2));
console.log(laranja.slice(10));
console.log(newSlice(laranja, 10));
console.log(numeros.slice(2, -2));
console.log(newSlice(numeros, 2, -2));
console.log(numeros.slice(-2, -2));
console.log(newSlice(numeros, -2, -2));

