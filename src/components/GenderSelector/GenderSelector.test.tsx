import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import GenderSelector from './GenderSelector';

describe('GenderSelector', () => {
  it('calls handleChange through onChange when the gender is changed', () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(<GenderSelector onChange={handleChange} />);

    const femaleRadio = getByLabelText('Female');

    fireEvent.click(femaleRadio);

    expect(handleChange).toHaveBeenCalledWith('female');
  });
});
