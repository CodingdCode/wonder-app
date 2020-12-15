import React from "react";
import {View, Text, StyleSheet} from "react-native";
import { PRIMARY_COLOR } from "../styles/constants"

const IndexScreen  = () => {
    return <View style={styles.container}>
        <Text style={styles.textStyle}>INDEX SCREEN</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: PRIMARY_COLOR,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textStyle: {
        fontSize: 30,
        fontWeight: "bold"
    }
})

export default IndexScreen;