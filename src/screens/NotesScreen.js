import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const NotesScreen = () => {
  return (
    <View style={styles.center}>
      <Text>NOTES SCREEN</Text>
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

export default NotesScreen;
