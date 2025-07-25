import { StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native'
import React, { useContext } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { AppColors, RF } from '../utils/Responsive'
import { GST } from '../utils/Globalstyle'
import { FormContext } from '../utils/Wrappercontext'

const MultipleCardDetails = ({imagelink_square,name,special_ingredient,roasted,prices,size,squantatity,mquantatity,lquantatity,currency,id,msize,lsize,mprice,lprice}) => {
const {dispatch,state}=useContext(FormContext)
    
  return (
     <LinearGradient
        colors={['rgba(37, 42, 50, 1)', 'rgba(38, 43, 51, 0)']}
                     start={{ x: 0, y: 0 }}
                     end={{ x: 1, y: 1 }}
                     style={{paddingVertical:RF(15),width:"100%",borderRadius:RF(20),padding:RF(15),marginTop:RF(10),gap:RF(5),borderWidth:1,borderColor:"white"}}
        >
        <View style={{...GST.ROW,gap:RF(20)}}>
          <Image
          source={imagelink_square}
          style={{height:RF(80),width:RF(80),borderRadius:RF(10)}}
          />
          <View style={{gap:RF(10)}}>
            <Text style={GST.subdescription}>{name}</Text>
            <Text style={GST.smallesttxt}>{special_ingredient}</Text>
            <View style={{...GST.CENTER,height:RF(25),width:RF(100),backgroundColor:AppColors.primaryDarkGreyHex,borderRadius:RF(5)}}>
              <Text style={GST.smallesttxt}>{roasted}</Text>
            </View>
          </View>
        </View>
        {              (size =='S'||size=="250gm")&&squantatity!=0&&

        <View style={GST.CENTERCONTAINER}>
          <View style={{...GST.CENTER,height:RF(25),width:RF(60),backgroundColor:AppColors.primaryBlackRGBA,borderRadius:RF(10),}}>
             <Text style={GST.description}>{size}</Text>
          </View>
          <Text style={{...GST.subdescription,color:AppColors.primaryOrangeHex}}>{currency} <Text style={GST.description}>{prices*squantatity}</Text></Text>
          <View style={{...GST.mid_row,width:RF(128),justifyContent:"space-between",}}>
                 <TouchableOpacity
                             style={styles.btn}
                           onPress={()=>{dispatch({type:"Decremant_SQuantatity",payload:{id:id}}),dispatch({type:"totalprice"})}}

                             >
                                <Text style={GST.subdescription}>-</Text>
                             </TouchableOpacity>
                       <View style={{ ...GST.CENTER,height:RF(30),width:RF(40),borderRadius:RF(5),backgroundColor:AppColors.primaryBlackRGBA,borderWidth:2,borderColor:AppColors.primaryOrangeHex}}>
                         <Text style={GST.subdescription}>{squantatity}</Text>
                       </View>

                              <TouchableOpacity
                              style={styles.btn}
                           onPress={()=>{dispatch({type:"Incremant_SQuantatity",payload:{id:id}}),dispatch({type:"totalprice"})}}
                              >
                                <Text style={GST.subdescription}>+</Text>
                              </TouchableOpacity>
              </View>
        </View>
      }
    {
              (msize =='M'||msize=="500gm")&&mquantatity!=0&&

    
        <View style={GST.CENTERCONTAINER}>
          <View style={{...GST.CENTER,height:RF(25),width:RF(60),backgroundColor:AppColors.primaryBlackRGBA,borderRadius:RF(10),}}>
             <Text style={GST.description}>{msize}</Text>
          </View>
          <Text style={{...GST.subdescription,color:AppColors.primaryOrangeHex}}>{currency} <Text style={GST.description}>{mprice*mquantatity}</Text></Text>
          <View style={{...GST.mid_row,width:RF(128),justifyContent:"space-between",}}>
                  <TouchableOpacity
                             style={styles.btn}
                           onPress={()=>{dispatch({type:"Decremant_MQuantatity",payload:{id:id}}),dispatch({type:"totalprice"})}}

                             >
                                <Text style={GST.subdescription}>-</Text>
                             </TouchableOpacity>
                       <View style={{ ...GST.CENTER,height:RF(30),width:RF(40),borderRadius:RF(5),backgroundColor:AppColors.primaryBlackRGBA,borderWidth:2,borderColor:AppColors.primaryOrangeHex}}>
                         <Text style={GST.subdescription}>{mquantatity}</Text>
                       </View>

                              <TouchableOpacity
                              style={styles.btn}
                           onPress={()=>{dispatch({type:"Incremant_MQuantatity",payload:{id:id}}),dispatch({type:"totalprice"})}}
                              >
                                <Text style={GST.subdescription}>+</Text>
                              </TouchableOpacity>
              </View>
        </View>
      }
      {
        (lsize =='L'||lsize=="1Kg")&&lquantatity!=0&&
      
        <View style={GST.CENTERCONTAINER}>
          <View style={{...GST.CENTER,height:RF(25),width:RF(60),backgroundColor:AppColors.primaryBlackRGBA,borderRadius:RF(10),}}>
             <Text style={GST.description}>{size}</Text>
          </View>
          <Text style={{...GST.subdescription,color:AppColors.primaryOrangeHex}}>{currency} <Text style={GST.description}>{lprice*lquantatity}</Text></Text>
          <View style={{...GST.mid_row,width:RF(128),justifyContent:"space-between",}}>
                  <TouchableOpacity
                             style={styles.btn}
                           onPress={()=>{dispatch({type:"Decremant_LQuantatity",payload:{id:id}}),dispatch({type:"totalprice"})}}

                             >
                                <Text style={GST.subdescription}>-</Text>
                             </TouchableOpacity>
                       <View style={{ ...GST.CENTER,height:RF(30),width:RF(40),borderRadius:RF(5),backgroundColor:AppColors.primaryBlackRGBA,borderWidth:2,borderColor:AppColors.primaryOrangeHex}}>
                         <Text style={GST.subdescription}>{lquantatity}</Text>
                       </View>

                              <TouchableOpacity
                              style={styles.btn}
                           onPress={()=>{dispatch({type:"Incremant_LQuantatity",payload:{id:id}}),dispatch({type:"totalprice"})}}
                              >
                                <Text style={GST.subdescription}>+</Text>
                              </TouchableOpacity>
              </View>
        </View>
      }
        </LinearGradient>
  )
}

export default MultipleCardDetails

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