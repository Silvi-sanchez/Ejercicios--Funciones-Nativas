// Crear una función convertirEnAcronimo que tome como argumento un string str y un string con todos los caracteres en mayúscula y separados por un punto

convertirEnAcronimo('afip') // 'A.F.I.P.'
convertirEnAcronimo('nasa') // 'N.A.S.A.'


const convertirEnAcronimo = (str) => {
    let resultado = "";
    //Quito los espacios a la palabra o frase que ingresa en la funcion
    let sinEspacios = str.replaceAll(' ','');
    // Recorro la palabra o frase hasta su fin
    for(let i=0; i < sinEspacios.length; i++)
    {
    //    Agrego un espacio entre cada caracter
          resultado = resultado + sinEspacios[i] + '.' ;
    }
    return resultado.toUpperCase();
}


console.log(convertirEnAcronimo('afip'));
console.log(convertirEnAcronimo('nasa'));


//    OTRAS SOLUCIONES
// const convertirEnAcronimo = (str) => str.split("").join('.').toUpperCase();

//   2)
// const convertirEnAcronimo = str => {
//   const separar = str.split('');
//   console.log(separar);
//   const unir = separar.join('.');
//   console.log(unir);
//   const mayusculas = unir.toUpperCase();
//   console.log(mayusculas);
//   return mayusculas + '.'
// };
