// Crear una función esFraccionMayorAUno que tome como argumento un string fraccion (en el formato 'numerador/denominador') y devuelva true si dicha fracción es mayor a 1 o false de lo contrario

// esFraccionMayorAUno('1/2') // false
// esFraccionMayorAUno('2/2') // false
// esFraccionMayorAUno('4/2') // true


const esFraccionMayorAUno = (fraccion) => {
    let numeros = fraccion.split ("/");
    let resultado = numeros[0]/numeros[1];  
        return resultado > 1;
    }
}


console.log(esFraccionMayorAUno('1/2')); 
console.log(esFraccionMayorAUno('2/2'));
console.log(esFraccionMayorAUno('4/2'));