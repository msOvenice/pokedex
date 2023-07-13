import { IDataPokemon, IDescription, IPokemon } from "@/app/types/pokemon.interface";

export interface IPokemonInitialState {
    items: IPokemon[] | IDataPokemon | IDescription
}