import React from 'react';
import './InputField.css';
import { InputProps } from './types';

const InputField = ({
  label,
  value,
  onChange,
  placeholder,
  className,
  disabled = false,
  error = false
}: InputProps): JSX.Element => (
  <div className={`input-field ${className ? className : ''}`}>
    <label htmlFor={label}>{label}</label>
    <input
      style={{ border: `1px solid ${error ? '#FF1744' : '#cccccc'}` }}
      type="text"
      id={label}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
    />
  </div>
);

export default InputField;
