import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const EstablishmentScreen = (props) => {
  return (
    <View style={styles.center}>
      <Text>SHOW ESTABLISHMENT INFO HERE</Text>
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
