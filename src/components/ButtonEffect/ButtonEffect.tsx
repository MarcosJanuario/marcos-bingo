import React, { useState } from 'react';
import './ButtonEffect.css';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'default' | 'primary' | 'secondary';
  disabled?: boolean;
  className?: string;
}

const ButtonEffect = ({
  label,
  onClick,
  variant = 'contained',
  color = 'primary',
  disabled = false,
  className
}: ButtonProps): JSX.Element => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    onClick && onClick();
    setTimeout(() => {
      setIsClicked(false);
    }, 1000);
  };

  return (
    <button
      className={`button ${variant} ${color} ${className} ${disabled && 'disabled'} ${
        isClicked ? 'clicked' : ''
      }`}
      onClick={handleClick}
      disabled={disabled}>
      {label}
    </button>
  );
};

export default ButtonEffect;
