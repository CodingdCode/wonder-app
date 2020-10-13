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

const signOut = () => {
  firebase.auth().signOut()
};
const RootStack= createStackNavigator();
const authStack= createStackNavigator();
const functionalStack= createStackNavigator();

  const authStackScreens=()=>(
      <authStack.Navigator>
        <authStack.Screen name="Loading" component={LoadingScreen} />
        <authStack.Screen name="Auth" component={AuthScreen} />
      </authStack.Navigator>
  );

  const functionalStackScreens=()=>(
      <functionalStack.Navigator>
        <functionalStack.Screen name="Home" component={HomePage}/>
        {/* <functionalStack.Screen name="ToggleScreen" component={HomeScreen}/> */}
      </functionalStack.Navigator>
  );
    
  const settingsStackScreens=()=>(
      <Stack.Navigator>
        <Stack.Screen name="PlaceHolder" component={functionalStack}/>
        <Stack.Screen name="PlaceHolder" component={functionalStack}/>
      </Stack.Navigator>
  );
  
  const editStackScreens=()=>(
      <Stack.Navigator>
        <Stack.Screen name="PlaceHolder" component={functionalStack}/>
        <Stack.Screen name="PlaceHolder" component={functionalStack}/>
      </Stack.Navigator>
  );
          
  const options={};
              
export default function App() {
  return (
  <NavigationContainer>
    <RootStack.Navigator>
      <RootStack.Screen name="Auth" component={authStackScreens}/>
      <RootStack.Screen name="App" component={functionalStackScreens} options={{headerRight:()=>(<Button title="Sign Out" onPress={signOut}/>)}}/>
    </RootStack.Navigator>
  </NavigationContainer>  
  );
}

// export default NavigationContainer(MyStack);