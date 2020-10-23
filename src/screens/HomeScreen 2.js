import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Switch, Image} from 'react-native'
import Center from '../components/Center'
import { TouchableOpacity } from 'react-native-gesture-handler'
import firebase from '@react-native-firebase/app'
import { servicesArray } from '../assets/data'
import Carousel from 'react-native-snap-carousel'
import { Button } from '../components/Button'
import { Spinner } from '../components/Spinner'

export default function HomeScreen() {
    const [email, setEmail] = useState('')
    const [ isEnabled , setIsEnabled ] = useState(false)
    const [displayName, setdisplayName] = useState('')
    const [ index, setActiveIndex ] = useState(0)
    const [ isLoading, setFinished ] = useState(true)

    useEffect(() => {
        console.log('this is the user',firebase.auth().currentUser);
        const user = firebase.auth().currentUser
        const email = user.email
        const displayName = user.displayName
        setEmail(email)
        setdisplayName(displayName)
        setFinished(false)
    }, [email, displayName])

    const signOut = () => {
        firebase.auth().signOut()
    }

    const toggleSwitch = () => setIsEnabled(previousState => !previousState)
    // var baristaPic = require('../assets/coffee.png')
        renderItem = ({item,index}) => {
            return (
                <>
                    <View style={{
                        backgroundColor:'floralwhite',
                        borderRadius: 5,
                        height: 250,
                        padding: 50,
                        marginLeft: 25,
                        marginRight: 25,
                        marginTop: 25
                        }}>
                        <Text>{item.name}</Text>
                    </View>
                </>
            )
        }

    renderHome = () => {
        return (
        <Center>
            <Switch
            style={styles.switchStyle}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            />
        {isEnabled ?
        <>
            <Text style={styles.title}>Services</Text>
            
            <Carousel
                layout={'stack'}
                loop={true}
                layoutCardOffset={18}
                data={servicesArray}
                sliderWidth={300}
                itemWidth={300}
                renderItem={renderItem}
                lockScrollWhileSnapping={true}
                onSnapToItem={index => setActiveIndex({activeIndex: index})}
            />
        </>
        :
        <View style={styles.UserCard}>
            <Text style={styles.switchStyle}>Current User Email: {email}</Text>
            <Text style={styles.switchStyle}>Current Display Name: {displayName}</Text>
            <Button
            style={styles.switchStyle}
            onPress={signOut}
            title={'Sign Out'}
            />
        </View>
        }
    </Center>
        )
    }

    renderView = () => {

        if (isLoading) {
            return <Spinner />
        } else {
            return renderHome()
        }
    }
    
    return (
            renderView()
        )
    }
    const styles = StyleSheet.create({
        carouselImage: {
            width: 50,
            height: 50,
        },
        switchStyle: {
            marginTop: 20
        },
        title: {
            fontSize: 40,
            marginTop: 20
        },
        UserCard: {
            flex: 1,
            marginTop: 10,
            backgroundColor: 'floralwhite',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch'
        }
    })


    // LayoutAnimation.easeInEaseOut()
    // // console.log(displayName);
    // return (
    //     <Center>
    //         <Text>{email}</Text>
    //         <Text>{displayName}</Text>
    //         <TouchableOpacity onPress={signOut}>
    //             <Text>Sign Out</Text>
    //         </TouchableOpacity>
    //     </Center>
    // )

// const styles = StyleSheet.create({})

