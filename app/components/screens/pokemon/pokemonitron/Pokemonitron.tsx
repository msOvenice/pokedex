import { FC } from 'react'
import MainInfo from './main-info/MainInfo'
import { IDataPokemon } from '@/app/types/pokemon.interface'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'

export interface IData {
  pokemon: IDataPokemon
}

const Pokemonitron: FC<IData> = ({ pokemon }) => {
  return (
    <div>
      <MainInfo pokemon={pokemon} />
      {/* <Link href={''} className='flex items-center text-xl mt-4'>
        <BsArrowRight size={35} className='mr-4' />
        Evolution
      </Link> */}
    </div>
  )
}

export default Pokemonitron