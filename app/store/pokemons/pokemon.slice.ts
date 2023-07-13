import { createSlice } from '@reduxjs/toolkit'
import { IPokemonInitialState } from "./pokemon.types";
import { IPokemon } from '@/app/types/pokemon.interface';

const initialState: IPokemonInitialState = {
    items: []
}

export const PokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        
    },
})

export const {} = PokemonSlice.actions