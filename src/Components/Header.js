import { StyleSheet, Text, View ,TouchableOpacity,Image,Pressable} from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { AppColors, RF } from '../utils/Responsive'
import { GST } from '../utils/Globalstyle'
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native'
import { FormContext } from '../utils/Wrappercontext'

const Header = ({Screenname,back,fav,item}) => {
  const {dispatch,state}=useContext(FormContext)
 const navigation= useNavigation()
  
    
    const heartref=useRef();
    useEffect(() => {
  const isFav = state.fav.some(favItem => favItem.id === item?.id);
  if (isFav) {
    heartref?.current?.play();
  } else {
    heartref?.current?.reset();
  }
}, [state.fav, item]);

  
    const heartpress=(item)=>{
      dispatch({
        type:"Add_To_Fav",
        payload:item
      })
     
    }
  return (
    <View style={{...GST.CENTERCONTAINER,height:RF(60),marginTop:RF(5)}}>
      {
        back?
        <TouchableOpacity
        onPress={()=>navigation.goBack()}
        >
        <LinearGradient 
        colors={['#21262E', '#0C0F14']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{height:RF(30),width:RF(30),borderRadius:RF(10),justifyContent:"center",alignItems:"center",}}>
        <Image
        source={require('../assets/app_images/arrow-left.png')}
        style={{height:"60%",width:"60%",}}
        resizeMode='contain'
        />
        </LinearGradient>
        </TouchableOpacity>
        :
      <TouchableOpacity>
        <Image
        source={require('../assets/app_images/drawerbtn.png')}
        style={{height:RF(30),width:RF(30),resizeMode:"contain"}}
        />
      </TouchableOpacity>
}
      <Text style={GST.heading}>{Screenname}</Text>
      {fav?<Pressable  onPress={ ()=>heartpress(item)}
     
      >
        <LinearGradient 
        colors={['#21262E', '#0C0F14']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{height:RF(30),width:RF(30),borderRadius:RF(10),justifyContent:"center",alignItems:"center",}}>
      <LottieView ref={heartref} loop={false} style={{height:RF(70),width:RF(70),}} source={require('../assets/app_images/Animation - 1734675851097.json')}  />
      </LinearGradient>
      </Pressable>:
      <TouchableOpacity>
      <Image
      source={require('../assets/app_images/avatar.png')}
      style={{height:RF(30),width:RF(30),resizeMode:"contain",borderRadius:RF(10)}}
      />
    </TouchableOpacity>
      }
      
      
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    
})