import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Card = ({ children, style }) => (
  <View style={[styles.card, style]}>{children}</View>
)

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    alignSelf: 'stretch',
    flexDirection: 'column',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    }, 
    shadowOpacity: 0.29, 
    shadowRadius: 4.65,
    elevation: 7
  }
})