import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Button} from "react-native";
import { PRIMARY_COLOR } from "../styles/constants"

const IndexScreen  = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState(null);

    const {navigation} = props

    const handleLogin = () => {
        setEmail("");
        setPassword("");
        alert("HANDLE LOGIN HERE");
    }

    return <View style={styles.container}>
        <Text style={styles.textStyle}>Welcome Barista!</Text>
        <Text>We know only certain baristas can make your 
            perfect cup of coffee, so sign up, 
            follow your favorites, and know when to go!</Text>

                <TextInput
                    style={styles.formInput}
                    value={email}
                    onChangeText={newValue => setEmail(newValue)}
                    placeholder='Email'
                    autoCapitalize={false}
                />

                {/* <Text style={styles.validationText}> {props.errors.email}</Text> */}
                <TextInput
                    style={styles.formInput}
                    secureTextEntry
                    value={password}
                    onChangeText={newValue => setPassword(newValue)}
                    placeholder='Password'
                    autoCapitalize={false}
                />


        <TouchableOpacity onPress={handleLogin}><Text>Login</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate("signup")}}><Text>Sign up</Text></TouchableOpacity>
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
    },
    header: {
        marginBottom: 60
        },
    container: {
        flex: 1,
        backgroundColor: PRIMARY_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        },
    validationText: {
        marginTop: 8,
        marginBottom: 16,
        color: 'red',
        alignSelf: 'center'
        },
    formInput: {
        width: 300,
        height: 50,
        fontSize: 25,
        borderColor: '#fff',
        fontWeight: "800",
        borderWidth: 1,
        marginBottom: 16,
        padding: 8
        },
    loginButton: {
        width: 200,
        marginBottom: 16,
        backgroundColor: PRIMARY_COLOR,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white'
        },
    switchButton: {
        width: 200,
        backgroundColor: PRIMARY_COLOR,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white'
        }
});

export default IndexScreen;