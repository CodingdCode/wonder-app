import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const ProfileSettingsScreen = (props) => {
  useEffect(() => {
    props.navigation.setOptions({
      headerTitle: props.authenticatedUser.userData.user.email,
    });
  }, []);

  return (
    <View style={styles.center}>
      <Text>PROFILE SETTINGS HERE</Text>
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

export default connect(mapStateToProps)(ProfileSettingsScreen);
