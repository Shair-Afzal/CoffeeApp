import { LayoutAnimation, StyleSheet, Text, View,ImageBackground,TouchableOpacity,Image, Pressable, FlatList} from 'react-native'
import React, { useContext, useRef, useState } from 'react'
import { GST } from '../utils/Globalstyle';
import Coffeeanimation from '../Components/Coffeeanimation';
import Header from '../Components/Header';
import { AppColors, RF } from '../utils/Responsive';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';
import { FormContext } from '../utils/Wrappercontext';



const FavoriteScreen = () => {
  const {dispatch,state}=useContext(FormContext)
  
//
  return (
    <View style={GST.MAIN}>
   
   <Header back Screenname={"Favorites"} />
   {state.fav.length==0? <Coffeeanimation
   txt={"NO Favorite items"}
   /> :
   <FlatList
     data={state.fav}
        keyExtractor={(item, index) => item.id.toString() || index.toString()}
        showsVerticalScrollIndicator={false}     
        renderItem={(items) => (
   <LinearGradient
   colors={['rgba(38, 43, 51, 1)', 'rgba(38, 43, 51, 0)']}
   start={{ x: 0, y: 0 }}
   end={{ x: 1, y: 1 }}
   style={styles.maincontainer}
   >
   <View style={styles.container}>
      <ImageBackground
        source={items.item.imagelink_portrait}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        {/* <View style={styles.headerContainer}>
          <Pressable  onPress={()=>heartpress(items.item)}
               
                >
                  <LinearGradient 
                  colors={['#21262E', '#0C0F14']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={{height:RF(30),width:RF(30),borderRadius:RF(10),justifyContent:"center",alignItems:"center",alignSelf:"flex-end",marginTop:RF(5)}}>
                <LottieView ref={heartref} loop={false} style={{height:RF(70),width:RF(70),}} source={require('../assets/app_images/Animation - 1734675851097.json')} autoPlay={like} />
                </LinearGradient>
                </Pressable>
        </View> */}
        <View style={styles.headerContainer}>
        <Header back fav item={items.item} />
        </View>
        <View style={styles.overlay} >
            <View style={GST.CENTERCONTAINER}>
                <View>
                    <Text style={GST.heading}>{items.item.name}</Text>
                    <Text style={{...GST.subdescription,color:"rgba(174, 174, 174, 1)"}}>{items.item.special_ingredient}</Text>
                </View>
                <View>
                   <View style={{...GST.ROW,gap:RF(15)}}>
                    <View style={styles.coffeebeancontainer}>
                   <Image
                   source={require('../assets/app_images/bean.png')}
                   style={styles.coffeebeanimg}
                   />
                   <Text style={{...GST.smallesttxt,color:"rgba(174, 174, 174, 1)"}}>{items.item.type}</Text>
                    </View>
                    <View style={styles.coffeebeancontainer}>
                    <Image
                   source={require('../assets/app_images/location.png')}
                   style={styles.coffeebeanimg}
                   />
                   <Text style={{...GST.smallesttxt,color:"rgba(174, 174, 174, 1)"}}>{items.item.ingredients}</Text>

                    </View>
                   </View>
                </View>
            </View>
            <View style={{...GST.CENTERCONTAINER,marginTop:RF(10)}}>
              <View style={{...GST.ROW,gap:RF(5)}}>
                <Image source={require('../assets/app_images/star.png')}
                style={{height:RF(20),width:RF(20),resizeMode:"contain"}}
                />
              <Text style={GST.subdescription}>{items.item.average_rating} <Text style={{...GST.smallesttxt,color:"rgba(174, 174, 174, 1)"}}>{items.item.ratings_count}</Text></Text>
              </View>
              <View style={{ ...GST.CENTER,height:RF(38),width:"33%",backgroundColor:AppColors.primaryDarkGreyHex,borderRadius:RF(10)}}>
              <Text style={{...GST.smallesttxt,color:"rgba(174, 174, 174, 1)",}}>{items.item.roasted}</Text>
              </View>
            </View>
            </View>
      </ImageBackground>
    </View>
        <View style={{marginLeft:RF(20),marginTop:RF(5)}}>
          <Text style={{...GST.subdescription,color:AppColors.secondaryLightGreyHex}}>Description</Text>
          <Text style={{...GST.smallesttxt,marginTop:RF(5)}}>{items.item.description}</Text>
          </View>
    </LinearGradient>
        )}/>
      }
      </View>
  )
}

export default FavoriteScreen

const styles = StyleSheet.create({
  maincontainer:{
    // height:RF(480),
    paddingBottom:RF(10),
    width: '100%',
     borderRadius:RF(25),
     marginTop:RF(15),
     borderWidth:1,
     borderColor:"white"
    
    
  },
  container: {
    height: RF(390),
    width: '100%',
     borderTopLeftRadius:RF(25),
     borderTopRightRadius:RF(25),
     overflow:"hidden"
    
  },
  imageBackground: {
    height: '100%',
    width: '100%',
    
  },
  headerContainer: {
    paddingHorizontal: '4.5%',
  },
  overlay: {
    height: RF(130),
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: RF(25),
    borderTopRightRadius: RF(25),
    padding:'4.5%'
  },
  coffeebeancontainer:{
    ...GST.CENTER,
    height:RF(45),
    width:RF(45),
    backgroundColor:AppColors.primaryDarkGreyHex,
    borderRadius:RF(10),
  },
  coffeebeanimg:{
    height:RF(23),
    width:RF(23),
    resizeMode:"contain"
  },
  star:{
    height:RF(20),
    width:RF(20),
    resizeMode:"contain"
  }
})