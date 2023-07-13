import { FC, useState } from 'react'
import style from './Search.module.scss'
import Button from "../../ui/button/Button"
import { RiFilterFill } from 'react-icons/ri'
import { FiSearch } from 'react-icons/fi'
import Filter from './filter-block/Filter'
import { useGetPokemonsQuery } from '@/app/store/pokemons/pokemon.api'
import Link from 'next/link'

export interface FilterProps {
  onApplyFilter: (selectedOptions: string[]) => void;
}

const Search:FC<FilterProps> = ({ onApplyFilter }) => {
  const {data: dataAll, isLoading: isLoadingAll, error: errorAll} = useGetPokemonsQuery(1000)
  
  const [selectedOptions, setSelectedOptions] = useState<string[]>();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchValue, setSearchValue] = useState<string>('');

  const handleApplyFilter = (selectedOptions: string[]) => {
    setSelectedOptions(selectedOptions);
    setIsFilterOpen(false);
    onApplyFilter(selectedOptions);
  };

  return (
    <div className='relative'>
      <div className={style.search}>
        <div>
          <Button Icon={FiSearch} onClick={() => {}} size={20} />
          <input type="search" placeholder="Name" x-model="q" value={searchValue} onChange={(event) => setSearchValue(event.target.value)} />            
          <Button Icon={RiFilterFill} onClick={() => setIsFilterOpen(true)} size={25} />
        </div>
      </div>
      {isFilterOpen && <Filter onApplyFilter={handleApplyFilter} onClose={() => setIsFilterOpen(false)} />}
      {
        searchValue.length > 0 ? (
          <div className='absolute max-h-96 flex flex-col overflow-y-scroll w-2/3 mx-auto left-0 right-0 bg-light-gray rounded-xl p-3'>
          {dataAll?.results.filter(pokemon => pokemon.name.includes(searchValue)).map(filtered => (
              <Link href={`pokedex/${filtered.name}`} className='p-3' key={filtered.id}>{filtered.name}</Link>
          ))}
          </div>
        )
      : <></>
      }
    </div>
  )
}

export default Search