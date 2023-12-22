import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SearchScreen from '../screens/search/searchScreen';
import HomeScreen from '../screens/home';
import HomeTabNavigator from './HomeTabNavigator';
import ScreenLocation from '../screens/location/ScreenLocation';

export default function Router() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name={'Home'}
          component={HomeTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'location'}
          component={ScreenLocation}
          options={{
            title: "Search your destination"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
