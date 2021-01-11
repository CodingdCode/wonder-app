import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import { COLORS, HEADING } from '../styles/theme';

const screenWidth = Dimensions.get('window').width;

const UserCard = (props) => {
  const { name, company, isFave, imageURL } = props.userInfo;
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate('UserProfile', { userInfo: props.userInfo });
      }}>
      <View style={styles.userCard}>
        <ImageBackground
          style={{ width: screenWidth, flexDirection: 'row' }}
          imageStyle={{
            resizeMode: 'cover',
            opacity: 0.6,
          }}
          source={{
            uri:
              'https://buffer.com/resources/content/images/wp-content/uploads/2018/03/nafinia-putra-59655-unsplash.jpg',
          }}>
          <View style={styles.parallelogramContainer}>
            <ImageBackground
              source={{ uri: imageURL }}
              style={styles.profilePicture}></ImageBackground>
          </View>
          <View style={styles.userInfoContainer}>
            <Text style={[HEADING.heading1, styles.name, styles.textWhite]}>
              {name}
            </Text>
            <Text style={[styles.location, styles.textWhite]}>
              {company.name}
            </Text>
            <TouchableOpacity
              onPress={() => console.log('FAVE BUTTON WAS PRESSED')}
              style={[isFave ? styles.fave : styles.notFave, styles.button]}>
              <Text style={{ color: COLORS.white }}>
                {isFave ? 'FAVED' : 'FAVE'}
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  userCard: {
    backgroundColor: 'rgba(0,0,0,1)',
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
    overflow: 'hidden',
    flex: 1,
    width: screenWidth,
    justifyContent: 'flex-start',
    padding: 5,
  },
  button: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 100,
    borderColor: COLORS.white,
    borderWidth: 2,
    marginVertical: 5,
  },
  name: {
    letterSpacing: 1,
    marginBottom: 4,
  },
  location: {
    fontSize: 18,
  },
  fave: {
    backgroundColor: COLORS.primary,
  },
  notFave: {
    backgroundColor: 'rgb(184, 184, 184)',
  },
  textWhite: {
    color: COLORS.white,
  },
});

export default UserCard;
