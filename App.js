import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import firebase from 'firebase';

import HomeScreen from './pages/HomeScreen';
import Article from './pages/Article';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Search from './pages/Search';

export default class App extends React.Component {
  
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyD_yG_MbEFKw8vuLg3Tub1VWW_-1KP6YIA",
      authDomain: "newsapi-7e4db.firebaseapp.com",
      databaseURL: "https://newsapi-7e4db.firebaseio.com",
      projectId: "newsapi-7e4db",
      storageBucket: "newsapi-7e4db.appspot.com",
      messagingSenderId: "291274045831"
    });
  }

  render() {
    return (
      <View style={styles.mainBackground}>
        <MyScreens />
      </View>
    );
  }
}

const MyScreens = StackNavigator(
  {
    Home: { screen: HomeScreen },
    SignUp: { screen: SignUp },
    ArticleList: { screen: HomeScreen },
    Article: { screen: Article },
    Search: {screen: Search},
  },
  {
    navigationOptions: {
      header: null,
    }
  }
);

const styles = StyleSheet.create({
  mainBackground: {
    flex: 1,
    backgroundColor: '#FFF',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  }
})