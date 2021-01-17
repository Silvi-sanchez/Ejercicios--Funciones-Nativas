// Crear una función obtenerExtension que tome como argumento un string archivo con el formato 'nombre.extension' y devuelva la extensión del archivo

// obtenerExtension('imagen.png') // 'png'
// obtenerExtension('index.html') // 'html'
// obtenerExtension('notas.txt') // 'txt'


const obtenerExtension = (archivo) => {
  let archivoArchivo = archivo.split (".");
  let resultadoArchivo = archivoArchivo[1];
  return resultadoArchivo;
}


console.log(obtenerExtension('imagen.png'));
console.log(obtenerExtension('index.html'));
console.log(obtenerExtension('notas.txt'));