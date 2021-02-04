import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { NavigationEvents } from 'react-navigation';

const userCollection=firestore().collection("users");

export const login = async ({ email, password }) => {
  try {
    await firebase()
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userData) => userData);
    return userInfo;
  } catch (err) {
    throw Error("Are you a member? Something doesn't seem to add up");
    // alert("Are you a member? Something doesn't seem to add up");
    // return err;
  }
};

export const signUp = async ({ email, password, firstName, lastName }) => {
  
  await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
  
  const write=await userCollection.add({
    email: `${email}`,
    firstName: `${firstName}`,
    lastName: `${lastName}`
  })
  .then((resp) => {
    console.log('User added!');
    const newDoc=userCollection.doc(`${resp.id}`);
    
    newDoc.get().then(documentSnapshot => {
  
      if (documentSnapshot.exists) {
        return documentSnapshot.data();
      }
    })
  })
  .catch((err) => {
    console.log(err);
  });

};

export const signUpUser = async ({ email, password, firstName, lastName }) => {
  const userCred = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
  await userCred.user.updateProfile({
    displayName: `${firstName}+${lastName}`,
  });
  await userCred.user.sendEmailVerification();
  return await firebase.auth().signOut();
};

export const signOut = async () => {
  try {
    await firebase.auth().signOut();
    return true;
  } catch (err) {
    alert(err);
    console.log(err);
  }
};

export function updateAuth(authStateChanged) {
  firebase.auth().onAuthStateChanged((user) => {
    authStateChanged(user);
  });
}

export function subscribeToAuthChanges() {
  firebase.auth().onAuthStateChanged((user) => {
    console.log(user);
    return user;
  });
}
