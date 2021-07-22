/* Retornar dados sobre Habilidades, experiencia base, peso, altura
    stats, espécie, tipos e moves dos pokémons
    
    Usando dados da resposta do GET feito para buscar um pokemon, tragam os seguintes dados:

    Próxima evolução(caso tenha)
    Se ele é mítico
    Se ele é lendário
    Se ele é um bebê
    De qual pokemon ele evoluiu(caso tenha)
    
    */
import axios from 'axios'
import * as util from 'util'

function pokeBasico(){
    const poke = axios.get('https://pokeapi.co/api/v2/pokemon/onix')
    .then(res => {

        let pokemon = {
            nome: res.data.name,
            expBase: res.data.base_experience,
            peso: res.data.weight,
            altura: res.data.height,
            statusBase: res.data.stats,
            especie: res.data.species,
            movimentos: res.data.moves,
            tipos: res.data.types
        }
        // console.log(util.inspect(pokemon, { showHidden:true, depth:2, colors:true }))
        return pokemon
    })
    .catch(error => {
        console.log(error)
    })
    return poke
}

function pokeEspecifico(){
    const poke = axios.get('https://pokeapi.co/api/v2/pokemon-species/onix/')
    .then(res => {

        let pokeEspecie = {
            proxEvolucao: res.data.evolution_chain,
            ehMitico: res.data.is_mythical,
            ehLendario: res.data.is_legendary,
            ehBebe: res.data.is_baby,
            evoluiDe: res.data.evolves_from_species
        }
        // console.log(util.inspect(pokeEspecie, { showHidden:true, depth:2, colors:true }))
        return pokeEspecie
    })
    .catch(error => {
        console.log(error)
    })
    return poke
}

pokeBasico().then(poke => console.log(util.inspect(poke, { showHidden:true, depth:2, colors:true })))
pokeEspecifico().then(poke => console.log(util.inspect(poke, { showHidden:true, depth:2, colors:true })))