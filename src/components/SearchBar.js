import React from 'react';
import { View, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SearchBar = () => {
  return (
    <View>
      <FontAwesome name="search" size={24} />
      <TextInput placeholder="Search a shop near me" />
    </View>
  );
};

export default SearchBar;
