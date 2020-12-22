import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserCard = (props) => {
  const { name, company, isFave } = props.userInfo;
  return (
    <View style={styles.debuggerBorder}>
      <Text>{name}</Text>
      <Text>{company.name}</Text>
      <Text>is Faved: {`${isFave}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  debuggerBorder: {
    borderColor: 'red',
    borderWidth: 5,
    padding: 5,
    marginBottom: 5,
  },
});

export default UserCard;
