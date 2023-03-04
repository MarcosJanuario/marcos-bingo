import React from 'react';
import { render } from '@testing-library/react';
import BingoPiece from './BingoPiece';

describe('BingoPiece', () => {
  const piece = 12;

  it('renders the bingo piece', () => {
    const { getByText } = render(<BingoPiece piece={piece} />);
    expect(getByText(piece.toString())).toBeInTheDocument();
  });

  it('sets color to the bingo piece', () => {
    const color = '#ff0000';
    const { queryByTestId } = render(<BingoPiece piece={piece} color={color} />);
    expect(queryByTestId('bingo-piece')).toHaveStyle(`background: ${color}`);
  });

  it('sets absolute class when abslute prop is passed as parameter', () => {
    const { queryByTestId } = render(<BingoPiece piece={piece} absolute />);
    expect(queryByTestId('bingo-piece')).toHaveClass('absolute');
  });
});
