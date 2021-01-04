import React from 'react';
import 'react-native-gesture-handler';
import Provider from './src/redux/provider';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from './src/styles/theme';
import {
  homeStackScreens,
  profileStackScreens,
  searchStackScreens,
  notesStackScreens,
} from './src/screens/stacks';

import SignupScreen from './src/screens/SignupScreen';
import IndexScreen from './src/screens/IndexScreen';

// icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppTabScreens = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: COLORS.primary,
        inactiveTintColor: COLORS.black,
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
              headerShown: false,
            }}
          />
          <RootStack.Screen
            name="Home"
            children={AppTabScreens}
            options={{ headerShown: false }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
