import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const EstablishmentScreen = () => {
  return (
    <View style={styles.center}>
      <Text>Establishment Info here</Text>
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

export default EstablishmentScreen;
