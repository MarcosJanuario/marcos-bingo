export interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'default' | 'primary' | 'secondary';
  disabled?: boolean;
  className?: string;
}
