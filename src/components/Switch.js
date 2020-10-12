import React from 'react'
import { View, Switch, StyleSheet } from 'react-native'




export const SwitchButton = ({ toggleSwitch, value, thumbColor, trackColor}) => {
    return (
        <View style={styles.container}>
            <Switch
            trackColor={trackColor}
            thumbColor={thumbColor} // if state isEnabled is true switch to color #f5dd4b else #f4f3f4
            onValueChange={toggleSwitch}
            thumbColor={thumbColor}
            value={value}
            trackColor={trackColor}
            />
        </View>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1 
    }
})