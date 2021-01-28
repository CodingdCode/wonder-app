import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { loginUser } from '../redux/actions/authenticationActions';
import { connect } from 'react-redux';
import { Input } from 'react-native-elements';
import { COLORS } from '../styles/theme';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-community/google-signin';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

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
      <Text style={styles.textStyle}>Welcome!</Text>
      <Text style={styles.subText}>
        We know only certain baristas can make your perfect cup of coffee, so
        sign up, follow your favorites, and know when to go!
      </Text>

      <View style={{ width: '80%', textAlign: 'center' }}>
        <Input
          style={styles.formInput}
          value={email}
          onChangeText={(newValue) => setEmail(newValue)}
          placeholder="Email"
          autoCapitalize={'none'}
          errorStyle={{ color: 'red' }}
          errorMessage={errors}
        />

        <Input
          style={styles.formInput}
          secureTextEntry
          value={password}
          onChangeText={(newValue) => setPassword(newValue)}
          placeholder="Password"
          autoCapitalize={'none'}
        />
      </View>

      <TouchableOpacity onPress={handleLogin} style={styles.transparentButton}>
        <Text style={styles.textWhite}>Login</Text>
      </TouchableOpacity>
      {/* <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => onGoogleButtonPress()}
        // disabled={this.state.isSigninInProgress}
      /> */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('signup');
        }}
        style={styles.transparentButton}>
        <Text style={styles.textWhite}>Sign up</Text>
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
  },
  textStyle: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  header: {
    marginBottom: 60,
  },
  subText: {
    maxWidth: '85%',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 40,
    lineHeight: 20,
    letterSpacing: 0.5,
  },
  validationText: {
    marginTop: 8,
    marginBottom: 16,
    color: 'red',
    alignSelf: 'center',
  },
  formInput: {
    fontSize: 18,
    fontWeight: '600',
    paddingHorizontal: 15,
  },
  transparentButton: {
    backgroundColor: 'transparent',
    width: screenWidth / 3,
    borderWidth: 1,
    borderRadius: screenWidth / 2,
    borderColor: 'white',
    marginVertical: 7,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
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
