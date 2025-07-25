import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../Screens/HomeScreen'
import DetailsScreen from '../Screens/DetailsScreen'
import CartScreen from '../Screens/CartScreen'
const Stack=createNativeStackNavigator()
const HomeStack = () => {
  return (
    <Stack.Navigator
    screenOptions={{headerShown:false}}
    >
        <Stack.Screen
        component={HomeScreen}
        name="Home"
        />
         <Stack.Screen
        component={DetailsScreen}
        name="DetailsScreen"
        />
        

    </Stack.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({})