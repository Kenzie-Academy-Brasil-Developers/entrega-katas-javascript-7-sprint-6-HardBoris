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
        const item = array[i];
        novoArray[i] = callback(item);
    }
    return novoArray;
}

let dobles = mapBG(numeros, duplos);
console.log(dobles);

/****************************************************************************
                                    filter
****************************************************************************/

function pares(item) {
    let par;
    if (item % 2 === 0) {
        par = item;
    }
    return par;
}

function impares(item) {
    let impar;
    if(item % 2 !== 0){
        impar = item;
    }
    return impar;
}

function primos(item) {
    let primo;
    if (item === 2) {
        return primo = 2
    }
    if (item === 1 || item === 0 || item % 2 === 0){
        return primo;
    }
    for (let i = 3; i <= Math.sqrt(item); i += 2){
        if (item % i === 0){
            return primo;
        }
    }
    return primo = item;
}
  

function filterBG(array, callback) {
    let novoArray = []
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (callback(item) !== undefined) {
            novoArray.push(callback(item));
        }
    }
    return novoArray;
}

let even = filterBG(numeros, pares);
console.log(even);

let odd = filterBG(numeros, impares);
console.log(odd);

let primes = filterBG(numeros, primos);
console.log(primes);