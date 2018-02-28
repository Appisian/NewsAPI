import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, navigate, goBack, displayBack, displaySearch } = this.props;
    return (
      <View style={styles.navBar}>
        <View style={styles.statusBar} />
        <View style={styles.textBarView}>
          <View style={styles.sideNav}>
            {displayBack ? (
              <TouchableOpacity onPress={() => goBack()}>
                <Icon style={styles.icons} name="arrow-back" size={24} />
              </TouchableOpacity>
            ) : null}
          </View>
          <Text style={styles.textBar}>{title}</Text>
          <View style={styles.sideNav}>
            {displaySearch ? (
              <Icon style={styles.icons} name="search" size={24} />
            ) : null}
          </View>
        </View>
        <View style={styles.colorBottomBar} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    height: 20,
    backgroundColor: "#fff",
  },
  navBar: {
    backgroundColor: "#fff",
    elevation: 3,
    height: 80,
  },
  textBarView: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  textBar: {
    color: "#4F4F4F",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 12,
    fontWeight: "700",
  },
  colorBottomBar: {
    backgroundColor: "#FC6535",
    height: 2,
  },
  sideNav: {
    width: 24,
    marginHorizontal: 10,
  },
  icons: {
    color: "#4F4F4F",
  },
});
