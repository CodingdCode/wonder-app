import React, { useEffect } from 'react'
import { StyleSheet, Text, ActivityIndicator } from 'react-native'
import Center from '../../../src/components/Center'
import firebase from '@react-native-firebase/app'

export default function LoadingScreen({navigation}) {

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
                navigation.navigate(user ? 'Auth' : 'Auth')
        })
    }, [])
    
    return (
        <Center>
            <Text>Loading...</Text>
            <ActivityIndicator size='large'></ActivityIndicator>
        </Center>
    )
}

const styles = StyleSheet.create({

})
