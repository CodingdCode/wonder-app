import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Rating } from 'react-native-elements';

const EstablishmentCard = (props) => {
  const { name, city, isOpen, rating } = props.data;
  return (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate('EstablishmentScreen', {
          name: name,
        })
      }>
      <View style={styles.card}>
        <Text>{name}</Text>
        <TouchableOpacity>
          <Rating
            type="custom"
            readonly
            fractions={1}
            startingValue={rating}
            ratingBackgroundColor="transparent"
            tintColor="red"
          />
        </TouchableOpacity>

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
