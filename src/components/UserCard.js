import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { COLORS } from '../styles/theme';

const screenWidth = Dimensions.get('window').width;

const UserCard = (props) => {
  const { name, company, isFave, imageURL } = props.userInfo;
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate('UserProfile', { userInfo: props.userInfo });
      }}>
      <View style={styles.userCard}>
        <View style={styles.parallelogramContainer}>
          <ImageBackground
            source={{ uri: imageURL }}
            style={styles.profilePicture}></ImageBackground>
        </View>

        <View style={[styles.userInfoContainer, styles.parallelogramContainer]}>
          <View style={styles.userInfoContainer}>
            <Text>{name}</Text>
            <Text>{company.name}</Text>
            <TouchableOpacity
              onPress={() => console.log('FAVE BUTTON WAS PRESSED')}
              style={[isFave ? styles.fave : styles.notFave, styles.button]}>
              <Text style={{ color: COLORS.white }}>
                {isFave ? 'FAVED' : 'FAVE'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  userCard: {
    borderColor: 'red',
    borderWidth: 5,
    marginBottom: 5,
    backgroundColor: 'rgba(30,30,30,0.4)',
    flexDirection: 'row',
    width: screenWidth,
    marginVertical: 3,
  },
  parallelogramContainer: {
    transform: [{ skewX: '-10deg' }],
    left: -20,
    height: 150,
    width: 160,
    overflow: 'hidden',
  },
  profilePicture: {
    flex: 1,
    transform: [{ skewX: '10deg' }],
    justifyContent: 'flex-end',
    resizeMode: 'cover', // or 'stretch'

    aspectRatio: 1.2,
  },
  userInfoContainer: {
    borderColor: 'red',
    borderWidth: 2,
    // transform: [{ skewX: '10deg' }],
    flex: 1,
    justifyContent: 'flex-start',
  },
  button: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 100,
    borderColor: COLORS.white,
    borderWidth: 2,
    marginVertical: 10,
  },
  fave: {
    backgroundColor: COLORS.primary,
  },
  notFave: {
    backgroundColor: 'rgb(184, 184, 184)',
  },
});

export default UserCard;
