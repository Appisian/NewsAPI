import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../components/common/Header';
import ArticleList from '../components/common/ArticleList';

class Everything extends React.Component {

  static navigationOptions = {
    title: 'Latest News',
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
          <ArticleList navigate={navigate} goBack={goBack} req={"https://newsapi.org/v2/everything?sources=google-news&apiKey=025f0aa223a443ce8b1ee55f41bff8a9&pageSize=10&page=${page}"}></ArticleList> 
        </View>
      </View>
    );
  }
}

class TopHeadlines extends React.Component {

  static navigationOptions = {
    title: 'Top Headlines',
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
        <Header title="TOP HEADLINES" navigate={navigate} goBack={goBack} displaySearch={true}></Header>
        <View style={styles.wrapper}>
          <ArticleList navigate={navigate} goBack={goBack} req={"https://newsapi.org/v2/top-headlines?country=us&apiKey=025f0aa223a443ce8b1ee55f41bff8a9"} noInfinite={true}></ArticleList> 
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

export default TabNavigator({
  Home: { screen: TopHeadlines },
  Everything: { screen: Everything },
}, {
  navigationOptions: ({navigation}) => ({
    tabBarIcon: ({focused, tintColor}) => {
      const { routeName } = navigation.state;
      let iconName;
      if( routeName === 'Home' ) {
        iconName = 'new-releases';
      } else if( routeName === 'Everything') {
        iconName = 'subject';
      }
      return <Icon name={iconName} size={25} color={tintColor} />;
    }
  }),
  tabBarOptions: {
    activeTintColor: '#FC6535',
    inactiveTintColor: 'gray',
    style: {
      backgroundColor: 'white',
      borderTopColor: '#FC6535',
      borderTopWidth: 1,
    }
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
});