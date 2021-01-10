import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { Rating } from 'react-native-elements';
import { COLORS, HEADING } from '../styles/theme';

const EstablishmentCard = (props) => {
  const { name, city, isOpen, rating, imageUrl } = props.data;
  return (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate('EstablishmentScreen', {
          name: name,
        })
      }>
      <ImageBackground
        style={styles.backgroundImage}
        source={{ uri: imageUrl }}>
        <View style={styles.card}>
          <Text style={[styles.textWhite, HEADING.heading1, styles.name]}>
            {name}
          </Text>
          <TouchableOpacity>
            <Rating
              type="custom"
              readonly
              startingValue={rating}
              ratingBackgroundColor="transparent"
              ratingColor={COLORS.white}
              tintColor="red"
              imageSize={20}
              style={{
                marginVertical: 5,
              }}
            />
          </TouchableOpacity>
          <Text style={[styles.textWhite]}>{city}</Text>
          <Text style={[styles.textWhite]}>{isOpen ? 'OPEN' : 'CLOSED'}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(0,0,0,0.45)',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    padding: 15,
    overflow: 'hidden',
  },
  backgroundImage: {
    flex: 1,
    overflow: 'hidden',
    marginVertical: 2.5,
  },
  textWhite: {
    color: COLORS.white,
    fontWeight: '500',
    fontSize: 16,
  },
  name: {
    letterSpacing: 1,
  },
});

export default EstablishmentCard;
