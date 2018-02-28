import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/common/Header';

export default class Article extends React.Component {

  static navigationOptions = {
    title: 'Article',
  };  

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.mainBackground}>
        <Header title={this.props.navigation.state.params.title}></Header>
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
})