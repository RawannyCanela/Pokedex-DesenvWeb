const pokemonModel = require('../models/pokemonModel');

const getAllPokemons = (req, res) => {
    const pokemons = pokemonModel.getPokemons();
    res.render('index', { pokemons });  
};


const createPokemon = (req, res) => {
    const { nome, tipo, altura, peso, nivelPoder, nomePessoa, nomeEquipe } = req.body;
    const newPokemon = pokemonModel.createPokemon(nome, tipo, altura, peso, nivelPoder, nomePessoa, nomeEquipe);
    
    res.redirect(`/pokemon/${newPokemon.id}`);
};

const getPokemon = (req, res) => {
    const pokemon = pokemonModel.getPokemonById(req.params.id);
    if (pokemon) {
        res.render('visualização', { pokemon }); 
    } else {
        res.status(404).send('Pokémon ainda não adicionado');
    }
};

module.exports = {
    getAllPokemons,
    getPokemon,
    createPokemon
};