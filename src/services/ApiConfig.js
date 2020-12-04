import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import { NavigationEvents } from 'react-navigation';

export const login = ({ email, password }) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((value) => console.log(value))
        .then(() => console.log('Sign In Success!'));
        
}

export const signUp = async ({ email, password, fullName }) => {
    console.log('sign up great success', email,fullName);
    const userCred = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
    await userCred.user.updateProfile({
        displayName: fullName
    });

    return userCred
    // console.log(userCred);
    // await userCred.user.sendEmailVerification();
    // return await firebase.auth().signOut();
}

	// signUp().catch(err=>{console.log(err)});

export const signUpUser = async ({ email, password, firstName, lastName }) => {
    const userCred = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
    await userCred.user.updateProfile({
        displayName: `${firstName}+${lastName}`
    });
    await userCred.user.sendEmailVerification();
    return await firebase.auth().signOut();
}

	// signUpUser().catch(err=>{console.log(err)});

export const signOut = (onSignedOut) => {
    firebase.auth().signOut()
        .then(() => console.log('Signed Out Success'))
}

export function updateAuth(authStateChanged) {
    firebase.auth().onAuthStateChanged((user) => {
        authStateChanged(user);
    })
}

export function subscribeToAuthChanges() {
    firebase.auth().onAuthStateChanged((user) => {
        console.log(user);
        return user
    })
}