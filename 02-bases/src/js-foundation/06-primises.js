
const getPokemonById = (id) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    return fetch(url)
        .then(resp => resp.json())
        .then(() => {throw new Error('No existe')})
        .then( pokemon => pokemon.name);

    // fetch(url).then((response) => {
    //     response.json().then((pokemon) => {
    //         callback(pokemon.name);
    //     })
    // });
}

module.exports = getPokemonById;