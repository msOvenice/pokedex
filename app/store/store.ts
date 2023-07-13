import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "./pokemons/pokemon.api";

export const store = configureStore({
    reducer: {[pokemonApi.reducerPath]: pokemonApi.reducer},
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(pokemonApi.middleware)
})

export type TypeRootState = ReturnType<typeof store.getState>