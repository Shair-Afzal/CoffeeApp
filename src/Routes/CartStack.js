import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CartScreen from '../Screens/CartScreen'
import PaymentScreen from '../Screens/PaymentScreen'

const CartStack = () => {
    const Stack=createNativeStackNavigator()

  return (
    <Stack.Navigator
    screenOptions={{headerShown:false}}
    >
        <Stack.Screen
        component={CartScreen}
        name="cartScreen"
        />
        <Stack.Screen
        component={PaymentScreen}
        name="PaymentScreen"
        />
    </Stack.Navigator>
  )
}


export default CartStack

const styles = StyleSheet.create({})