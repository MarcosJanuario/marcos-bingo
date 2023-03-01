import React, { useContext, useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import PlayersProvider from './store/Players/PlayersProvider';
import GameRoomPage from './pages/GameRoomPage/GameRoomPage';
import DrawProvider from './store/Draw/DrawProvider';
import DrawContext from './store/Draw/DrawContext';

const App = () => {
  const drawCtx = useContext(DrawContext);

  useEffect(() => {
    if (drawCtx.numbers.length === 0) {
      drawCtx.reset();
    }
  }, []);

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
