// Crear una función obtenerDuracionEnSegundos que tome como argumento un string duracion con el formato (mm:ss) y la cantidad de segundos totales de la duración

// obtenerDuracionEnSegundos('00:33') // 33
// obtenerDuracionEnSegundos('01:05') // 65
// obtenerDuracionEnSegundos('10:42') // 642


const obtenerDuracionEnSegundos = (duracion) => {
    let cambioSegundos = duracion.split(":");
    let resultado = parseInt(cambioSegundos[0]*60) + parseInt(cambioSegundos[1]);
    return resultado;
}


console.log(obtenerDuracionEnSegundos('00:33'));
console.log(obtenerDuracionEnSegundos('01:05'));
console.log(obtenerDuracionEnSegundos('10:42'));