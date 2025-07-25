import { StyleSheet, Text, View,SafeAreaView} from 'react-native'
import React, { useContext } from 'react'
import { GST } from '../utils/Globalstyle'
import Coffeeanimation from '../Components/Coffeeanimation'
import Header from '../Components/Header'
import CardDetails from '../Components/CardDetails'
import PaymentFooter from '../Components/PaymentFooter'
import { AppColors, RF } from '../utils/Responsive'
import { FormContext } from '../utils/Wrappercontext'


const CartScreen = ({route,navigation}) => {
  const {dispatch,state}=useContext(FormContext)
  const {cart}=route.params||{}

  // console.log("order",order)
  return (
    <SafeAreaView style={GST.MAIN}>
         <Header back Screenname={"Cart"} />
     {state.cart.length==0&&
      <Coffeeanimation
      txt={"Cart item is empty"}
      />}
      <CardDetails cart={cart}/>
     
      <View style={{width:"100%"}}>
      <PaymentFooter
         Price={"Total Price"}
         money={state.TotalPrice}
         title={"Pay"}
         customstyle={{postion:"absolute",bottom :0,backgroundColor:AppColors.primaryBlackHex,paddingVertical:RF(7)}}
         navigation={()=>{navigation.navigate("PaymentScreen")}}
         />
         </View>
      </SafeAreaView>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  
})