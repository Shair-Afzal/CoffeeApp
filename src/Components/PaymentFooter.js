import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GST } from '../utils/Globalstyle'
import { AppColors, RF } from '../utils/Responsive'
import Button from './Button'

const PaymentFooter = ({title,Price,money,customstyle,navigation}) => {
  return (
    <View style={[{...GST.CENTERCONTAINER,position:"absolute",bottom:RF(20),},customstyle]} >
          <View>
            <Text style={GST.smallesttxt}>{Price}</Text>
            <Text style={{...GST.subHeading,color:AppColors.primaryOrangeHex}}>$ <Text style={GST.subHeading}>{money}</Text></Text>

          </View>
          <Button customStyless={{width:"60%"}}
          btnTitle={title}
          onPress={navigation}
          />
         </View>
  )
}

export default PaymentFooter

const styles = StyleSheet.create({})