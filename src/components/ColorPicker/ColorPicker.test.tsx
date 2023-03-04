import React, { render, fireEvent } from '@testing-library/react';
import ColorPicker from './ColorPicker';

describe('ColorPicker component', () => {
  const onColorPickedMock = jest.fn();
  const defaultColor = '#ff0000';
  const defaultLabel = 'whatever';

  it('renders with a default color and label', () => {
    const { getByTestId } = render(
      <ColorPicker
        defaultColor={defaultColor}
        label={defaultLabel}
        onColorPicked={() => console.log('color picked :)')}
      />
    );
    expect(getByTestId('label-el').textContent).toBe(`${defaultLabel}:`);
    expect(getByTestId('color-preview')).toHaveStyle(`background-color: ${defaultColor}`);
  });

  it('updates the color and calls onColorPicked when user selects a new color', () => {
    const { getByTestId } = render(
      <ColorPicker defaultColor="#ff0000" label={defaultLabel} onColorPicked={onColorPickedMock} />
    );
    const colorPicker = getByTestId('color-picker');
    fireEvent.change(colorPicker, { target: { value: '#00ff00' } });
    expect(onColorPickedMock).toHaveBeenCalledTimes(1);
    expect(onColorPickedMock).toHaveBeenCalledWith('#00ff00');
    expect(colorPicker).toHaveValue('#00ff00');
  });
});
