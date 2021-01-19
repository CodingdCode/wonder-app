import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS } from '../styles/theme';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const UserCardWhite = (props) => {
  const { showTime } = props;
  const userInfoTestData = {
    name: 'Dominic Walters',
    imageURL:
      'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg',
    company: 'New York, New York',
    isFave: true,
  };
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate('UserProfile', {
          userInfo: userInfoTestData,
        });
      }}>
      <View style={styles.container}>
        {showTime && (
          <View style={styles.storeSchedule}>
            <Text style={styles.date}>8:00 AM</Text>
            <Text style={styles.date}>5:00 PM</Text>
          </View>
        )}
        <View style={styles.imageContainer}>
          <ImageBackground
            style={styles.image}
            source={{
              uri: userInfoTestData.imageURL,
            }}
          />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{userInfoTestData.name}</Text>
          <Text>{userInfoTestData.company}</Text>
          <TouchableOpacity
            onPress={() => console.log('HANDLE UNFAVE FROM PROFILE SECTION')}
            style={styles.button}>
            <Text>FAVED</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: 'rgba(195, 195, 195, 0.5)',
    borderBottomWidth: 1.5,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  imageContainer: {
    borderColor: COLORS.primary,
    borderWidth: 3,
    borderRadius: 150 / 2,
    width: 85,
    height: 85,
    overflow: 'hidden',
    marginRight: 20,
  },
  image: {
    flex: 1,
  },
  userInfo: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  userName: {
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 2,
    letterSpacing: 1,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 100,
    marginVertical: 5,
  },
  storeSchedule: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 15,
  },
  date: {
    color: COLORS.primary,
    fontSize: 14,
    fontWeight: '600',
  },
});

export default UserCardWhite;
