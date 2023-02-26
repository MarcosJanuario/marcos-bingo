import React from 'react';
import './BingoDrum.css';
import DrumLottery from './DrumLottery/DrumLottery';

const BingoDrum = (): JSX.Element => (
  <div className="bingo-drum-wrapper">
    <DrumLottery />
  </div>
);

export default BingoDrum;
