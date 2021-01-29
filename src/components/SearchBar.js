import React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../styles/theme';

const screen = Dimensions.get('window');

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <FontAwesome style={styles.icon} name="search" size={24} />
      <TextInput
        style={styles.input}
        placeholder="Search a shop near me"
        onChangeText={(text) => console.log(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    width: screen.width - 40,
  },
  icon: {
    paddingLeft: 15,
    paddingRight: 10,
    color: COLORS.secondary,
  },

  input: {
    paddingVertical: 10,
    backgroundColor: COLORS.white,
    color: COLORS.secondary,
    width: '82%',
  },
});

export default SearchBar;
