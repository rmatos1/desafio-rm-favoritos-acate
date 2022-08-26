import { StatusBar } from 'expo-status-bar';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';

import CharactersList from './src/views/charactersList';

import store from './src/store';

import client from './src/services';

export default function App() {
  return (
    <ApolloProvider client={client}>

      <Provider store={store}>
      
        <CharactersList />

        <StatusBar style="dark" />
        
      </Provider>

    </ApolloProvider>
  );
}

