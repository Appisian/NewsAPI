import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './pages/HomeScreen';
import Article from './pages/Article';

const App = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Article: { screen: Article },
  },
  {
    navigationOptions: {
      header: null,
    }
  }
);

export default App;