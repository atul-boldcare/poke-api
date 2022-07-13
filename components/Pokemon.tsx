import React from "react";
import { useSSE } from "use-sse";

export interface apiData {
    name: string;
    url: string;
}

const Pokemon = () => {
    const [pokemons, error] = useSSE(async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const data = await response.json();

        return data.results;
    }, []);

    console.log(pokemons);

    if (!pokemons?.length) return <span>Loading...</span>;
    
    return (
        <div>
            {pokemons.map((pokemon: apiData, index: number) => (
                <h1 key={index}>{pokemon.name}</h1>
            ))}
        </div>
    );
};

export default Pokemon;
