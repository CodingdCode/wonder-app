import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { PRIMARY_COLOR } from "../styles/constants"

const IndexScreen  = () => {
    return <View style={styles.container}>
        <Text style={styles.textStyle}>Welcome Barista!</Text>
        <Text>We know only certain baristas can make your 
            perfect cup of coffee, so sign up, 
            follow your favorites, and know when to go!</Text>
        <TouchableOpacity><Text>Login</Text></TouchableOpacity>
        <TouchableOpacity><Text>Sign up</Text></TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: PRIMARY_COLOR,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    textStyle: {
        fontSize: 30,
        fontWeight: "bold"
    }
})

export default IndexScreen;