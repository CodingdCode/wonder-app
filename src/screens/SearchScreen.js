import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import EstablishmentCard from '../components/EstablishmentCard';

const SearchScreen = (props) => {
  // const establishmentCardMarkup = props.usersList.map((user) => (
  //   <UserCard
  //     key={user.email}
  //     userInfo={user}
  //     navigation={props.navigation}
  //   />
  // ));

  const establishmentCardMarkup = [
    <EstablishmentCard establishmentInfo={''} navigation={props.navigation} />,
    <EstablishmentCard establishmentInfo={''} navigation={props.navigation} />,
    <EstablishmentCard establishmentInfo={''} navigation={props.navigation} />,
    <EstablishmentCard establishmentInfo={''} navigation={props.navigation} />,
    <EstablishmentCard establishmentInfo={''} navigation={props.navigation} />,
    <EstablishmentCard establishmentInfo={''} navigation={props.navigation} />,
    <EstablishmentCard establishmentInfo={''} navigation={props.navigation} />,
    <EstablishmentCard establishmentInfo={''} navigation={props.navigation} />,
  ];
  return (
    <View style={styles.center}>
      <ScrollView>{establishmentCardMarkup}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
  },
});

export default SearchScreen;
