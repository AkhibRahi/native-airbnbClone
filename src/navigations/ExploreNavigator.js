import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/home'
import SearchScreen from '../screens/search/searchScreen'
import Guest from '../screens/guest/Guest'
import SearchResultTabNavigator from './SearchResultTabNavigator'

export default function ExploreNavigator() {

    const Stack = createStackNavigator()
  return (
    <Stack.Navigator>
        <Stack.Screen
        name={'Welcome'}
        component={HomeScreen}
        options={{
            headerShown: false
        }}
        />
        <Stack.Screen
        name={'searchResults'}
        component={SearchResultTabNavigator}
        options={{
            title: 'Search Your Destination'
        }}
        />
    </Stack.Navigator>
  )
}