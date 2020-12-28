import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const UserProfileScreen = ({ route }) => {
  const { name } = route.params.userInfo;

  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default UserProfileScreen;
