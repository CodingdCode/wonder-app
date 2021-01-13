import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/FontAwesome';
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
            <Stars
              default={rating}
              count={5}
              half={true}
              starSize={50}
              disabled
              fullStar={
                <Icon
                  name={'star'}
                  style={{ color: COLORS.white, marginVertical: 5 }}
                  size={18}
                />
              }
              emptyStar={
                <Icon
                  name={'star-o'}
                  style={{ color: 'transparent' }}
                  size={18}
                />
              }
              halfStar={
                <Icon
                  name={'star-half'}
                  style={{ color: COLORS.white, marginVertical: 5 }}
                  size={18}
                />
              }
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
