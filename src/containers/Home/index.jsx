import React from 'react';
import Box from '../../components/Box';
import ProductsList from './components/ProductsList';

const Main = () => (
  <div className="home">
    <div className="container home__container">
      <Box />
      <ProductsList />
    </div>
  </div>
);

export default Main;
