import React, { useEffect, useState } from 'react';
import './ColorPicker.css';

interface ColorPickerProps {
  label: string;
  defaultColor: string;
  onColorPicked: (color: string) => void;
}

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
      <label htmlFor="color-picker">{label}:</label>
      <input id="color-picker" type="color" value={color} onChange={handleColorChange} />
      <div className="color-preview" style={{ backgroundColor: color }} />
    </div>
  );
};

export default ColorPicker;
