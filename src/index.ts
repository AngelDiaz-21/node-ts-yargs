// const valor = 1;

// function obtenerModulo(){
//     let datos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
//     return datos.filter(item => item % valor === 0);
// }

// const result = obtenerModulo(); 
// console.log(result)

function miFuncion() {
    let count = 1
    function contador() {
        console.log(count)
    }
    contador() // imprime 1
}

let result = miFuncion();
console.log(result);