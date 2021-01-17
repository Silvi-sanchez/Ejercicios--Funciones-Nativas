// Crear una función igualLongitud que tome como argumentos una palabra y un caracter y devuelva true si la palabra termina con el caracter o false de lo contrario

// igualLongitud('lovelace', 'e') // true
// igualLongitud('lovelace', 'f') // false


const esUltimoCaracter = (palabra, caracter) => palabra.endsWith(caracter);


console.log(esUltimoCaracter('lovelace', 'e')),
console.log(esUltimoCaracter('lovelace', 'f')); 


                // OTRA RESOLUCION
// const esUltimoCaracter = (palabra, caracter) => {
//     let posicionDeUltimoCaracter = palabra.length -1;
//     let ultimoCaracter = palabra.charAt(posicionDeUltimoCaracter);
//     return ultimoCaracter === caracter;
// }