import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, AsyncStorage } from 'react-native';
import firebase from 'firebase';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class SignUp extends React.Component {
  
  static navigationOptions = {
    title: 'Sign Up',
  };  

  constructor(props) {
    super(props);
    this.state = { email: '', password: '', error: '', loading: false };
  }

  _onLoginPress = () => {
    this.setState({ error: '', loading: true });

    const { email, password } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ error: '', loading: false });
        this._saveToLocalStore('@LocalStore:email', email);
        this._saveToLocalStore('@LocalStore:password', password);
        this.props.navigation.navigate('ArticleList');
      })
      .catch((e) => {
        this.setState({ error: 'Sign up failed.', loading: false});
        Alert.alert(
          this.state.error,
          e.message,
          [
            {text: 'OK'},
          ],
          { cancelable: false }
        )
      });
  }

  async _saveToLocalStore(key, value) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      // error message
    }
  }

  render() {
    const { navigate, goBack } = this.props.navigation;

    return (
      <View style={styles.mainBackground}>
        <View style={styles.backWrapper}>
          <TouchableOpacity onPress={() => goBack()}><Icon style={styles.icons} name="arrow-back" size={24} /></TouchableOpacity>
        </View>
        <View>
          <View style={styles.form}>
            <Text style={styles.label}>EMAIL</Text>
            <TextInput 
              style={styles.input} 
              keyboardType={"email-address"} 
              placeholder="stephen.smith@gmail.com" 
              placeholderTextColor="#000"
              onChangeText={email => this.setState({ email })}  
            ></TextInput>
            <Text style={styles.label}>PASSWORD</Text>
            <TextInput 
              style={styles.input} 
              placeholder="•••••••" 
              placeholderTextColor="#000" 
              secureTextEntry={true}
              onChangeText={password => this.setState({ password })}
            ></TextInput>

            <TouchableOpacity onPress={this._onLoginPress}>
              <View style={styles.signup}>
                <Text style={styles.textBtn}>SIGN UP</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => goBack()}>
              <View style={styles.connecWrapper}>
                <Text style={styles.textConnec}>Already have an account ?</Text>
                <Text style={[styles.textConnec, {fontWeight: '700'}]}> Sign in</Text>
              </View>
            </TouchableOpacity>

          </View>
        </View>
        <View style={styles.bottomBar}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainBackground: {
    flex: 1,
    backgroundColor: '#FFF',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  form: {
    paddingHorizontal: 30,
  },
  label: {
    fontSize: 11,
    color: '#000',
    fontWeight: '500',
    marginTop: 24,
  },
  input: {
    lineHeight: 20,
    borderBottomColor: '#F0F0F0',
    borderBottomWidth: 1,
    fontSize: 16,
    paddingVertical: 11,
  },
  signup: {
    height: 60,
    backgroundColor: '#FC6535',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 128,
  },
  textBtn: {
    color: '#fff',
    fontSize: 12, 
    fontWeight: '700',
  },
  bottomBar: {
    backgroundColor: '#FC6535',
    height: 6,
  },
  connecWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
  },
  textConnec: {
    fontSize: 12,
    fontWeight: '500',
  },
  backWrapper: {
    position: 'absolute',
    top: 40,
    left: 10,
  }
})