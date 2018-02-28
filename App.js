import React from "react";
import { StackNavigator } from "react-navigation";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AppRegistry,
  AppState,
} from "react-native";
import PushController from "./components/common/PushController";
import PushNotification from "react-native-push-notification";

import HomeScreen from "./pages/HomeScreen";
import Article from "./pages/Article";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    AppState.addEventListener("change", this.handleAppStateChange);
  }
  componentWillUnmount() {
    AppState.removeEventListener("change", this.handleAppStateChange);
  }
  handleAppStateChange = () => {
    if (AppState.currentState === "background") {
      PushNotification.localNotification({
        message: "Checkout the news !",
      });
    }
  };

  render() {
    return (
      <View style={styles.mainBackground}>
        <MyScreens />
        <PushController />
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
    },
  },
);

const styles = StyleSheet.create({
  mainBackground: {
    flex: 1,
    backgroundColor: "#FFF",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  fromWrapper: {},
  form: {
    paddingHorizontal: 30,
  },
  label: {
    fontSize: 11,
    color: "#000",
    fontWeight: "500",
    marginTop: 24,
  },
  input: {
    lineHeight: 20,
    borderBottomColor: "#F0F0F0",
    borderBottomWidth: 1,
    fontSize: 16,
    paddingVertical: 11,
  },
  signin: {
    height: 60,
    backgroundColor: "#FC6535",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginTop: 128,
  },
  textBtn: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
  },
  bottomBar: {
    backgroundColor: "#FC6535",
    height: 6,
  },
  connecWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 30,
  },
  textConnec: {
    fontSize: 12,
    fontWeight: "500",
  },
});
