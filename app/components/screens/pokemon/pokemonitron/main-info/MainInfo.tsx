import { FC } from 'react'
import style from './MainInfo.module.scss'
import { IData } from '../Pokemonitron'
import { useGetPokemonDescQuery } from '@/app/store/pokemons/pokemon.api'

const MainInfo: FC<IData> = ({ pokemon }) => {
  const {data, isLoading, error} = useGetPokemonDescQuery(pokemon.name)

  return (
    <div>
        <p>#{pokemon.id}</p>
        <h1>{pokemon.name}</h1>
        <p className={style.description}>{data?.flavor_text_entries[1].flavor_text}</p>
    </div>
  )
}

export default MainInfo