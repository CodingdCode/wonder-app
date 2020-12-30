import React from 'react';
import { Button, Text, TextInput } from 'react-native';
import 'react-native-gesture-handler';
import Provider from './src/redux/provider';
import firebase from '@react-native-firebase/app';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PRIMARY_COLOR, COLOR_BLACK } from './src/styles/constants';

import HomePage from './src/pages/HomePage';
import SignupScreen from './src/screens/SignupScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import IndexScreen from './src/screens/IndexScreen';
import UserProfileScreen from './src/screens/UserProfileScreen';

// tabs
import HomeScreen from './src/screens/HomeScreen';
import NotesScreen from './src/screens/NotesScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SearchScreen from './src/screens/SearchScreen';

// icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { signOutUser } from './src/redux/actions/authenticationActions';

// components
import DropdownHeaderMenu from './src/components/DropdownHeaderMenu';

const RootStack = createStackNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const homeStackScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="App"
        component={HomeScreen}
        options={(props) => ({
          headerRight: () => (
            <Button
              onPress={() => signOutUser(props.navigation)()}
              title="Sign Out"
            />
          ),
          headerLeft: null,
          headerTitle: () => <DropdownHeaderMenu />,
        })}
      />
    </Stack.Navigator>
  );
};

const searchStackScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={(props) => ({
          headerRight: null,
          headerLeft: null,
          headerTitle: () => (
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={(text) => console.log(text)}
              placeholder="Search Cofee Shop near me..."
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const notesStackScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Notes"
        component={NotesScreen}
        options={(props) => ({
          headerRight: null,
          headerLeft: null,
          headerTitle: <Text>NOTES</Text>,
        })}
      />
    </Stack.Navigator>
  );
};
const profileStackScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={(props) => ({
          headerRight: null,
          headerLeft: null,
          headerTitle: <Text>PROFILE</Text>,
        })}
      />
    </Stack.Navigator>
  );
};

const AppNav = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: PRIMARY_COLOR,
        inactiveTintColor: COLOR_BLACK,
      }}>
      <Tab.Screen
        name="Home"
        component={homeStackScreens}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                focused={focused}
                color={color}
                name="home-outline"
                size={size}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={searchStackScreens}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              focused={focused}
              color={color}
              name="search-outline"
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notes"
        component={notesStackScreens}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome
              focused={focused}
              color={color}
              name="sticky-note-o"
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={profileStackScreens}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome
              focused={focused}
              color={color}
              name="user-o"
              size={size}
            />
          ),
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
            name="Home"
            children={AppNav}
            options={{ headerShown: false }}
          />
          <RootStack.Screen name="UserProfile" children={UserProfileScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
