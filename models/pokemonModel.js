const pokemons = [
    { id: 1, nome: 'Bulbassauro', tipo: 'Vegetal/Veneno' },
    { id: 2, nome: 'Squirtle', tipo: 'Água' },
    { id: 3, nome: 'Charmander', tipo: 'Fogo' },
];

const getPokemons = () => pokemons;
const getPokemonById = (id) => pokemons.find(p => p.id === parseInt(id));
const createPokemon = (nome, tipo, altura, peso, nivelPoder, nomePessoa, nomeEquipe) => {
    const newPokemon = {
        nomePessoa,
        nomeEquipe,
        id: pokemons.length + 1,
        nome,
        tipo,
        altura: parseFloat(altura),
        peso: parseFloat(peso),
        nivelPoder: parseInt(nivelPoder)
    };
    
    pokemons.push(newPokemon);
    return newPokemon;
};

module.exports = {
    getPokemons,
    getPokemonById,
    createPokemon,
};