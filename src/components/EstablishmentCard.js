import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const EstablishmentCard = (props) => {
  const { name, city, isOpen, rating } = props.data;
  return (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate('EstablishmentScreen', {
          name: 'UPDATE ME WITH REAL DATA',
        })
      }>
      <View style={styles.card}>
        <Text>{name}</Text>
        <Text>{rating}</Text>
        <Text>{city}</Text>
        <Text>{isOpen ? 'OPEN' : 'CLOSED'}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    borderColor: 'red',
    borderWidth: 2,
    marginBottom: 5,
    backgroundColor: 'rgba(30,30,30,0.4)',
    flexDirection: 'column',
    width: '100%',
  },
});

export default EstablishmentCard;
