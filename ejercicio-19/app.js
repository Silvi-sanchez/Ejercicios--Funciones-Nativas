// Crear una función aprueba que tome como argumento un número nota y devuelva true si aprueba el examente (6 o más) o false si no. El número tiene que redondearse primero antes de evaluarlo

// aprueba(1) // false
// aprueba(5.4) // false
// aprueba(5.5) // true
// aprueba(5.6) // true
// aprueba(8) // true

const aprueba = (nota) => Math.round(nota)>=6;


console.log(aprueba(1)); 
console.log(aprueba(5.4)); 
console.log(aprueba(5.5)); 
console.log(aprueba(5.6)); 
console.log(aprueba(8)); 