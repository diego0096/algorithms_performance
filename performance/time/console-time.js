function contar(n) {
    for(let i = 0; i < n; i++) {
        console.log(i);
    }
}

let inicio_tiempo = console.time('duracion-contar');
contar(5)
let final_tiempo = console.timeEnd('duracion-contar');