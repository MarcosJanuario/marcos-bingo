import React, { useEffect, useState } from 'react';
import './ColorPicker.css';
import { ColorPickerProps } from './types';

const ColorPicker = ({ label, defaultColor, onColorPicked }: ColorPickerProps): JSX.Element => {
  const [color, setColor] = useState(defaultColor);

  useEffect(() => {
    setColor(defaultColor);
  }, [defaultColor]);

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newColor = event.target.value;
    setColor(newColor);
    onColorPicked(newColor);
  };

  return (
    <div className="color-picker-wrapper">
      <label data-testid="label-el" htmlFor="color-picker">
        {label}:
      </label>
      <input
        data-testid="color-picker"
        id="color-picker"
        type="color"
        value={color}
        onChange={handleColorChange}
      />
      <div
        data-testid="color-preview"
        className="color-preview"
        style={{ backgroundColor: color }}
      />
    </div>
  );
};

export default ColorPicker;
