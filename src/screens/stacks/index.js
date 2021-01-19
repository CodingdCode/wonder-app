import React from 'react';
import { Button, Text, TextInput, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS, HEADING } from '../../styles/theme';

import UserProfileScreen from '../UserProfileScreen';

// components
import SearchBar from '../../components/SearchBar';

// tabs
import HomeScreen from '../HomeScreen';
import NotesScreen from '../NotesScreen';
import ProfileScreen from '../ProfileScreen';
import SearchScreen from '../SearchScreen';

// icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { signOutUser } from '../../redux/actions/authenticationActions';

// components
import DropdownHeaderMenu from '../../components/DropdownHeaderMenu';
import EstablishmentScreen from '../EstablishmentScreen';
import ProfileSettingsScreen from '../ProfileSettingsScreen';

const Stack = createStackNavigator();

export const homeStackScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        gestureEnabled: false,
      }}>
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
      <Stack.Screen
        name="UserProfile"
        component={UserProfileScreen}
        options={(props) => {
          return {
            headerRight: null,
            headerLeft: () => (
              <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Ionicons
                  name="arrow-back-outline"
                  size={24}
                  style={{ marginLeft: 10 }}
                />
              </TouchableOpacity>
            ),
            headerTitle: () => (
              <Text style={HEADING.heading1}>
                {props.route.params.userInfo.name}
              </Text>
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
};

export const searchStackScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        gestureEnabled: false,
      }}>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={(props) => ({
          headerRight: null,
          headerLeft: null,
          headerTitle: () => <SearchBar />,
        })}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfileScreen}
        options={(props) => {
          return {
            headerRight: null,
            headerLeft: () => (
              <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Ionicons
                  name="arrow-back-outline"
                  size={24}
                  style={{ marginLeft: 10 }}
                />
              </TouchableOpacity>
            ),
            headerTitle: () => (
              <Text style={HEADING.heading1}>
                {props.route.params.userInfo.name}
              </Text>
            ),
          };
        }}
      />
      <Stack.Screen
        name="EstablishmentScreen"
        component={EstablishmentScreen}
        options={(props) => ({
          headerRight: null,
          headerLeft: () => (
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Ionicons
                name="arrow-back-outline"
                size={24}
                style={{ marginLeft: 10 }}
              />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text style={HEADING.heading1}>{props.route.params.data.name}</Text>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export const notesStackScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        gestureEnabled: false,
      }}>
      <Stack.Screen
        name="Notes"
        component={NotesScreen}
        options={(props) => ({
          headerRight: null,
          headerLeft: null,
          headerTitle: <Text style={HEADING.heading1}>NOTES</Text>,
        })}
      />
    </Stack.Navigator>
  );
};

export const profileStackScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        gestureEnabled: false,
      }}>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={(props) => ({
          headerRight: () => (
            <TouchableOpacity
              onPress={() => props.navigation.navigate('ProfileSettings')}>
              <FontAwesome
                name="gear"
                size={24}
                style={{ marginHorizontal: 10 }}
              />
            </TouchableOpacity>
          ),
          headerLeft: null,
        })}
      />
      <Stack.Screen
        name="ProfileSettings"
        component={ProfileSettingsScreen}
        options={(props) => ({
          headerRight: null,
          headerLeft: () => (
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Ionicons
                name="arrow-back-outline"
                size={24}
                style={{ marginLeft: 10 }}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfileScreen}
        options={(props) => {
          return {
            headerRight: null,
            headerLeft: () => (
              <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Ionicons
                  name="arrow-back-outline"
                  size={24}
                  style={{ marginLeft: 10 }}
                />
              </TouchableOpacity>
            ),
            headerTitle: () => (
              <Text style={HEADING.heading1}>
                {props.route.params.userInfo.name}
              </Text>
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
};
