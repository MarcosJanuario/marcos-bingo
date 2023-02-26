import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import PlayersProvider from './store/Players/Provider';

const App = () => {
  const bingoRouter = createBrowserRouter([
    {
      path: '/',
      element: <MainPage />
    }
  ]);
  return (
    <div className="App">
      <PlayersProvider>
        <RouterProvider router={bingoRouter} />
      </PlayersProvider>
    </div>
  );
};

export default App;
