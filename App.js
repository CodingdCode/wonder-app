import React from 'react';
import { Button } from 'react-native';
import 'react-native-gesture-handler';
import Provider from './src/redux/provider';
import firebase from '@react-native-firebase/app';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomePage from './src/pages/HomePage';
import SignupScreen from './src/screens/SignupScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import IndexScreen from './src/screens/IndexScreen';

// tabs
import HomeScreen from './src/screens/HomeScreen';
import NotesScreen from './src/screens/NotesScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SearchScreen from './src/screens/SearchScreen';

// icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { signOutUser } from './src/redux/actions/authenticationActions';

const signOut = () => {
  firebase.auth().signOut();
};

const RootStack = createStackNavigator();
const authStack = createStackNavigator();
const functionalStack = createStackNavigator();
const Tab = createBottomTabNavigator();

// const authStackScreens = ()=>
//     <authStack.Navigator >
//       {/* <authStack.Screen name="Loading" component={LoadingScreen} /> */}
//       <authStack.Screen name="Auth" component={AuthScreen} options={
//         {
//           headerTitle:'',
//         }
//       }/>
//     </authStack.Navigator>
// ;

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

const options = {};

const HomeScreenTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Ionicons name="home-outline" size={30} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: () => <Ionicons name="search-outline" size={30} />,
        }}
      />
      <Tab.Screen
        name="Notes"
        component={NotesScreen}
        options={{
          tabBarIcon: () => <FontAwesome name="sticky-note-o" size={30} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <FontAwesome name="user-o" size={30} />,
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Index">
          <RootStack.Screen
            name="Index"
            component={IndexScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="signup"
            component={SignupScreen}
            options={{
              headerTitle: '',
              headerShown: false,
            }}
          />
          <RootStack.Screen
            name="App"
            children={HomeScreenTabs}
            options={(props) => ({
              headerRight: () => (
                <Button
                  onPress={() => signOutUser(props.navigation)()}
                  title="Sign Out"
                />
              ),
              headerLeft: () => (
                <Button
                  onPress={() =>
                    alert("Don't click this area I'm trying to do away with it")
                  }
                  title=""
                />
              ),
            })}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
