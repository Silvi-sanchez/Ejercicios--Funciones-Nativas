// aHackerSpeak(str)
// Crear una función aHackerSpeak que tome como argumento un string str y el mismo string convertido a H4CK3R 5P3AK, siguiendo las siguientes reglas:

// - Las i se transforman en 1
// - Las e se transforman en 3
// - Las a se transforman en 4
// - Las s se transforman en 5
// - Las 0 se transforman en 0
// aHackerSpeak('javascript') // 'j4v45cr1pt'
// aHackerSpeak('soy una hacker') // '50y un4 h4ck3r'
// aHackerSpeak('ADA LOVELACE') // '4D4 L0V3L4C3'

const aHackerSpeak = (str) => {
    let reemplazo = str.replace(/i/gi,'1')
    reemplazo = reemplazo.replace(/e/gi,'3')
    reemplazo = reemplazo.replace(/a/gi,'4')
    reemplazo = reemplazo.replace(/s/gi,'5');
    reemplazo = reemplazo.replace(/o/gi,'0');
    return reemplazo;
}


console.log(aHackerSpeak('javascript'));
console.log(aHackerSpeak('soy una hacker'));
console.log(aHackerSpeak('ADA LOVELACE'));