import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, Button } from 'react-native';
import { registerUser } from '../redux/actions/authenticationActions';
import { connect } from 'react-redux';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-community/google-signin';
// import AuthForm from '../pages/AuthForm'
import { login, signUp, updateAuth } from '../services/ApiConfig';
const SignupScreen = (props) => {
  const { navigation, dispatch } = props;
  const [newAccountInfo, setNewAccountInfo] = useState({});
  const [errors, setErrors] = useState(null);

  const handleSubmit = () => {
    const newUser = {
      email: newAccountInfo.email,
      password: newAccountInfo.password,
      fullName: `${newAccountInfo.firstName} ${newAccountInfo.lastName}`,
    };
    dispatch(registerUser(navigation, newAccountInfo));
    setNewAccountInfo({});
  };

  const handleTextChange = (name, value) => {
    setNewAccountInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  // componentDidMount() {
  //   updateAuth(this.onAuthStateChanged)
  // }

  // onAuthStateChanged = (user) => {
  //   if (user !== null) {
  //     // console.log(user);
  //     this.props.navigation.navigate("App")//, {client:user});
  //   }
  // }

  // switchAuthMode = () => {
  //   this.setState(prevState => ({
  //     authMode: prevState.authMode === 'login' ? 'signup' : 'login'
  //   }));
  // }

  return (
    // <AuthForm
    //   login={login}
    //   signup={signUp}
    //   authMode={this.state.authMode}
    //   switchAuthMode={this.switchAuthMode}
    // />
    <View style={styles.container}>
      <Text h2 style={styles.header}>
        SIGNUP
      </Text>
      {/* {props.authMode === 'signup' ? fullNameInput : null} */}

      <TextInput
        style={styles.formInput}
        value={newAccountInfo.firstName || ''}
        onChangeText={(newValue) => handleTextChange('firstName', newValue)}
        placeholder="First name"
        // autoCapitalize={false}
      />
      <TextInput
        style={styles.formInput}
        value={newAccountInfo.lastName || ''}
        onChangeText={(newValue) => handleTextChange('lastName', newValue)}
        placeholder="Last name"
        // autoCapitalize={false}
      />
      <TextInput
        style={styles.formInput}
        value={newAccountInfo.email || ''}
        onChangeText={(newValue) => handleTextChange('email', newValue)}
        placeholder="Email"
        autoCapitalize={false}
      />

      {/* <Text style={styles.validationText}> {props.errors.email}</Text> */}
      <TextInput
        style={styles.formInput}
        secureTextEntry
        value={newAccountInfo.password || ''}
        onChangeText={(newValue) => handleTextChange('password', newValue)}
        placeholder="Password"
        autoCapitalize={false}
      />
      <TextInput
        style={styles.formInput}
        secureTextEntry
        value={newAccountInfo.confirmPassword || ''}
        onChangeText={(newValue) =>
          handleTextChange('confirmPassword', newValue)
        }
        placeholder="Confirm Password"
        autoCapitalize={false}
      />

      {/* <Button 
                    // onPress={() => setsecureText(!secureText)} 
                    title="toggle"
                    buttonStyle={styles.loginButton}
                /> */}
      {/* <Text style={styles.validationText}> {props.errors.password}</Text> */}
      <Button
        onPress={handleSubmit}
        buttonStyle={styles.loginButton}
        title="Create Account"
        // title={props.authMode === 'login' ? 'Login' : 'Create Account'}
      />

      <Button
        color="black"
        onPress={() => navigation.pop()}
        title="<- BACK"
        // title={props.authMode === 'login' ? 'Create an Account' : 'Already a member?'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
    fontSize: 40,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#30EA8A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  validationText: {
    marginTop: 8,
    marginBottom: 16,
    color: 'red',
    alignSelf: 'center',
  },
  formInput: {
    width: 300,
    height: 50,
    fontSize: 25,
    borderColor: '#fff',
    fontWeight: '800',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  loginButton: {
    width: 200,
    marginBottom: 16,
    backgroundColor: '#30EA8A',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
  },
  switchButton: {
    width: 200,
    backgroundColor: '#30EA8A',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
  },
});

export default connect()(SignupScreen);
