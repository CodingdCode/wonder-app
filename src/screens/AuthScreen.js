import React, { Component } from 'react';
import {
    StyleSheet,
    View, 
    TextInput,
    Text, Button
} from 'react-native';
import {
    GoogleSignin,
    GoogleSigninButton
  } from '@react-native-community/google-signin';
// import AuthForm from '../pages/AuthForm'
import { login, signUp, updateAuth } from '../services/ApiConfig'
const AuthScreen = props => {

const { navigation } = props

  
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
                
                <Text h2 style={styles.header}>Welcome SIGUP!</Text>
                {/* {props.authMode === 'signup' ? fullNameInput : null} */}
                
                <TextInput
                    style={styles.formInput}
                    // onChangeText={text => props.setFieldValue('email', text)}
                    placeholder='Email'
                    // autoCapitalize={false}
                />

                {/* <Text style={styles.validationText}> {props.errors.email}</Text> */}
                <TextInput
                    style={styles.formInput}
                    // secureTextEntry={secureText}
                    // onChangeText={text => props.setFieldValue('password', text)}
                    placeholder='Password'
                    // autoCapitalize={false}
                />

                <Button 
                    // onPress={() => setsecureText(!secureText)} 
                    title="toggle"
                    buttonStyle={styles.loginButton}
                />
                {/* <Text style={styles.validationText}> {props.errors.password}</Text> */}
                <Button
                    // onPress={() => props.handleSubmit()}
                    buttonStyle={styles.loginButton}
                    title='Create Account'
                    // title={props.authMode === 'login' ? 'Login' : 'Create Account'} 
                />
                    
                <Button
                    color='black'
                    buttonStyle={styles.switchButton}
                    // onPress={() => props.switchAuthMode()}
                    title="CREATE"
                    // title={props.authMode === 'login' ? 'Create an Account' : 'Already a member?'} 
                />

                <GoogleSigninButton
                    style={{ width: 192, height: 48 }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark} 
                    onPress={()=> onGoogleButtonPress()}
                    // disabled={this.state.isSigninInProgress} 
                />

                
                <Button
                    color='black'
                    onPress={() => navigation.pop()}
                    title="<- GO BACK"
                    // title={props.authMode === 'login' ? 'Create an Account' : 'Already a member?'} 
                />
            </View>
      );
    
  }
  
  const styles = StyleSheet.create({
    header: {
        marginBottom: 60
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
        alignSelf: 'center'
        },
    formInput: {
        width: 300,
        height: 50,
        fontSize: 25,
        borderColor: '#fff',
        fontWeight: "800",
        borderWidth: 1,
        marginBottom: 16,
        padding: 8
        },
    loginButton: {
        width: 200,
        marginBottom: 16,
        backgroundColor: '#30EA8A',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white'
        },
    switchButton: {
        width: 200,
        backgroundColor: '#30EA8A',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white'
        }
});
  
  export default AuthScreen;
