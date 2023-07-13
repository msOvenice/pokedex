import { FC, useEffect, useState } from 'react';
import { useGetPokemonsOfTypeQuery } from '@/app/store/pokemons/pokemon.api';
import { IDataPokemon } from '@/app/types/pokemon.interface';
import Column from '../../ui/grid/Column';
import Card from './Card';
import Row from '../../ui/grid/Row';

interface IOptions {
  options: string[];
}

const SortedCards: FC<IOptions> = ({ options }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(20);

  const arr: IDataPokemon[][] = [];

  options.forEach((type) => {
    const { data } = useGetPokemonsOfTypeQuery(type);
    if (data) {
      const pokemonArr: IDataPokemon[] = data;
      arr.push(pokemonArr);
    }
  });

  // Get current cards based on pagination
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = arr.flat().slice(indexOfFirstCard, indexOfLastCard);

  // Change page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Row>
        {currentCards.map((pokemon) => (
          <Column isCenter={true} size={3} key={pokemon.name}>
            <Card pokemoned={pokemon} alt={pokemon.name} />
          </Column>
        ))}
      </Row>
      <div>
      {arr.flat().length > cardsPerPage && (
        <div className="flex justify-center py-4 space-x-2">
            {Array(Math.ceil(arr.flat().length / cardsPerPage))
            .fill(null)
            .map((_, index) => (
                <button
                key={index}
                className={`px-4 py-2 rounded-md focus:outline-none ${
                    currentPage === index + 1
                    ? 'bg-black text-white'
                    : 'bg-light-gray text-black hover:bg-gray'
                }`}
                onClick={() => paginate(index + 1)}
                >
                {index + 1}
                </button>
            ))}
        </div>
        )}

      </div>
    </div>
  );
};

export default SortedCards;
