import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import { loginUser } from '../redux/actions/authenticationActions';
import { connect } from 'react-redux';
import { COLORS } from '../styles/theme';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-community/google-signin';

const IndexScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(null);

  const { navigation, dispatch } = props;

  const handleLogin = async () => {
    try {
      await dispatch(loginUser(navigation, { email, password }));
      setEmail('');
      setPassword('');
    } catch (err) {
      alert('ERROR');
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Welcome Barista!</Text>
      <Text>
        We know only certain baristas can make your perfect cup of coffee, so
        sign up, follow your favorites, and know when to go!
      </Text>

      <TextInput
        style={styles.formInput}
        value={email}
        onChangeText={(newValue) => setEmail(newValue)}
        placeholder="Email"
        autoCapitalize={'none'}
      />

      {/* <Text style={styles.validationText}> {props.errors.email}</Text> */}
      <TextInput
        style={styles.formInput}
        secureTextEntry
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
        placeholder="Password"
        autoCapitalize={'none'}
      />

      <TouchableOpacity onPress={handleLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => onGoogleButtonPress()}
        // disabled={this.state.isSigninInProgress}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('signup');
        }}>
        <Text>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  header: {
    marginBottom: 60,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
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
    borderColor: COLORS.white,
    fontWeight: '800',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  loginButton: {
    width: 200,
    marginBottom: 16,
    backgroundColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.white,
  },
  switchButton: {
    width: 200,
    backgroundColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.white,
  },
});

const mapStateToProps = (state) => {
  return { word: state.word };
};
export default connect(mapStateToProps)(IndexScreen);
