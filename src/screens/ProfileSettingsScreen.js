import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { HEADING } from '../styles/theme';
import { signOutUser } from '../redux/actions/authenticationActions';

const ProfileSettingsScreen = (props) => {
  useEffect(() => {
    props.navigation.setOptions({
      headerTitle: (
        <Text style={HEADING.heading1}>
          {props.authenticatedUser.userData.user.email}
        </Text>
      ),
    });
  }, []);

  return (
    <View style={styles.center}>
      <Text>PROFILE SETTINGS HERE</Text>
      <Button
        onPress={() => signOutUser(props.navigation)()}
        title="Sign Out"
      />
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
