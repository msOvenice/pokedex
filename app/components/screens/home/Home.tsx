import { FC } from 'react'
import Layout from '../../layout/Layout'
import { BsArrowRight } from 'react-icons/bs'
import Link from 'next/link'

const Home: FC = () => {
  return (
    <Layout 
			title='Home'
			description='.'
	>
    <div className="bg-[url('/images/pikachu.png')] h-full bg-no-repeat bg-right pt-[15%]">
      <h1 className='text-8xl text-black font-bold font-outline-2 mb-7'>Pokédex</h1>
      <Link href={'/pokedex'} className='flex items-center w-fit'>
        <BsArrowRight size={35} />
        <p className='ml-3 text-2xl'>Let`s go!</p>
      </Link>
    </div>
  </Layout>
  )
}

export default Home