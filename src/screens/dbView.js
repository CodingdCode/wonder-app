import React, {Component} from 'react';


import firestore from '@react-native-firebase/firestore';


class AllDb extends Component {


    users=firestore().collection('users').get().then(querySnapshot => {
        console.log('Total users: ', querySnapshot.size);
    
        querySnapshot.forEach(documentSnapshot => {
          console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
        });
      });

    render(){
        return console.log('users');
    }
}

export default AllDb;