import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import ButtonEffect from './ButtonEffect';

describe('ButtonEffect', () => {
  const onClickMock = jest.fn();

  beforeEach(() => {
    onClickMock.mockClear();
  });

  it('renders the label text', () => {
    const labelText = 'Click Me';
    const { getByText } = render(<ButtonEffect label={labelText} />);
    expect(getByText(labelText)).toBeInTheDocument();
  });

  it('calls the onClick handler when clicked', async () => {
    const labelText = 'Click Me';
    const { getByText } = render(<ButtonEffect label={labelText} onClick={onClickMock} />);
    const button = getByText(labelText);
    fireEvent.click(button);
    await waitFor(() => expect(onClickMock).toHaveBeenCalledTimes(1));
  });

  it('disables the button when disabled prop is passed', () => {
    const labelText = 'Click Me';
    const { getByText } = render(<ButtonEffect label={labelText} disabled />);
    const button = getByText(labelText);
    expect(button).toBeDisabled();
  });

  it('applies the variantt and color classes', () => {
    const labelText = 'Click Me';
    const variant = 'outlined';
    const color = 'secondary';
    const { getByText } = render(
      <ButtonEffect label={labelText} variant={variant} color={color} />
    );
    const button = getByText(labelText);
    expect(button).toHaveClass(variant);
    expect(button).toHaveClass(color);
  });

  it('applies the provided class name by parameter to the elemebt', () => {
    const labelText = 'Click Me';
    const className = 'bingo-class';
    const { getByText } = render(<ButtonEffect label={labelText} className={className} />);
    const button = getByText(labelText);
    expect(button).toHaveClass(className);
  });

  it('sets "clicked" class when clicking', async () => {
    const labelText = 'Click Me';
    const { getByText } = render(<ButtonEffect label={labelText} />);
    const button = getByText(labelText);
    fireEvent.click(button);
    expect(button).toHaveClass('clicked');
  });
});
