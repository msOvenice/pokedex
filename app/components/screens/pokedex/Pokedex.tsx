import React, { FC, Suspense, useState } from "react"
import Layout from "../../layout/Layout"
import Row from "../../ui/grid/Row"
import Card from "./Card"
import Column from "../../ui/grid/Column"
import style from './Pokedex.module.scss'
import Button from "../../ui/button/Button"
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import { useGetPokemonsForCatalogQuery } from "@/app/store/pokemons/pokemon.api"
import Loader from "../../ui/loader/Loader"
import Search from "../../ui/search/Search"
import SortedCards from "./SortedCards"

const Cards: FC = () => {
  const [count, setCount] = useState(0)
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const {data, isLoading, error} = useGetPokemonsForCatalogQuery(count)

  const handleApplyFilter = (selectedOptions: string[]) => {
    setSelectedOptions(selectedOptions);
  };
  console.log(selectedOptions)
  
  return (
    <Layout 
			title='Pokédex'
			description='All the Pokémon data you will ever need in one place.'
	  >
      <h1 className={style.h1}>Pokédex</h1>
      <p className={style.description}>Search for a Pokémon by name or using its National Pokédex number</p>
      <Search onApplyFilter={handleApplyFilter} />
      
        {isLoading ? <Loader /> : error ? 
          <p className='red'>error</p>
        : selectedOptions?.length > 0 ?
          <SortedCards options={selectedOptions} />
        : (
          <div>
        <Row className={style.row}>
          {data?.results.map((pokemon) => (
            <Column isCenter={true} size={3} key={pokemon.name}>
                <Card pokemoned={pokemon} alt={pokemon.name} />
            </Column>
          ))} 
        </Row>
        <Row className={style.row}>
        {count > 0 ? 
          <Column isCenter={true} size={6}>
            <Button Icon={HiArrowLeft} size={30} onClick={() => setCount(count - 20)}/>
            <p className='ml-3'>#{count - 20} – {count}</p>
          </Column> 
        : <></>}
        <Column isCenter={true} size={6}>
          <p className='mr-3'>#{count + 20} – {count + 40}</p>
          <Button Icon={HiArrowRight} size={30} onClick={() => setCount(count + 20)}/>
        </Column>
      </Row>
      </div>
        )
        }
    </Layout>
  )
}

export default Cards