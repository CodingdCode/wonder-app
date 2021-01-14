import React from 'react';
import 'react-native-gesture-handler';
import Provider from './src/redux/provider';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppTabScreens } from './src/screens/tabs';

import SignupScreen from './src/screens/SignupScreen';
import IndexScreen from './src/screens/IndexScreen';

const RootStack = createStackNavigator();

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
            options={{ headerShown: false, gestureEnabled: false }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
