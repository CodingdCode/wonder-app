import React from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'

export const Spinner = ({ size }) => (
  <ActivityIndicator
    style={styles.spinner}
    size={'large' || size}
    color={'#26a69a'}
  />
)

const styles = StyleSheet.create({
  spinner: {
    alignSelf: 'center',
    position: 'absolute',
    top: '40%'
  }
})