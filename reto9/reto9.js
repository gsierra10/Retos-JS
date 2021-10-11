console.log('Reto 9')

function esPrimo(numero){
    for(let n = 2,raiz=Math.sqrt(numero); n <= raiz; n++)
    if(numero % n == 0) return false;
    return numero > 1;
}
function esPrimo(numero){
    for(let i = 3,raiz=Math.sqrt(numero); i <= raiz; i++)
    if(numero % i == 0) return false;
    return numero > 1;
}
for (let x=0;x<=100;x++) {
    if (esPrimo(x))
        console.log("El número " + x + " es primo");
}