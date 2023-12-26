import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/home'
import SearchScreen from '../screens/search/searchScreen'

export default function ExploreNavigator() {

    const Stack = createStackNavigator()
  return (
    <Stack.Navigator>
        <Stack.Screen
        name={'home'}
        component={HomeScreen}
        options={{
            headerShown: false
        }}
        />
        <Stack.Screen
        name={'searchScreen'}
        component={SearchScreen}
        options={{
            title: 'Search Your Destination'
        }}
        />
    </Stack.Navigator>
  )
}