import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const ProfileScreen = (props) => {
  useEffect(() => {
    props.navigation.setOptions({
      headerTitle: props.authenticatedUser.userData.user.email,
    });
  }, []);

  const { email } = props.authenticatedUser.userData.user;

  return (
    <View style={styles.center}>
      <Text>HELLO {email}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    authenticatedUser: state.authenticatedUser,
  };
};

export default connect(mapStateToProps)(ProfileScreen);
