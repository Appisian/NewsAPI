import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AppRegistry } from 'react-native';

import HomeScreen from './pages/HomeScreen';
import Article from './pages/Article';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export default class App extends React.Component {
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
    Article: { screen: Article },
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
  },
  fromWrapper: {
  },
  form: {
    paddingHorizontal: 30,
  },
  label: {
    fontSize: 11,
    color: '#000',
    fontWeight: '500',
    marginTop: 24,
  },
  input: {
    lineHeight: 20,
    borderBottomColor: '#F0F0F0',
    borderBottomWidth: 1,
    fontSize: 16,
    paddingVertical: 11,
  },
  signin: {
    height: 60,
    backgroundColor: '#FC6535',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 128,
  },
  textBtn: {
    color: '#fff',
    fontSize: 12, 
    fontWeight: '700',
  },
  bottomBar: {
    backgroundColor: '#FC6535',
    height: 6,
  },
  connecWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
  },
  textConnec: {
    fontSize: 12,
    fontWeight: '500',
  }
})