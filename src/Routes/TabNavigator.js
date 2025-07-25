import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import { AppColors, RF } from '../utils/Responsive';
import { BlurView } from '@react-native-community/blur';
import CartScreen from '../Screens/CartScreen';
import FavoriteScreen from '../Screens/FavoriteScreen';
import OrderHistoryScreen from '../Screens/OrderHistoryScreen';
import CustomIcon from '../Components/CustomIcon';
import HomeStack from './HomeStack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import CartStack from './CartStack';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: false,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle:{height:RF(50),backgroundColor:AppColors.primaryBlackHex,borderTopWidth:1,borderColor:"White"}
        // tabBarBackground: () => {
        //   if (route.name === 'favoritescreen') {
        //     return (
        //       <BlurView overlayColor="rgba(12, 15, 20, 0.1)" blurAmount={5} style={styles.BlurViewStyles} />
        //     );
        //   }
        //   return null; // No blur for other screens
        // },
      })}
    >
      <Tab.Screen
        name="Homes"
        component={HomeStack}
        options={({route})=>{
          const routeName = getFocusedRouteNameFromRoute(route) ?? '';

          const tabBarVisible =
            routeName !== 'DetailsScreen' ;
            return {
              tabBarStyle: {
                height:RF(50),
                backgroundColor:AppColors.primaryBlackHex,
                borderTopWidth:0,
                display: tabBarVisible ? 'flex' : 'none',
              },
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/app_images/Home.png")}
              tintColor={focused ? AppColors.primaryOrangeHex : AppColors.primaryLightGreyHex}
              style={styles.icon}
            />
          ),
        }}}
      />
      <Tab.Screen
        name="cartScreen"
        component={CartStack}
        options={({route})=>{
          const routeName = getFocusedRouteNameFromRoute(route) ?? '';

          const tabBarVisible =
            routeName !== 'PaymentScreen' ;
            return {
              tabBarStyle: {
                height:RF(50),
                backgroundColor:AppColors.primaryBlackHex,
                borderTopWidth:0,
                display: tabBarVisible ? 'flex' : 'none',
              },
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/app_images/cart.png")}
              tintColor={focused ? AppColors.primaryOrangeHex : AppColors.primaryLightGreyHex}
              style={styles.icon}
            />
          ),
        }}}
      />
      <Tab.Screen
        name="favoritescreen"
        component={FavoriteScreen}
        options={({route})=>{
          const routeName = getFocusedRouteNameFromRoute(route) ?? '';

          const tabBarVisible =
            routeName !== 'PaymentScreen' ;
            return {
              tabBarStyle: {
                height:RF(50),
                backgroundColor:'rgba(12, 15, 20, 0.1)',
                borderTopWidth:0,
                display: tabBarVisible ? 'flex' : 'none',
              },
              tabBarBackground: () => (
                <BlurView
                  overlayColor="" 
                  blurType="light" 
                  blurAmount={5} 
                  reducedTransparencyFallbackColor="rgba(12, 15, 20, 0.6)"
                  style={styles.BlurViewStyles}
                />
              ),
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/app_images/favorite.png")}
              tintColor={focused ? AppColors.primaryOrangeHex : AppColors.primaryLightGreyHex}
              style={styles.icon}
            />
          ),
        }}}
      />
      <Tab.Screen
        name="OrderHistoryScreen"
        component={OrderHistoryScreen}
        options={({route})=>{
          const routeName = getFocusedRouteNameFromRoute(route) ?? '';

          const tabBarVisible =
            routeName !== 'PaymentScreen' ;
            return {
              tabBarStyle: {
                height:RF(50),
                backgroundColor:AppColors.primaryBlackHex,
                borderTopWidth:0,
                display: tabBarVisible ? 'flex' : 'none',
              },
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/app_images/order.png")}
              tintColor={focused ? AppColors.primaryOrangeHex : AppColors.primaryLightGreyHex}
              style={styles.icon}
            />
          ),
        }}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    height: RF(60),
    width: '100%',
    backgroundColor: AppColors.primaryBlackRGBA,
    // position: 'absolute',
    // borderTopWidth: 1,
  },
  favTabBarStyle: {
    // backgroundColor:'rgba(12, 15, 20, 0.1)', // Keeps black background for favorites
  },
  BlurViewStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  icon: {
    height: RF(20),
    width: RF(20),
    resizeMode: 'contain',
  },
});
