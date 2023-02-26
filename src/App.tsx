import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import PlayersProvider from './store/PlayersProvider';

const App = () => (
  <div className="App">
    <PlayersProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </PlayersProvider>
  </div>
);

export default App;
