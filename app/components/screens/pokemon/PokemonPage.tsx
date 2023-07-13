import { FC } from 'react'
import Layout from '../../layout/Layout'
import { useRouter } from 'next/router';
import Row from '../../ui/grid/Row';
import Column from '../../ui/grid/Column';
import Image from 'next/image';
import { useGetPokemonDataQuery } from '@/app/store/pokemons/pokemon.api';
import Loader from '../../ui/loader/Loader';
import Pokemonitron from './pokemonitron/Pokemonitron';
import Stats from './stats/Stats';

const PokemonPage:FC = () => {
    const { asPath } = useRouter();
    const pokemonName = asPath.replace('/pokedex/', '');
    const {data, isLoading, error} = useGetPokemonDataQuery(pokemonName)
    console.log(data)
    return (
        <Layout 
		    title='Pokédex'
		    description='All the Pokémon data you will ever need in one place.'
	    >
            {isLoading ? <Loader /> : error ? 
                <p>error</p>
            : 
                <Row>
                    <Column size={3} isCenter={false}>
                        <Pokemonitron pokemon={data} />
                    </Column>
                    <Column size={6} isCenter={true}>
                        <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${data?.id}.png`} alt={pokemonName} width={550} height={493} />
                    </Column>
                    <Column size={3} isCenter={false}>
                        <Stats pokemon={data} />
                    </Column>
                </Row>
            }
        </Layout>
    )
}

export default PokemonPage