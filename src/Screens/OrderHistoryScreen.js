import { StyleSheet, Text, View,Image,TouchableOpacity,FlatList,SafeAreaView} from 'react-native'
import React, { useContext } from 'react'
import { GST } from '../utils/Globalstyle'
import Coffeeanimation from '../Components/Coffeeanimation'
import Header from '../Components/Header'
import LinearGradient from 'react-native-linear-gradient'
import { AppColors, RF } from '../utils/Responsive'
import CoffeeData from '../data/Coffeedata'
import { FormContext } from '../utils/Wrappercontext'

const OrderHistoryScreen = () => {
  const {dispatch,state}=useContext(FormContext)
  return (
    <SafeAreaView style={GST.MAIN}>
      <Header
      Screenname={"Order History"}
      />
  {state.orderhistory.length ==0?
  <Coffeeanimation
  txt={"There no history details"}
  />:
   <FlatList
    data={state.orderhistory}
    keyExtractor={(_, index) => index.toString()}
        renderItem={({ item: order }) => (
          <>
          <View>
            <View style={GST.CENTERCONTAINER}>
             <Text style={GST.subdescription}>Order date</Text>
             <Text style={GST.subdescription}>Total Amount</Text>
            </View>
            <View style={GST.CENTERCONTAINER}>
             <Text style={GST.smallesttxt}>{order.date}</Text>
             <Text style={{...GST.smallesttxt,color:AppColors.primaryOrangeHex}}>{order.totalAmount}</Text>
            </View>

          </View>
     {order.items.map((item,index)=>

   <LinearGradient
    key={index}
          colors={['rgba(37, 42, 50, 1)', 'rgba(38, 43, 51, 0)']}
                       start={{ x: 0, y: 0 }}
                       end={{ x: 1, y: 1 }}
                       style={{width:"100%",borderRadius:RF(20),padding:RF(15),marginTop:RF(10),gap:RF(5)}}
          >
          <View style={GST.CENTERCONTAINER}>
          <View style={{...GST.ROW,gap:RF(20)}}>
            <Image
            source={item.imagelink_square}
            style={{height:RF(60),width:RF(60),borderRadius:RF(10)}}
            />
            <View style={{gap:RF(5)}}>
              <Text style={GST.subdescription}>{item.name}</Text>
              <Text style={GST.smallesttxt}>{item.special_ingredient}</Text>
            </View>
          </View>
          <Text style={{...GST.description,color:AppColors.primaryOrangeHex}}>$ <Text style={GST.description}>{item.prices.find((x)=>x.size =='L'||'1Kg').price}</Text></Text>
          </View>
          {item.prices.find((x)=>x.size =='S'||x.size=='250gm')&&item.squantatity!=0&&
          <View style={GST.CENTERCONTAINER}>
            <View style={{...GST.ROW,height:RF(25),width:RF(100),backgroundColor:AppColors.primaryBlackRGBA,borderRadius:RF(10),}}>
              <View style={{...GST.CENTER,width:"45%",borderRightWidth:1,borderColor:'rgba(33, 38, 46, 1)'}} >
               <Text style={{...GST.smallesttxt,}}>{item.prices.find((X)=>X.size =='S'|| X.size === '250gm')?.size}</Text>
              </View>
              <View style={{...GST.CENTER,width:"55%",}}>
               <Text style={GST.smallesttxt}><Text style={{color:AppColors.primaryOrangeHex}}>$</Text>{item.prices.find((X)=>X.size =='S'|| X.size === '520gm')?.price}</Text>
              </View>
            </View>
            <View>
              <Text style={{...GST.subdescription}}><Text style={{color:AppColors.primaryOrangeHex}}>X </Text>{item.squantatity}</Text>
            </View>
            <Text style={{...GST.subdescription,color:AppColors.primaryOrangeHex}}>$ <Text style={GST.description}>{item.prices.find((x)=>x.size =='S'|| x.size === '250gm').price}</Text></Text>
            
          </View>
        }
          {item.prices.find((x)=>x.size =='M'||x.size=='500gm')&&item.mquantatity!=0&&
          <View style={GST.CENTERCONTAINER}>
            <View style={{...GST.ROW,height:RF(25),width:RF(100),backgroundColor:AppColors.primaryBlackRGBA,borderRadius:RF(10),}}>
              <View style={{...GST.CENTER,width:"45%",borderRightWidth:1,borderColor:'rgba(33, 38, 46, 1)'}} >
               <Text style={{...GST.smallesttxt,}}>{item.prices.find((X)=>X.size =='M'|| X.size === '500gm').size}</Text>
              </View>
              <View style={{...GST.CENTER,width:"55%",}}>
               <Text style={GST.smallesttxt}><Text style={{color:AppColors.primaryOrangeHex}}>$</Text>{item.prices.find((X)=>X.size =='M'|| X.size === '500gm')?.price}</Text>
              </View>
            </View>
            <View>
              <Text style={{...GST.subdescription}}><Text style={{color:AppColors.primaryOrangeHex}}>X </Text>{item.mquantatity}</Text>
            </View>
            <Text style={{...GST.subdescription,color:AppColors.primaryOrangeHex}}>$ <Text style={GST.description}>{item.prices.find((x)=>x.size =='M'|| x.size === '500gm').price}</Text></Text>
            
          </View>
        }
          {item.prices.find((x)=>x.size =='L'||x.size=='1Kg')&&item.lquantatity!=0&&
          <View style={GST.CENTERCONTAINER}>
            <View style={{...GST.ROW,height:RF(25),width:RF(100),backgroundColor:AppColors.primaryBlackRGBA,borderRadius:RF(10),}}>
              <View style={{...GST.CENTER,width:"45%",borderRightWidth:1,borderColor:'rgba(33, 38, 46, 1)'}} >
               <Text style={{...GST.smallesttxt,}}>{item.prices.find((X)=>X.size =='L'|| X.size === '1Kg')?.size}</Text>
              </View>
              <View style={{...GST.CENTER,width:"55%",}}>
               <Text style={GST.smallesttxt}><Text style={{color:AppColors.primaryOrangeHex}}>$</Text>{item.prices.find((X)=>X.size =='L'|| X.size === '1Kg')?.price}</Text>
              </View>
            </View>
            <View>
              <Text style={{...GST.subdescription}}><Text style={{color:AppColors.primaryOrangeHex}}>X </Text>{item.lquantatity}</Text>
            </View>
            <Text style={{...GST.subdescription,color:AppColors.primaryOrangeHex}}>$ <Text style={GST.description}>{item.prices.find((x)=>x.size =='L'|| x.size === '1Kg').price}</Text></Text>
            
          </View>
        }
          </LinearGradient>
        
          )}
          </>
           )}

           />
          }
          </SafeAreaView>
          
  )
}

export default OrderHistoryScreen

const styles = StyleSheet.create({
 
  
})