// Crear una función esPuenteSeguro que tome como string un puente que consista en caracteres numerales y espacios y devuelva true si el puente está cortado (tiene espacios) o false si está entero y es seguro atravesar

// esPuenteSeguro('### ##') // false
// esPuenteSeguro('##### ####') // false
// esPuenteSeguro('########') // true


const esPuenteSeguro = (puente) => {
  let espacios = puente.split(" ");
  return! (espacios.length > 1);
}
  
console.log(esPuenteSeguro('### ##'));
console.log(esPuenteSeguro('##### ####'));
console.log(esPuenteSeguro('########'));