// Crear una función esAnioNuevo que tome como argumento un string fecha con el formato DD:MM:YYYY un argumento y devuelva true si la fecha es año nuevo o false si no lo es

// esAnioNuevo('03/05/2015') // false
// esAnioNuevo('22/01/1987') // false
// esAnioNuevo('01/01/2020') // true


const esAnioNuevo = (fecha) => {
    let dates = fecha.split("/");
    return dates[0]=='01' && dates[1]=='01';
}


console.log(esAnioNuevo('03/05/2015'));
console.log(esAnioNuevo('22/01/1987'));
console.log(esAnioNuevo('01/01/2020'));