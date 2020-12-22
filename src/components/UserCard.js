import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const UserCard = (props) => {
  const { name, company, isFave, imageURL } = props.userInfo;
  return (
    <View style={styles.userCard}>
      <View>
        <Image source={{ uri: imageURL }} style={{ width: 100, height: 100 }} />
      </View>
      <View>
        <Text>{name}</Text>
        <Text>{company.name}</Text>
        <TouchableOpacity>
          <Text>{isFave ? 'FAVED' : 'fave'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userCard: {
    borderColor: 'red',
    borderWidth: 1,
    padding: 5,
    marginBottom: 5,
    backgroundColor: '#d6ffd8',
    flexDirection: 'row',
  },
});

export default UserCard;
