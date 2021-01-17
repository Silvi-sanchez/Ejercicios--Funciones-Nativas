// capitalizar(str)
// Crear una función capitalizar que tome como argumento un string str y devuelva el mismo string con la primera letra en mayúscula

// capitalizar('lovelace') // 'Lovelace'
// capitalizar('había una vez...') // 'Había una vez...'


const capitalizar = (str) => {
    return str[0].toUpperCase() + str.slice(1);
}


console.log(capitalizar('lovelace')), 
console.log(capitalizar('había una vez...')); 


    //    OTRA OPCION DE RESOLUCION MAS COMPLICADA
// const capitalizar = (str) => {
//     const primerCaracter = str.charAt(0).toUpperCase();
//     const restoDeLaCadena = str.substring(1, str.length);
//     return primerCaracter.concat(restoDeLaCadena);
// }
