import React from 'react';
import {Button} from 'react-native';
import 'react-native-gesture-handler';
import firebase from '@react-native-firebase/app';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './src/pages/HomePage';
import AuthScreen from './src/screens/AuthScreen';
import HomeScreen from './src/screens/HomeScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import IndexScreen from "./src/screens/IndexScreen";

const signOut = () => {
  firebase.auth().signOut()
};

const RootStack= createStackNavigator();
const authStack= createStackNavigator();
const functionalStack= createStackNavigator();

  const authStackScreens = ()=>
      <authStack.Navigator >
        <authStack.Screen name="Loading" component={LoadingScreen} />
        <authStack.Screen name="Auth" component={AuthScreen} options={
          {
            headerTitle:'',
          }
        }/>
        <authStack.Screen name="Index" component={IndexScreen} />
      </authStack.Navigator>
  ;

  // const functionalStackScreens=()=>(
  //     <functionalStack.Navigator screenOptions={{}}>
  //       <functionalStack.Screen name="Home" component={HomePage}/>
  //       {/* <functionalStack.Screen name="ToggleScreen" component={HomeScreen}/> */}
  //     </functionalStack.Navigator>
  // );
    
  // const settingsStackScreens=()=>(
  //     <Stack.Navigator>
  //       <Stack.Screen name="PlaceHolder" component={functionalStack}/>
  //       <Stack.Screen name="PlaceHolder" component={functionalStack}/>
  //     </Stack.Navigator>
  // );
  
  // const editStackScreens=()=>(
  //     <Stack.Navigator>
  //       <Stack.Screen name="PlaceHolder" component={functionalStack}/>
  //       <Stack.Screen name="PlaceHolder" component={functionalStack}/>
  //     </Stack.Navigator>
  // );
          
  const options={};
              
const  App = () => {
  return (
  <NavigationContainer>
    <RootStack.Navigator initialRouteName="Index">
      <RootStack.Screen name="Authentication" component={authStackScreens} options={
        {
          headerTitle:'',
        }}/>
      <RootStack.Screen name="App" component={HomePage} options={
        {
          headerRight:()=>(
            <Button
            onPress={signOut}
            title="Sign Out"
            />),
          headerLeft:()=>(
            <Button
              onPress={()=>alert("Don't click this area I'm trying to do away with it")}
              title=""
            />)
        }
      }/>
      <RootStack.Screen name="Index" component={IndexScreen} options={{headerShown: false}}/>
    </RootStack.Navigator>
  </NavigationContainer>  
  );
}

export default App;