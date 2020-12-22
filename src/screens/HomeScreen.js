import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import UserCard from '../components/UserCard';

const HomeScreen = (props) => {
  const userCardMarkup = props.usersList.map((user) => (
    <UserCard key={user.email} userInfo={user} />
  ));
  return (
    <View style={styles.center}>
      <ScrollView>{userCardMarkup}</ScrollView>
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
    authenticatedUser: state.authenticatedUser,
    usersList: state.usersList,
  };
};

export default connect(mapStateToProps)(HomeScreen);
