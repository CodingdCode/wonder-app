import React from 'react';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from '../../styles/theme';
import {
  homeStackScreens,
  profileStackScreens,
  searchStackScreens,
  notesStackScreens,
} from '../stacks';

// icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export const AppTabScreens = () => {
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
