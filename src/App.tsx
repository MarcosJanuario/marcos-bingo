import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import PlayersProvider from './store/Players/Provider';
import GameRoomPage from './pages/GameRoomPage/GameRoomPage';
import DrawProvider from './store/Draw/Provider';

const App = () => {
  const bingoRouter = createBrowserRouter([
    {
      path: '/',
      element: <MainPage />
    },
    {
      path: '/game-room',
      element: <GameRoomPage />
    }
  ]);
  return (
    <div className="App">
      <PlayersProvider>
        <DrawProvider>
          <RouterProvider router={bingoRouter} />
        </DrawProvider>
      </PlayersProvider>
    </div>
  );
};

export default App;
