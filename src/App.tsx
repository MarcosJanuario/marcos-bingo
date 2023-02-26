import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import BingoBoard from './components/BingoBoard/BingoBoard';
import MainPage from './pages/MainPage/MainPage';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        {/*TODO: will be removed, only testing*/}
        <Route path="bingoBoard" element={<BingoBoard />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
