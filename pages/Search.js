import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../components/common/Header';
import ArticleList from '../components/common/ArticleList';

export default class Search extends React.Component {

  static navigationOptions = {
    title: 'Search',
    headerStyle: {
      backgroundColor: '#212121',
    },
    headerTitleStyle: {
      color: '#fff',
    }
  };  

  constructor() {
    super();

    this.state = {
      text: '',
    }
  }

  _handleSearch = (text) => {
    this.setState({text});
    this.renderFlatList();
  }

  renderFlatList() {
    const { navigate, goBack } = this.props.navigation;
    const textInput = this.state.text;
    
    if(this.state.text && this.state.text.length > 4) {
      let req = `https://newsapi.org/v2/everything?q=${textInput}&apiKey=025f0aa223a443ce8b1ee55f41bff8a9`;
      return <View style={styles.wrapper}>
              <ArticleList navigate={navigate} goBack={goBack} req={req} key={textInput} otherBottomBarColor="#35D8FC"></ArticleList> 
            </View>
    }
    return <View style={styles.searchIndication}>
              <View style={styles.wrapperIndication}>
                <Icon name="search" size={70} style={{color: '#BDBDBD'}}  />
                <Text style={styles.textIndication}>Type keywords to search news</Text>
              </View>
            </View> 
  }

  render() {
    const { navigate, goBack } = this.props.navigation;

    return (
      <View style={styles.mainBackground}>
        <Header onSearch={this._handleSearch} title="LATEST NEWS" navigate={navigate} goBack={goBack} displayBack={true} displaySearch={true} displayInput={true} otherBottomBarColor="#35D8FC"></Header>
        {this.renderFlatList()}
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
  searchIndication: {
    // position: 'absolute',
    elevation: 1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperIndication: {
    width: 173,
    alignItems: 'center',    
  },
  wrapper: {
    paddingHorizontal: 10,
  },
  textIndication: {
    color: '#BDBDBD', 
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
  },
})
