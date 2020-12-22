import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileCard = () => {
  return (
    <View style={styles.debuggerBorder}>
      <Text>Profile Card</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  debuggerBorder: {
    borderColor: 'red',
    borderWidth: 5,
  },
});

export default ProfileCard;
