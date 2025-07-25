import { StyleSheet, Text, TouchableOpacity, View,SafeAreaView} from 'react-native'
import React, { useContext, useRef, useState } from 'react'
import { GST } from '../utils/Globalstyle'
import { AppColors, RF } from '../utils/Responsive'
import Imgbackground from '../Components/Imgbackground'
import Button from '../Components/Button'
import PaymentFooter from '../Components/PaymentFooter'
import CoffeeData from '../data/Coffeedata'
import BeansData from '../data/BeansData'
import { FormContext } from '../utils/Wrappercontext'

const DetailsScreen = ({route,navigation}) => {
  const {dispatch,state}=useContext(FormContext)
 
  const [sizet,setsize]=useState('250')
  const {id,type}=route.params
  const selectitem=type=='Coffee'
  ? CoffeeData.find((item)=>item.id==id)
  : BeansData.find((item)=>item.id==id)
  
  const sumbit=(item)=>{
     const selectedPrice = item.prices.find(p => 
    p.size === sizet || 
    (sizet === '250' && (p.size === 'S' || p.size === '250gm')) ||
    (sizet === '500' && (p.size === 'M' || p.size === '500gm')) ||
    (sizet === '1000' && (p.size === 'L' || p.size === '1Kg'))
  );
    const cartitem={
      id:item.id,
      name:item.name,
    imagelink_portrait:item.imagelink_portrait,
    imagelink_square:item.imagelink_square,
    special_ingredient:item.special_ingredient,
    ingredients:item.ingredients,
    size:selectedPrice.size,
    price:selectedPrice.price,
    prices: item.prices, 
    cart:true
      
    }
    dispatch({type:"Add_To_Cart",payload:{...cartitem, fromDetailScreen: true}},
      navigation.navigate("cartScreen",{cart:true}))
      dispatch({ type: "Set_JustNavigated", payload: true });
      dispatch({type:"totalprice"})
  }
  return (
    <SafeAreaView style={styles.maincontainer}>
      <Imgbackground
      backimg={selectitem.imagelink_portrait}
      name={selectitem.name}
      singredient={selectitem.special_ingredient}
      ing={selectitem.ingredients}
      roste={selectitem.roasted}
      rate={selectitem.average_rating}
      ratecount={selectitem.ratings_count}
      setitem={selectitem}
      />
      <View style={{paddingHorizontal:"4.5%",marginTop:RF(10),flex:1}}>
      <Text style={{...GST.subdescription,color:AppColors.secondaryLightGreyHex}}>Description</Text>
      <Text style={{...GST.smallesttxt,marginTop:RF(3)}}>{selectitem.description}</Text>
      <Text style={{...GST.subdescription,marginTop:RF( 10)}}>Size</Text>
      <View style={GST.CENTERCONTAINER}>
        <TouchableOpacity style={{...styles.sizecontainer,borderColor:sizet=='250'?AppColors.primaryOrangeHex:AppColors.primaryDarkGreyHex}}
        onPress={()=>setsize('250')}
        >
          <Text style={GST.subdescription}>{selectitem.prices.find((item)=>item.size=='S'||item.size=="250gm")?.size}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.sizecontainer,borderColor:sizet=='500'?AppColors.primaryOrangeHex:AppColors.primaryDarkGreyHex}}
        onPress={()=>setsize('500')}
        >         
         <Text style={GST.subdescription}>{selectitem.prices.find((item)=>item.size=='M'||item.size=="500gm")?.size}</Text>
        </TouchableOpacity>      
        <TouchableOpacity style={{...styles.sizecontainer,borderColor:sizet=='1000'?AppColors.primaryOrangeHex:AppColors.primaryDarkGreyHex}}
        onPress={()=>setsize('1000')}
        >       
           <Text style={GST.subdescription}>{selectitem.prices.find((item)=>item.size=='L'||item.size=="1Kg")?.size}</Text>
        </TouchableOpacity>
              </View>
        
        
      </View>
      
         <PaymentFooter
         Price={"Price"}
         money={"4.29"}
         title={"Add to Cart"}
         navigation={()=>sumbit(selectitem)}
         customstyle={{paddingHorizontal:"4.5%",}}
         />
         
    </SafeAreaView>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
    maincontainer:{
        ...GST.FLEX,
        backgroundColor:AppColors.primaryBlackHex,
    },
    sizecontainer:{
      ...GST.CENTER,
      paddingVertical:RF(8),
      width:"26%",
      borderRadius:RF(10),
      backgroundColor:AppColors.primaryDarkGreyHex,
      marginTop:RF(17),
      borderWidth:2,
      // borderColor:AppColors.primaryOrangeHex
    }
})