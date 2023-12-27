
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SearchScreen from '../screens/search/searchScreen'

export default function SearchResultTabNavigator() {

    const Tab = createMaterialTopTabNavigator()
    
  return (
    <Tab.Navigator>
        <Tab.Screen 
        name={'List'}
        component={SearchScreen}
        />
        <Tab.Screen 
        name={'Map'}
        component={SearchScreen}
        />
    </Tab.Navigator>
  )
}