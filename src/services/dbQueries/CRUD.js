import React from 'react';
import firestore from '@react-native-firebase/firestore';

import {testing} from '../../../../firestoreSeedData/seed';

testing();

const usersDb = firestore().collection('users').get();
const emailDb = [];

usersDb.then((querySnapshot) => {
  querySnapshot.forEach((documentSnapshot) => {
    emailDb.push(documentSnapshot.data().email);
  });
});

let create = (d) => {
  // usersDb.add(d).then((documentReference) => {
  //   console.log(`Added document with name: ${documentReference.id}`);
  // });

  return console.log('True');
};

let readOne = (d) => {
  activeUsers
    .where('email', '==', d)
    .get()
    .then((querySnapshot) => {
      console.log('Total users: ', querySnapshot.size);

      querySnapshot.forEach((documentSnapshot) => {
        console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
      });
    });
  return console.log('True');
};

let readAll = (d) => {
  if (emailDb.indexOf(d) === -1) {
    alert(
      "ATTENTION, your account was not located. In order to interact, you'd have to create one",
    );
    return emailDb;
  } else {
    return emailDb;
  }
};

let update = (d, obj) => {
  activeUsers.doc(d).update(obj);
  return console.log('True');
};

let disable = (d) => {
  activeUsers.doc(d).update({ disabled: 'true' });
  return console.log('True');
};

export const crud = {
  create: create,
  readOne: readOne,
  readAll: readAll,
  update: update,
  delete: disable,
};
// module.exports={
//   create: function create(){
//     console.log('here');
//   }
// };
// export default crud;
