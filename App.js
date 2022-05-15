/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import Home from './src/screens/Home';

import { ApolloProvider } from '@apollo/client';

import client from './src/service/index';

const App = () => {

  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
};

export default App;
