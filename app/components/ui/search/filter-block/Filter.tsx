import Checkbox from '@/app/components/ui/Checkbox';
import Button from '@/app/components/ui/button/Button'
import { useGetTypeQuery } from '@/app/store/pokemons/pokemon.api';
import { FC, useState } from 'react'
import { GrClose, GrAggregate } from 'react-icons/gr'

interface FilterProps {
  onApplyFilter: (selectedOptions: string[]) => void;
  onClose: () => void;
}

const Filter:FC<FilterProps> = ({ onClose, onApplyFilter }) => {
  const { data: typesData } = useGetTypeQuery();
  const initialSelectedOptions: string[] = [];
  const [selectedOptions, setSelectedOptions] = useState(initialSelectedOptions);

  const handleCheckboxChange = (value: string) => {
    setSelectedOptions((prevSelectedOptions) => {
      const updatedOptions = [...prevSelectedOptions];
      const index = updatedOptions.indexOf(value);

      if (index > -1) {
        updatedOptions.splice(index, 1);
      } else {
        updatedOptions.push(value);
      }

      return updatedOptions;
    });
  };
    
  const handleButtonClick = () => {
    onApplyFilter(selectedOptions);
    onClose();
  };
    
  return (
  <div className="block relative md:py-10 lg:px-20 md:px-6 py-9 px-4 bg-gray-50 w-full mb-5">
    <div className="cursor-pointer text-black absolute right-0 top-0 md:py-10 lg:px-20 md:px-6 py-9 px-4">
        <Button Icon={GrClose} onClick={onClose} size={20} />
    </div>

    <div>
      <div className="flex space-x-2 text-black">
        <GrAggregate />
        <p className="lg:text-2xl text-xl lg:leading-6 leading-5 font-medium ">Type</p>
      </div>
      <div className="md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
        {typesData?.map((type) => (
          <Checkbox
            label={type}
            isChecked={selectedOptions.includes(type)}
            onChange={() => handleCheckboxChange(type)}
            key={type}
          />
        ))}
      </div>
    </div>

    <div className="hidden md:block absolute right-0 -bottom-13 md:py-10 lg:px-20 md:px-6 px-4">
      <button onClick={handleButtonClick} className="bg-black hover:bg-gray-700 focus:ring focus:ring-offset-2 focus:ring-gray-800 text-base leading-4 font-medium py-4 px-10 text-white bg-gray-800">Apply Filter</button>
    </div>
  </div>
  )
}

export default Filter