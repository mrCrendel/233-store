import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from '../../configs/routes';
import Layout from './Layout';

const App = () => (
  <Switch>
    <Layout>
      {routes && routes.map((item, index) => (
        <Route
          key={index}
          {...item}
        />
      ))}
    </Layout>
  </Switch>
);

export default App;
