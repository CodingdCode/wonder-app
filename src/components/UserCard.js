import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

const UserCard = (props) => {
  const { name, company, isFave, imageURL } = props.userInfo;
  return (
    <View style={styles.userCard}>
      <View
        style={[styles.profilePictureContainer, styles.parallelogramContainer]}>
        <ImageBackground
          source={{ uri: imageURL }}
          style={styles.profilePicture}
        />
      </View>
      <View style={[styles.userInfoContainer, styles.parallelogramContainer]}>
        <View style={styles.userInfoContainer}>
          <Text>{name}</Text>
          <Text>{company.name}</Text>
          <TouchableOpacity>
            <Text>{isFave ? 'FAVED' : 'fave'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userCard: {
    borderColor: 'red',
    borderWidth: 2,
    marginBottom: 5,
    backgroundColor: '#d6ffd8',
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
  },
});

export default UserCard;
