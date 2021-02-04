import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, Dimensions } from 'react-native';
import { registerUser } from '../redux/actions/authenticationActions';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../styles/theme';
import { Input } from 'react-native-elements';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const SignupScreen = (props) => {
  const { navigation, dispatch } = props;
  const [newAccountInfo, setNewAccountInfo] = useState({});
  const [errors, setErrors] = useState(null);

  const handleSubmit = () => {
    const newUser = {
      email: newAccountInfo.email,
      password: newAccountInfo.password,
      firstName: `${newAccountInfo.firstName}`, 
      lastName: `${newAccountInfo.lastName}`
    };
    dispatch(registerUser(navigation, newAccountInfo));
    setNewAccountInfo({});
  };

  const handleTextChange = (name, value) => {
    setNewAccountInfo((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <Text h2 style={styles.header}>
          SIGNUP
        </Text>

        <View
          style={{
            width: screenWidth - 60,
            textAlign: 'center',
          }}>
          <Input
            style={styles.formInput}
            value={newAccountInfo.firstName || ''}
            onChangeText={(newValue) => handleTextChange('firstName', newValue)}
            placeholder="First name"
            autoCapitalize={'none'}
            errorStyle={{ color: 'red' }}
            errorMessage={errors}
          />
          <Input
            style={styles.formInput}
            value={newAccountInfo.lastName || ''}
            onChangeText={(newValue) => handleTextChange('lastName', newValue)}
            placeholder="Last name"
            autoCapitalize={'none'}
            errorStyle={{ color: 'red' }}
            errorMessage={errors}
          />
          <Input
            style={styles.formInput}
            value={newAccountInfo.email || ''}
            onChangeText={(newValue) => handleTextChange('email', newValue)}
            placeholder="Email"
            autoCapitalize={'none'}
            errorStyle={{ color: 'red' }}
            errorMessage={errors}
          />

          <Input
            style={styles.formInput}
            secureTextEntry
            value={newAccountInfo.password || ''}
            onChangeText={(newValue) => handleTextChange('password', newValue)}
            placeholder="Password"
            autoCapitalize={'none'}
            errorStyle={{ color: 'red' }}
            errorMessage={errors}
          />
          <Input
            style={styles.formInput}
            secureTextEntry
            value={newAccountInfo.confirmPassword || ''}
            onChangeText={(newValue) =>
              handleTextChange('confirmPassword', newValue)
            }
            placeholder="Confirm Password"
            autoCapitalize={'none'}
            errorStyle={{ color: 'red' }}
            errorMessage={errors}
          />
        </View>

        <TouchableOpacity onPress={handleSubmit} style={styles.signupButton}>
          <Text style={styles.textWhite}>Create Account</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => navigation.pop()}
        title="<- BACK"
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          color: COLORS.black,
        }}>
        <Icon name="arrow-back-outline" size={24} />
        <Text style={{ fontSize: 16, paddingHorizontal: 10 }}>BACK</Text>
      </TouchableOpacity>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: screenHeight / 15,
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
  signupButton: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: screenWidth / 2,
    borderColor: 'white',
    marginVertical: 20,
  },
  switchButton: {
    width: 200,
    backgroundColor: '#30EA8A',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
  },
  textWhite: {
    // color: COLORS.secondary,
  },
});

export default connect()(SignupScreen);
