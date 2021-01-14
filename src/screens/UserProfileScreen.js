import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { COLORS, HEADING } from '../styles/theme';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const UserProfileScreen = ({ route }) => {
  const { name, imageURL, company, isFave } = route.params.userInfo;
  return (
    <View style={styles.userCard}>
      <ImageBackground
        style={{
          width: screenWidth,
          flexDirection: 'row',
          backgroundColor: 'rgba(0,0,0,1)',
          width: screenWidth,
        }}
        imageStyle={{
          resizeMode: 'cover',
          opacity: 0.6,
        }}
        source={{
          uri: company.imageUrl,
        }}>
        <View style={styles.profilePictureContainer}>
          <ImageBackground
            source={{ uri: imageURL }}
            style={styles.profilePicture}></ImageBackground>
        </View>
        <View style={styles.userInfoContainer}>
          <Text style={[HEADING.heading2, styles.name, styles.textWhite]}>
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
      <View style={styles.dateContainer}>
        <Text style={[styles.textWhite, { fontSize: 18, fontWeight: '700' }]}>
          SCHED HERE
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profilePictureContainer: {
    transform: [{ skewX: '-5deg' }],
    left: -20,
    minHeight: screenHeight / 5,
    width: 180,
    overflow: 'hidden',
  },
  profilePicture: {
    flex: 1,
    transform: [{ skewX: '5deg' }],
    justifyContent: 'flex-end',
    resizeMode: 'cover',
    aspectRatio: 1.15,
  },
  userInfoContainer: {
    overflow: 'hidden',
    flex: 1,
    width: screenWidth,
    justifyContent: 'flex-end',
  },
  button: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 100,
    borderColor: COLORS.white,
    borderWidth: 2,
    marginVertical: 15,
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

  dateContainer: {
    backgroundColor: COLORS.secondary,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
});

export default UserProfileScreen;
