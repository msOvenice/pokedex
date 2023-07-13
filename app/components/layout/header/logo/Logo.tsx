import Column from '@/app/components/ui/grid/Column'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const Logo: FC = () => {
  return <Column isCenter={true} size={1}>
    <Link href='/' className='flex items-center mx-auto'>
        <Image
            src='/images/pokemon-logo.png'
            width={100}
            height={100}
            alt='Pokemons'
        />
    </Link>
  </Column>
}

export default Logo