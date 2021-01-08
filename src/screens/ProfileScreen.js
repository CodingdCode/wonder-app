import React, { useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { COLORS, HEADING } from '../styles/theme';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const ProfileScreen = (props) => {
  useEffect(() => {
    props.navigation.setOptions({
      headerTitle: (
        <Text style={HEADING.heading1}>
          {props.authenticatedUser.userData.user.email}
        </Text>
      ),
    });
  }, []);

  const { email } = props.authenticatedUser.userData.user;

  const faveMarkup = <Text>USERS FAVE LIST HERE</Text>; //users fave's list go here

  const emptyMarkupText = (
    <View style={styles.textContainer}>
      <Text style={styles.textPrimary}>You're all set!</Text>
      <Text style={styles.textSecondary}>
        Go favorite your professionals and they will show up here
      </Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.profilePictureContainer}>
        <ImageBackground
          source={{
            // uri:
            //   'https://img.freepik.com/free-photo/handsome-business-man-posing-front-view_23-2148336822.jpg?size=626&ext=jpg&ga=GA1.2.266340217.1602633600',
            uri:
              'https://azbigmedia.com/wp-content/uploads/2020/01/bartender.jpg',
          }}
          style={styles.profilePicture}
        />
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryText}>{'No Faves Yet'}</Text>
        </View>
      </View>
      <View style={styles.scrollContainer}>
        {!true ? (
          <ScrollView>
            <Text>USERS FAVE LIST HERE</Text>
          </ScrollView>
        ) : (
          emptyMarkupText
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profilePictureContainer: {
    width: screenWidth,
    maxHeight: screenHeight - 600,
    flex: 1,
  },
  profilePicture: {
    flex: 1,
  },
  summaryContainer: {
    backgroundColor: COLORS.secondary,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  summaryText: {
    color: COLORS.white,
    fontWeight: '700',
    letterSpacing: 1,
    fontSize: 18,
  },
  scrollContainer: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPrimary: {
    fontWeight: '900',
    fontSize: 30,
  },
  textSecondary: {
    letterSpacing: 2,
    textAlign: 'center',
    fontSize: 18,
    maxWidth: screenWidth - 90,
  },
});

const mapStateToProps = (state) => {
  return {
    authenticatedUser: state.authenticatedUser,
  };
};

export default connect(mapStateToProps)(ProfileScreen);
