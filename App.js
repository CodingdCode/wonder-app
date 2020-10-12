import React from 'react';
import 'react-native-gesture-handler';
// import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
import { NavigationContainer, createSwitchNavigator } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './src/pages/HomePage';
import HomeScreen from './src/screens/HomeScreen';
import AuthScreen from './src/screens/AuthScreen';
import LoadingScreen from './src/screens/LoadingScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="App" component={HomePage} />
        <Stack.Screen name="ToggleScreen" component={HomeScreen} />
      </Stack.Navigator>  
    </NavigationContainer>  
    );
}


// const AppStack = createStackNavigator({
//   // Screens & Tabs to be added
  
//   Login: AuthScreen,
//   Landing: HomePage,

// });

// Auth Screen
const AuthStack = AuthScreen;

// App Container
// const App = createSwitchNavigator(
//   {
//     // Loading: LoadingScreen,
//     // Auth: AuthStack,
//     App: AppStack,
//   }, 
//   // {
//   //   initialRouteName: "Loading"
//   // }
// );

// export default NavigationContainer(MyStack);