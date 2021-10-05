import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './../../components/Header';
import api from './../../services/api';

import './styles.css';

interface PokemonData {
  name: string,
  url: string,
  imageUrl?: string,
  id?: number,
}

const Main = () => {
  const [pokemons, setPokemons] =useState<PokemonData[]>([]);
  const [page, setPage] = useState<[string, string, string]>(["", "", ""]);

  useEffect(() => {
    listPokemons('pokemon');
  }, [] || pokemons);

  const listPokemons = async (url: string) => {
    await api.get(url).then(response => {
      let id:number[] = [];
      let next =response.data.next 
      let previous =response.data.previous
      let pokemon: PokemonData[] = response.data.results;
      next = next !== null ? next.split('v2')[1] : url;
      previous = previous !== null ? previous.split('v2')[1]: url;
      setPokemons(pokemonProperty(pokemon));
      setPage([String(previous), url, String(next)]);
      window.scrollTo(0, 0);
    });

  const pokemonProperty = (pokemons: PokemonData[]) => {
    let pokemon = pokemons.map((pokemon) => {
      let id = Number(String(pokemon.url.split('pokemon/')[1]).split('/')[0]);
      let imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
      let name = pokemon.name;
      let url = pokemon.url;
      return ({
        id,
        name,
        url,
        imageUrl,
      });
    });
    return pokemon;    
  }

  }
  
  return (
    <div>
      <Header title="Pokemon" />
      <div className="main">
        <div className="pokemon">
          <div className="pokemon-list">
            <ul>
              {pokemons.map((pokemon, index) =>(
              <li key={pokemon.id}>
                  <div className="pokemon-element">
                    <img src={pokemon.imageUrl}
                    alt={pokemon.name}/>
                      <strong>{pokemon.name}</strong>
                  </div>
              </li>
              ))}
            </ul>
      <div className="buttons">
      <div className="button-elements">
      <button onClick={() => {
        if (page[0] !== page[1]) {
          listPokemons(page[0])
        }
      }}>
      <strong>Previous</strong>
      </button>
    </div>

    <div className="button-elements">
      <button onClick={() => { 
        if (page[1] !== "pokemon") {
          listPokemons("pokemon")
        }
    }}>
      <strong>Home</strong>
      </button>
    </div>

    <div className="button-elements">
      <button onClick={() => { 
        if (page[2] !== page[1]) {
          listPokemons(page[2]) 
        }
        }}>
      <strong>Next</strong>
      </button>
    </div>
      </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
