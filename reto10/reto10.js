console.log('Reto 10')

let numeroDeVentas = Number(prompt('Introduce el numero de ventas'))
numeroDeVentas = 6
let ventasTotales = 0

for(var n = 0; n < numeroDeVentas; n++){
    let ventaActual=  Number(prompt('Introduce el monto de la Venta Actual'))
    ventasTotales += ventaActual
}

console.log(ventasTotales)