
// Crear una función obtenerPrimeraOracion que tome como argumento un string str y la primera oración de dicho string

// obtenerPrimeraOracion('A mí no me preguntes, sólo soy una oración') // 'A mí no me preguntes, sólo soy una oración'
// obtenerPrimeraOracion('Tengo varias oraciones. Esta es la segunda. Y esta es la tercera.') // 'Tengo varias oraciones.'


const obtenerPrimeraOracion = (str) => {
    let oracion = str.split(".");
    return oracion[0];
}


console.log(obtenerPrimeraOracion('A mí no me preguntes, sólo soy una oración'));
console.log(obtenerPrimeraOracion('Tengo varias oraciones. Esta es la segunda. Y esta es la tercera.'));