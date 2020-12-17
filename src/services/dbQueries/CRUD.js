import React from 'react';
import firestore from '@react-native-firebase/firestore';
import {ListItem} from 'react-native-elements';
import {FlatList, Text, View} from 'react-native';


getList=()=>{
    const usersDb=firestore().collection('users').get();
    usersDb.then(querySnapshot => {
        const emailDb=[];
        
        querySnapshot.forEach(documentSnapshot => {
            emailDb.push(documentSnapshot.data());
        });
        
        return orderedList(emailDb);
    })
    .catch(err=>console.log(err));
};



orderedList=(arr)=>{
    return (
        <View>
            {
                arr.map((item, i) => (
                    <ListItem key={i} bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>{item.email}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                ))
            }
        </View>
    )
};

// CRUD operations starts below
let create=(d)=>{
    
    activeUsers.add(d).then(documentReference => {
        console.log(`Added document with name: ${documentReference.id}`)
    });
    
    return console.log('True');
};

let readOne=(d)=>{
    
    activeUsers.where('email','==', d).get().then(querySnapshot => {
        console.log('Total users: ', querySnapshot.size);
        
        querySnapshot.forEach(documentSnapshot => {
            console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
        });
    });
    return console.log('True');
};

let readAll=(d)=>{

    return(
        getList()
    )
};

let update=(d,obj)=>{

    activeUsers.doc(d).update(obj);
    return console.log('True');
};

let disable=(d)=>{

    activeUsers.doc(d).update({disabled: 'true'});
    return console.log('True');
};

const crud={
    create: create,
    readOne: readOne,
    readAll: readAll,
    update: update,
    delete: disable
};

export default crud;