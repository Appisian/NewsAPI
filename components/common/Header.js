import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    }
  }

  _fetchDataSearch = () => {
    this.props.onSearch(this.state.text);
  }

  render() {
    const {title, navigate, goBack, displayBack, displaySearch, displayInput, otherBottomBarColor, textInput } = this.props;
    return (
      <View style={styles.navBar}>
        <View style={styles.statusBar}></View>
        <View style={styles.textBarView}>
          <View style={styles.sideNav}>
          {
              displayBack ? <TouchableOpacity onPress={() => goBack()}><Icon style={styles.icons} name="arrow-back" size={24} /></TouchableOpacity>: null
          }
          </View> 
          {
            !displayInput ? <Text style={styles.textBar}>{title}</Text>: <TextInput style={styles.textInput} placeholder="SEARCH" placeholderTextColor="#E0E0E0" onSubmitEditing={this._fetchDataSearch} onChangeText={(text) => this.setState({text})} returnKeyType="search" />
          }
          <View style={styles.sideNav}>
          {
            displaySearch ? <TouchableOpacity onPress={() => {!otherBottomBarColor ? navigate('Search') : this._fetchDataSearch }}><Icon style={ !otherBottomBarColor ? styles.icons : {color: otherBottomBarColor}} name="search" size={24} /></TouchableOpacity>: null
          }
          </View>
        </View>
        <View style={!otherBottomBarColor ? styles.colorBottomBar : {backgroundColor: otherBottomBarColor, height: 2}}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    height: 20,
    backgroundColor: '#fff',
  },
  navBar: {
    backgroundColor: '#fff',
    elevation: 3,
    height: 80,
  },
  textBarView: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textBar: {
    color: '#4F4F4F',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 12,
    fontWeight: '700',    
  },
  colorBottomBar: {
    backgroundColor: '#FC6535',
    height: 2,
  },
  sideNav: {
    width: 24,
    marginHorizontal: 10,
  },
  icons: {
    color: '#4F4F4F',
  },
  textInput: {
    fontSize: 12,
    lineHeight: 14,
    flex: 1,
    textAlign: 'center',
    fontWeight: '700',
  },
})