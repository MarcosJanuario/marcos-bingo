import React from 'react';
import './InputField.css';

interface InputProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

const InputField = ({
  label,
  value,
  onChange,
  placeholder,
  className
}: InputProps): JSX.Element => (
  <div className={`input-field ${className}`}>
    <label htmlFor={label}>{label}</label>
    <input type="text" id={label} value={value} onChange={onChange} placeholder={placeholder} />
  </div>
);

export default InputField;
