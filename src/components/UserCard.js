import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../styles/constants';

const UserCard = (props) => {
  const { name, company, isFave, imageURL } = props.userInfo;
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate('UserProfile', { userInfo: props.userInfo });
        props.navigation.setParams({ profileName: name });
      }}>
      <View style={styles.userCard}>
        <View
          style={[
            styles.profilePictureContainer,
            styles.parallelogramContainer,
          ]}>
          <ImageBackground
            source={{ uri: imageURL }}
            style={styles.profilePicture}
          />
        </View>
        <View style={[styles.userInfoContainer, styles.parallelogramContainer]}>
          <View style={styles.userInfoContainer}>
            <Text>{name}</Text>
            <Text>{company.name}</Text>
            <TouchableOpacity
              onPress={() => console.log('FAVE BUTTON WAS PRESSED')}
              style={[isFave ? styles.fave : styles.notFave, styles.button]}>
              <Text style={{ color: 'white' }}>
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
    borderWidth: 2,
    marginBottom: 5,
    backgroundColor: 'rgba(30,30,30,0.4)',
    flexDirection: 'row',
  },
  parallelogramContainer: {
    transform: [{ skewX: '-10deg' }],
    left: -20,
  },
  profilePictureContainer: {
    overflow: 'hidden',
    backgroundColor: 'red',
    height: 150,
    width: 160,
  },
  profilePicture: {
    // transform: [{ skewX: '10deg' }],
    // flex: 1,
    // width: '100%',
    // justifyContent: 'flex-end',
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
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
    borderColor: 'white',
    borderWidth: 2,
    marginVertical: 10,
  },
  fave: {
    backgroundColor: PRIMARY_COLOR,
  },
  notFave: {
    backgroundColor: 'rgb(184, 184, 184)',
  },
});

export default UserCard;
