import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

function PokemonViewer() {
    const [pagina, setPagina] = useState(1);
    const [pokemon, setPokemon] = useState(null);

    const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

    useEffect(() => {
        buscarDadosApi(pagina);
    }, [pagina]);

    const buscarDadosApi = (pokemonId) => {
        fetch(apiUrl + pokemonId)
            .then(response => response.json())
            .then(data => {
                setPokemon(data);
            })
            .catch(error => {
                console.error("Erro ao buscar: ", error);
                setPokemon(null);
            });
    };

    const carregarAnterior = () => {
        if (pagina > 1) {
            setPagina(pagina - 1);
        }
    };

    const carregarProximo = () => {
        setPagina(pagina + 1);
    };

    const mostrarDetalhes = () => {
        if (pokemon) {
            let detalhes = `Altura: ${encode(pokemon.height)}<br>`;
            detalhes += `Peso: ${encode(pokemon.weight)}<br>`;
            detalhes += `Tipo: ${encode(pokemon.types.map(t => t.type.name).join(", "))}<br>`;
            detalhes += `Habilidades: ${encode(pokemon.abilities.map(a => a.ability.name).join(", "))}`;
            
            Swal.fire({
                title: encode(pokemon.name),
                html: detalhes,
                imageUrl: pokemon.sprites.front_default,
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: 'Custom image',
            });
        }
    };

    function encode(str) {
        let div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    }

    return (
        <div className="cards-poker">
           
            {pokemon && (
                <div className="cards-poker">
                    <img id="image" src={pokemon.sprites.front_default} alt={pokemon.name} onClick={mostrarDetalhes} />
                </div>
            )}
            <p>Clique no pokemon</p>
             <button id="anterior" onClick={carregarAnterior}>Anterior</button>
            <button id="proximo" onClick={carregarProximo}>Próximo</button>
        </div>
    );
}

export default PokemonViewer;
