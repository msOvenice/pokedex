import React, { FC } from "react";

interface Props {
  isChecked: boolean;
  onChange: () => void;
  label: string;
}

const Checkbox:FC<Props> = ({ isChecked, onChange, label }) => {
  return (
    <div>
      <label className='mr-3'>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        className='mr-2'
      />
      {label}</label>
    </div>
  );
};
export default Checkbox;
