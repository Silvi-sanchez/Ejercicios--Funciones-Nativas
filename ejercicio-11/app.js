// Crear una función ocultarContraseña que tome como argumento una contrasenia de solo numeros y devuelva un string con dicha contraseña ocultada con astericos *, es decir, un string con la misma longitud donde todos sus caracteres son astericos

// ocultarContrasenia(123456) // '******'
// ocultarContrasenia(111222333) // '*********'

const ocultarContrasenia = (contrasenia) => {
    return '*'.repeat(contrasenia.toString().length);
}


console.log(ocultarContrasenia(123456)); 
console.log(ocultarContrasenia(111222333));