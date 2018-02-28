import React from 'react';
import moment from 'moment';
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

import axios from 'axios';

export default class ArticleList extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      data: [],
      page: 1,
    }
  }

  async _getData() {
    const { page } = this.state;
    await axios.get(`https://newsapi.org/v2/everything?sources=google-news&apiKey=025f0aa223a443ce8b1ee55f41bff8a9&pageSize=10&page=${page}`)
    // await axios.get(`https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=025f0aa223a443ce8b1ee55f41bff8a9`)
      .then(response => {
        this.setState({
          data: page === 1 ? response.data.articles : [...this.state.data, ...response.data.articles],
          page: this.state.page += 1,
        });
      })
  }

  _timeFromNow = (string) => {
    const fromDate = new Date(string);
    const ago = moment(fromDate).fromNow();
    return ago;
  }

  _onPress = (item) => {
    console.warn('ma nanouille');
    // this._getData();
  }

  handleLoadMore = () => {
    this.setState({
      page: this.state.page + 1,
    }, () => {
      this._getData()
    })
  }

  render() {    
    const {navigate} = this.props;

    return (
        <FlatList
          style={{ paddingVertical: 20 }}
          data={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => 
          <TouchableOpacity
            onPress={() => navigate('Article', {title: item.title, link: 'ici lien de larticle complet'})}
          >
            <View style={styles.panel}>
              { item.urlToImage ?
                <View style={styles.imageWrapper}>
                  <Image style={styles.previewImage} source={{ uri : item.urlToImage }} />
                </View> : null }
              <View style={styles.textWrapper}>
                <Text numberOfLines={1} style={styles.articleTitle}>{item.title}</Text>
                <Text numberOfLines={2} style={styles.articleDescription}>{item.description}</Text>
                <Text style={styles.articleDateTime}>{this._timeFromNow(item.publishedAt)}</Text>
              </View>
            </View>
          </TouchableOpacity>
        }
        onEndReached={this.handleLoadMore}
        onEndReachedThreshold={1}
        />
    );
  }

  componentDidMount() {
    this._getData();
  }
}

const styles = StyleSheet.create({
  panel: {
    backgroundColor: "#fff",
    flex: 1,
    marginBottom: 20,
  },
  imageWrapper: {
    height: 126,
    overflow: 'hidden',
    backgroundColor: '#AAA'
  },
  previewImage: {
    height: 200,
    resizeMode: 'cover',
  },
  textWrapper: {
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  articleTitle: {
    fontSize: 20,
    color: '#262628',
  },
  articleDescription: {
    fontSize: 13,
    color: '#262628',
    fontWeight: '300',
    marginVertical: 10,
  },
  articleDateTime: {
    fontSize: 11,
    color: '#262628',
  }
})