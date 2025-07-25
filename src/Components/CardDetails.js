import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useContext } from 'react'
import CoffeeData from '../data/Coffeedata'
import LinearGradient from 'react-native-linear-gradient'
import { AppColors, RF } from '../utils/Responsive'
import { GST } from '../utils/Globalstyle'
import { MyContext } from '../Screens/HomeScreen'
import { FormContext } from '../utils/Wrappercontext'
import Singlecardcomponent from './Singlecardcomponent'
import MultipleCardDetails from './MultipleCardDetails'

const CardDetails = ({cart,order}) => {
  // const data=useContext(MyContext)
  const { dispatch, state } = useContext(FormContext)

  return (


    <FlatList
      data={state.cart}
      keyExtractor={(item, index) => item.id.toString() || index.toString()}
      renderItem={(items,index) => {
       const hasTwoOrMoreQuantities =

    (items.item.squantatity && items.item.mquantatity) ||
    (items.item.squantatity && items.item.lquantatity) ||
    (items.item.mquantatity && items.item.lquantatity);
    let selectedSize = '';
  let selectedPrice = 0;
  let quantity=0
 
 const incrementfun=()=>{
  if (items.item.squantatity) {
    dispatch({type:"Incremant_SQuantatity",payload:{id:items.item.id}})
        dispatch({type:"totalprice"})

  }else if(items.item.mquantatity){
        dispatch({type:"Incremant_MQuantatity",payload:{id:items.item.id}})
            dispatch({type:"totalprice"})


  }else {
            dispatch({type:"Incremant_lQuantatity",payload:{id:items.item.id}})
                dispatch({type:"totalprice"})
 

  }
 }
 const decrementfun=()=>{
  if (items.item.squantatity) {
    dispatch({type:"Decremant_SQuantatity",payload:{id:items.item.id}})
    dispatch({type:"totalprice"})
  }else if(items.item.mquantatity){
        dispatch({type:"Decremant_MQuantatity",payload:{id:items.item.id}})
            dispatch({type:"totalprice"})


  }else {
            dispatch({type:"Decremant_lQuantatity",payload:{id:items.item.id}})
                dispatch({type:"totalprice"})


  }
 }
  if (items.item.squantatity) {
    selectedSize = items.item.prices.find(p => p.size === 'S' || p.size === '250gm')?.size;
    selectedPrice = items.item.prices.find(p => p.size === 'S' || p.size === '250gm')?.price;
    quantity=items.item.squantatity
  } else if (items.item.mquantatity) {
    selectedSize = items.item.prices.find(p => p.size === 'M' || p.size === '500gm')?.size;
    selectedPrice = items.item.prices.find(p => p.size === 'M' || p.size === '500gm')?.price;
    quantity=items.item.mquantatity
  } else if (items.item.lquantatity) {
    selectedSize = items.item.prices.find(p => p.size === 'L' || p.size === '1Kg')?.size;
    selectedPrice = items.item.prices.find(p => p.size === 'L' || p.size === '1Kg')?.price;
     quantity=items.item.lquantatity

  }
    
        
       if(hasTwoOrMoreQuantities&&items.item.fromDetailScreen==false){
        return(
       <MultipleCardDetails
       imagelink_square={items.item.imagelink_square}
       name={items.item.name}
        special_ingredient={items.item.special_ingredient}
        roasted={items.item.roasted}
        size={items.item.prices.find((X)=>X.size =='S'||X.size=="250gm")?.size}
        msize={items.item.prices.find((X)=>X.size =='M'||X.size=="500gm")?.size}
        lsize={items.item.prices.find((X)=>X.size =='L'||X.size=="1Kg")?.size}
        currency={items.item.prices.find((x)=>x.currency).currency}
        prices={items.item.prices.find((x)=>x.size =='S'||x.size =="250gm").price}
        squantatity={items.item.squantatity}
        mquantatity={items.item.mquantatity}
        lquantatity={items.item.lquantatity}
        id={items.item.id}
        mprice={items.item.prices.find((x)=>x.size =='M'||x.size =="500gm").price}
        lprice={items.item.prices.find((x)=>x.size =='L'||x.size =="1Kg").price}
        
       />
        )
       }else if(quantity!=0){
        return(
        <Singlecardcomponent 
        imagelink_square={items.item.imagelink_square} 
        name={items.item.name} 
        size={items.item.cart?items.item.size:selectedSize} 
        prices={items.item.cart?items.item.price*quantity:selectedPrice*quantity}
        special_ingredient={items.item.special_ingredient}
        quantity={quantity}
        incrementpress={incrementfun}
        decrementpress={decrementfun}
         />
        )
       }
      }}
      
    
    
    />
    
      
  )
}

export default CardDetails

const styles = StyleSheet.create({
  sizcontainer: {
    ...GST.CENTER,
    height: RF(30),
    paddingHorizontal: RF(30),
    borderRadius: RF(10),
    backgroundColor: AppColors.primaryBlackHex,

  },
  btn: {
    ...GST.CENTER,
    height: RF(21),
    width: RF(21),
    borderRadius: RF(3),
    backgroundColor: AppColors.primaryOrangeHex
  },
  carddetilscontainer: {

  }
})