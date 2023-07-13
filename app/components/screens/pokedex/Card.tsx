import { FC } from 'react';
import Image from 'next/image';
import { IDataPokemon } from '@/app/types/pokemon.interface';
import Link from 'next/link';
import { useGetPokemonDataQuery } from '@/app/store/pokemons/pokemon.api';
import Loader from '../../ui/loader/Loader';

interface IPok {
  pokemoned: IDataPokemon;
  alt: string
}

const Card: FC<IPok> = ({ pokemoned, alt }) => {
  const { data, isLoading, error } = useGetPokemonDataQuery(pokemoned.name);
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${data?.id}.png`

  return (
    <div>
      {isLoading ? <Loader /> : <div>
      <Image alt={alt} src={image} width={200} height={200} />
      <p className='mt-8'>#{data?.id}</p>
      <Link href={`pokedex/${data?.name}`}>
        <h2>{data?.name}</h2>
      </Link></div>}
    </div>
  );
};

export default Card;
