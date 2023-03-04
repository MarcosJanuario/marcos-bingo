import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputField from './InputField';

describe('InputField', () => {
  it('calls handleChange through onChange with the new updated input value', () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(
      <InputField label="Test Input" value="" onChange={handleChange} />
    );

    const input = getByTestId('input-field');

    fireEvent.change(input, { target: { value: 'updated value' } });

    expect(handleChange).toHaveBeenCalled();
  });
});
