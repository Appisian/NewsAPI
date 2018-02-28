import React from "react";
import { StyleSheet, Text, View, WebView } from "react-native";
import Header from "../components/common/Header";

export default class Article extends React.Component {
  static navigationOptions = {
    title: "Article",
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { navigate, goBack, state } = this.props.navigation;
    return (
      <View style={styles.mainBackground}>
        <Header
          title={state.params.title}
          navigate={navigate}
          goBack={goBack}
          displayBack={true}
        />
        <WebView source={{ uri: state.params.link }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainBackground: {
    flex: 1,
    backgroundColor: "#DEDEDE",
    flexDirection: "column",
  },
});
