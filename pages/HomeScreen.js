import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import Header from '../components/common/Header';
import ArticleList from '../components/common/ArticleList';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#212121',
    },
    headerTitleStyle: {
      color: '#fff',
    }
  };  

  constructor() {
    super();
  }

  render() {
    const { navigate, goBack } = this.props.navigation;

    return (
      <View style={styles.mainBackground}>
        <Header title="LATEST NEWS" navigate={navigate} goBack={goBack} displaySearch={true}></Header>
        <View style={styles.wrapper}>
          <ArticleList navigate={navigate} goBack={goBack}></ArticleList> 
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainBackground: {
    flex: 1,
    backgroundColor: '#DEDEDE',
    flexDirection: 'column',
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 10,
    overflow: 'visible',
  }
})