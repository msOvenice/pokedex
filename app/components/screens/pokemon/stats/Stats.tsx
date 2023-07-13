import { FC } from 'react'
import { IData } from '../pokemonitron/Pokemonitron'
import { GroupSVG, TypeObject } from '@/app/types/pokemon.interface'
import Link from 'next/link'
import Image from 'next/image'

const Stats: FC<IData> = ({ pokemon }) => {
  const updatedGroupTypes: TypeObject[] = pokemon.types.map((type) => {
    const matchingGroup = GroupSVG.find((group) => group.name === type.type.name);
    if (matchingGroup) {
      return {
        ...type.type,
        image: matchingGroup.image,
      };
    }
    return type.type;
  });

  return (
    <div className='z-10'>
      <h2 className='uppercase'>Type</h2>
      <div className='flex mb-8'>
        {updatedGroupTypes.map((type) => (
          <Link href={'/'} placeholder={type.name} className='mr-4' key={type.id}>
            <Image src={type.image} alt={type.name} width={40} height={40} about={type.name} />
          </Link>
        ))}
      </div>
      {pokemon.stats.map((stat, index) => (
        <div className='mb-3' key={index}>
          <p className='uppercase font-dosis'>{stat.stat.name}: {stat.base_stat}</p>
          <div className="w-60 bg-light-gray rounded-full h-1.5 dark:bg-gray-700">
            <div className="bg-black h-1.5 rounded-full w-[45%]"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Stats