import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import DrumLottery from './DrumLottery';

describe('DrumLottery', () => {
  it('renders correctly', () => {
    render(
      <BrowserRouter>
        <DrumLottery />
      </BrowserRouter>
    );
    expect(screen.getByText('Draw')).toBeInTheDocument();
  });

  it('disables the "Draw" button when there are no numbers', () => {
    const drawCtx = {
      numbers: [],
      draw: jest.fn(),
      reset: jest.fn()
    };
    render(
      <BrowserRouter>
        <DrumLottery />
      </BrowserRouter>
    );
    expect(screen.getByText('Draw')).toBeDisabled();
  });
});
