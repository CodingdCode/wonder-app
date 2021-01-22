import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, Dimensions } from 'react-native';
import { registerUser } from '../redux/actions/authenticationActions';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../styles/theme';

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
      fullName: `${newAccountInfo.firstName} ${newAccountInfo.lastName}`,
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

        <TextInput
          style={styles.formInput}
          value={newAccountInfo.firstName || ''}
          onChangeText={(newValue) => handleTextChange('firstName', newValue)}
          placeholder="First name"
          autoCapitalize={false}
        />
        <TextInput
          style={styles.formInput}
          value={newAccountInfo.lastName || ''}
          onChangeText={(newValue) => handleTextChange('lastName', newValue)}
          placeholder="Last name"
          autoCapitalize={false}
        />
        <TextInput
          style={styles.formInput}
          value={newAccountInfo.email || ''}
          onChangeText={(newValue) => handleTextChange('email', newValue)}
          placeholder="Email"
          autoCapitalize={false}
        />

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
    width: 300,
    height: 50,
    fontSize: 25,
    borderColor: '#fff',
    fontWeight: '800',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  signupButton: {
    marginBottom: 16,
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
    color: COLORS.white,
  },
});

export default connect()(SignupScreen);
