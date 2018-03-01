import React from "react";
import { StackNavigator } from "react-navigation";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  AppState
} from "react-native";
import firebase from "firebase";
import PushNotification from "react-native-push-notification";

import PushController from "./components/common/PushController";
import HomeScreen from "./pages/HomeScreen";
import Article from "./pages/Article";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Search from "./pages/Search";

export default class App extends React.Component {
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
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyD_yG_MbEFKw8vuLg3Tub1VWW_-1KP6YIA",
      authDomain: "newsapi-7e4db.firebaseapp.com",
      databaseURL: "https://newsapi-7e4db.firebaseio.com",
      projectId: "newsapi-7e4db",
      storageBucket: "newsapi-7e4db.appspot.com",
      messagingSenderId: "291274045831",
    });
  }

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
    Home: { screen: SignIn },
    SignUp: { screen: SignUp },
    ArticleList: { screen: HomeScreen },
    Article: { screen: Article },
    Search: { screen: Search },
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
});
