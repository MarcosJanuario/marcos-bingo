import React from 'react';
import './BingoDrum.css';
import DrumLottery from './DrumLottery/DrumLottery';
import DrawnNumbers from './DrawnNumbers/DrawnNumbers';

const BingoDrum = (): JSX.Element => (
  <div className="bingo-drum-wrapper">
    <DrumLottery />
    <div className="spacer" />
    <DrawnNumbers />
  </div>
);

export default BingoDrum;
