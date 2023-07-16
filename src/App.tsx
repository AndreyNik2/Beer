import React, {FC} from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from './pages/SharedLayout';
import { BeerListPage } from './pages/BeerListPage';
import { BeerPage } from './pages/BeerPage';

export const  App:FC = () => {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
        <Route index element={<BeerListPage />} />
        <Route path='/beer/:beerID' element={<BeerPage />} />
        <Route path='/*' element={<h1>Page not found...</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
