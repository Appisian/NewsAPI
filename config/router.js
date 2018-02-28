import React from 'react';
import { StackNavigator } from 'react-navigation';

export default StackNavigator({
  Home: {
    screen: HomeScreen,     
  },
  Article: {
    screen: ArticleScreen,    
  },
}, {
  navigationOptions: {
    
  }
});