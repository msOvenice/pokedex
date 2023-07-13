import { IDataPokemon, IDescription, IPokemon, IItem, IPokemons } from '@/app/types/pokemon.interface'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const SERVER_URL = 'https://pokeapi.co/api/v2/'

export const pokemonApi = createApi({
    reducerPath: 'api/pokemons',
    baseQuery: fetchBaseQuery({baseUrl: SERVER_URL}),
    endpoints: build => ({
        getPokemons: build.query<IPokemon, number>({query: (limit = 5000) => `pokemon?limit=${limit}`}),
        getPokemonsForCatalog: build.query<IPokemon, number>({query: (limit = 5000) => `pokemon?limit=20&offset=${limit}`}),
        getPokemonData: build.query<IDataPokemon, string>({query: (name) => `pokemon/${name}`}),
        getPokemonDesc: build.query<IDescription, string>({query: (name) => `pokemon-species/${name}`}),
        getType: build.query<string[], void>({
            query: () => 'type',
            transformResponse: (response: { results: IItem[] }) =>
              response.results.map((item) => item.name),
        }),
        getPokemonsOfType: build.query<IDataPokemon[], string>({
            query: (type) => `type/${type}`,
            transformResponse: (response: { pokemon: IPokemons[] }) =>
              response.pokemon.map((item) => item.pokemon),
        }),
    })
})

export const {useGetPokemonsQuery, useGetPokemonDataQuery, useGetPokemonsForCatalogQuery, useGetPokemonDescQuery, useGetTypeQuery, useGetPokemonsOfTypeQuery} = pokemonApi