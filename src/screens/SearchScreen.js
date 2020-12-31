import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import EstablishmentCard from '../components/EstablishmentCard';
import { connect } from 'react-redux';

const SearchScreen = (props) => {
  const establishmentCardMarkup = props.establishmentsList.map(
    (establishment) => (
      <EstablishmentCard
        key={establishment.id}
        data={establishment}
        navigation={props.navigation}
      />
    ),
  );

  // const establishmentCardMarkup = [
  //   <EstablishmentCard establishmentInfo={''} navigation={props.navigation} />,
  //   <EstablishmentCard establishmentInfo={''} navigation={props.navigation} />,
  //   <EstablishmentCard establishmentInfo={''} navigation={props.navigation} />,
  //   <EstablishmentCard establishmentInfo={''} navigation={props.navigation} />,
  //   <EstablishmentCard establishmentInfo={''} navigation={props.navigation} />,
  //   <EstablishmentCard establishmentInfo={''} navigation={props.navigation} />,
  //   <EstablishmentCard establishmentInfo={''} navigation={props.navigation} />,
  //   <EstablishmentCard establishmentInfo={''} navigation={props.navigation} />,
  // ];
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

const mapStateToProps = (state) => {
  return {
    establishmentsList: state.establishmentsList,
  };
};

export default connect(mapStateToProps)(SearchScreen);
