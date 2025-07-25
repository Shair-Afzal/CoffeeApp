import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GST } from '../utils/Globalstyle';
import LottieView from 'lottie-react-native';
import { AppColors, RF } from '../utils/Responsive';


const Coffeeanimation = ({txt,cstyle}) => {
  return (
    <View style={[GST.FLEX,GST.CENTER,{zIndex:1000,position:"absolute",height:"100%",alignSelf:"center"},]}>
          <LottieView  style={{height:RF(400),width:RF(400),}} source={require('../assets/app_images/coffee.json')} autoPlay loop />
          <Text style={[GST.description,styles.txt]}>{txt}</Text>
          </View>   
  )
}

export default Coffeeanimation

const styles = StyleSheet.create({
    txt:{
        color:AppColors.primaryOrangeHex
      }
})