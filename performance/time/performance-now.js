const performance = require('perf_hooks');

function contar(n) {
    for(let i = 0; i < n; i++) {
        console.log(i);
    }
}

let inicio_tiempo = performance.performance.now();
contar(5)
let final_tiempo = performance.performance.now();
let duracion = final_tiempo - inicio_tiempo;

console.log(`El algoritmo constar ha durado ${duracion}ms.`)


function count(n) {
    for(let i = 0; i < n; i++) {
        console.log(i);
    }
}

let timeInit = performance.now();
count(5)
let timeEnd = performance.now();
let during = timeEnd - timeInit;

console.log(`El algoritmo constar ha durado ${during}ms.`)