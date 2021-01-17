// Crear una función contarPalabras que tome como argumento un string str y devuelva el mismo string con todas las vocales reemplazadas por la letra i

// burlarse('programar es dificil') // 'prigimir is dificil'


const burlarse = (str) => str.replace(/[aeou]/gi,`i`);


console.log(burlarse('programar es dificil'));


     //    OTRA FORMA DE RESOLUCION
// const burlarse = (str) => {
//     let sinVocales = str.replaceAll("a","i");
//     sinVocales = sinVocales.replaceAll("e","i");
//     sinVocales = sinVocales.replaceAll("o","i");
//     sinVocales = sinVocales.replaceAll("u","i");
//     return sinVocales;
// }