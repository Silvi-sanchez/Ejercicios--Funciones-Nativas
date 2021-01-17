// Reddit es una red de comunidades en la que cada comunidad se conocer como subreddit. Crear una función obtenerSubreddit que tome como argumento un string url que consista en la url de un subreddit (p. ej. 'https://www.reddit.com/r/dankmemes/') y devuelva el subreddit (p. ej. 'dankmemes')

// obtenerSubreddit('https://www.reddit.com/r/javascript/') // 'javascript' 
// obtenerSubreddit('https://www.reddit.com/r/aww/') // 'aww' 



const obtenerSubreddit = (url) => {
    let resultado = url.slice(25);
    resultado = resultado.slice(0, resultado.length -1);
    return resultado;
}


console.log(obtenerSubreddit('https://www.reddit.com/r/javascript/'));
console.log(obtenerSubreddit('https://www.reddit.com/r/aww/'));

