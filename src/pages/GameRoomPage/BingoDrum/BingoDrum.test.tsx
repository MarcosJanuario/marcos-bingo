import React from 'react';
import { render } from '@testing-library/react';
import BingoDrum from './BingoDrum';
import { BrowserRouter } from 'react-router-dom';

describe('BingoDrum', () => {
  it('renders the DrumLottery and DrawnNumbers components', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <BingoDrum />
      </BrowserRouter>
    );
    expect(getByTestId('drum-lottery')).toBeInTheDocument();
    expect(getByTestId('drawn-numbers')).toBeInTheDocument();
  });
});
