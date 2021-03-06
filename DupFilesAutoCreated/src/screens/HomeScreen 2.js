import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Center from '../../../src/components/Center'
import { TouchableOpacity } from 'react-native-gesture-handler'
import firebase from '@react-native-firebase/app'

export default function HomeScreen() {
    const [email, setEmail] = useState('')
    const [displayName, setDisplayName] = useState('')
    useEffect(() => {
        console.log(firebase.auth().currentUser);
        const { email, displayName } = firebase.auth().currentUser;
        setEmail(email)
        setDisplayName(displayName)
    }, [email, displayName])
    const signOut = () => {
        firebase.auth().signOut()
    }

    return (
        <Center>
            <Text>{email}</Text>
            <Text>{displayName}</Text>
            <TouchableOpacity onPress={signOut}>
                <Text>Sign Out</Text>
            </TouchableOpacity>
        </Center>
    )
}
const styles = StyleSheet.create({})

