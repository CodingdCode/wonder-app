import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS, HEADING } from '../styles/theme';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const EstablishmentScreen = (props) => {
  const { name, city, isOpen, rating, imageUrl } = props.route.params.data;

  return (
    <View style={{ flex: 1 }}>
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
                  style={{ color: COLORS.white, marginVertical: 10 }}
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
                  style={{ color: COLORS.white, marginVertical: 10 }}
                  size={18}
                />
              }
            />
          </TouchableOpacity>
          <Text style={[styles.textWhite]}>{city}</Text>
          <Text style={[styles.textWhite]}>{isOpen ? 'OPEN' : 'CLOSED'}</Text>
        </View>
      </ImageBackground>
      <View style={styles.dateContainer}>
        <Text style={[styles.textWhite, { fontSize: 18, fontWeight: '700' }]}>
          SCHED HERE
        </Text>
      </View>
    </View>
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
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    overflow: 'hidden',
    maxHeight: screenHeight / 5,
  },
  textWhite: {
    color: COLORS.white,
    fontWeight: '500',
    fontSize: 16,
  },
  name: {
    letterSpacing: 1,
  },
  dateContainer: {
    backgroundColor: COLORS.secondary,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
});

export default EstablishmentScreen;
