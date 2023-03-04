import React from 'react';
import { render } from '@testing-library/react';
import GameTable from './GameTable';

describe('GameTable component', () => {
  it('renders a children element with the class "game-table-wrapper"', () => {
    const { getByTestId } = render(
      <GameTable>
        <div>Dumb content</div>
      </GameTable>
    );
    expect(getByTestId('game-table-wrapper')).toBeInTheDocument();
  });
});
