import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    const {title} = this.props;
    return (
      <View style={styles.navBar}>
        <View style={styles.statusBar}></View>
        <View style={styles.textBarView}>
          <Text style={styles.textBar}>{title}</Text>
        </View>
        <View style={styles.colorBottomBar}></View>
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
    justifyContent: 'center',
    alignItems: 'center',
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
  }
})