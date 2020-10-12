import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export const Button = ({ children, title, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
    {title ? <Text style={styles.text}>{title}</Text> : children}
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 6,
    paddingVertical: 10,
    marginHorizontal: 40
  },
  text: {
    textAlign: 'center'
  }
})
