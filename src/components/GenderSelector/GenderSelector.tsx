import React, { useState } from 'react';
import './GenderSelector.scss';
import { Gender } from '../../utils/types';

interface GenderSelectorProps {
  onChange: (gender: Gender) => void;
}

const GenderSelector = ({ onChange }: GenderSelectorProps): JSX.Element => {
  const [selectedGender, setSelectedGender] = useState<Gender>('male');

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selection = event.target.value as Gender;
    setSelectedGender(selection);
    onChange(selection);
  };

  return (
    <div className="gender-selector-wrapper">
      <label className="radio">
        <input
          type="radio"
          value="male"
          checked={selectedGender === 'male'}
          onChange={handleGenderChange}
        />
        Male
      </label>
      <label className="radio">
        <input
          type="radio"
          value="female"
          checked={selectedGender === 'female'}
          onChange={handleGenderChange}
        />
        Female
      </label>
    </div>
  );
};

export default GenderSelector;
