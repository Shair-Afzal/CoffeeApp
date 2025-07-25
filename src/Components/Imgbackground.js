import { StyleSheet, Text, View, ImageBackground,Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from './Header';
import { AppColors, RF } from '../utils/Responsive';
import { GST } from '../utils/Globalstyle';

const Imgbackground = ({backimg,name,singredient,ing,roste,rate,ratecount,setitem}) => {

  
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backimg}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <View style={styles.headerContainer}>
          <Header back fav item={setitem} />
        </View>
        <View style={styles.overlay} >
            <View style={GST.CENTERCONTAINER}>
                <View>
                    <Text style={GST.heading}>{name}</Text>
                    <Text style={{...GST.subdescription,color:"rgba(174, 174, 174, 1)"}}>{singredient}</Text>
                </View>
                <View>
                   <View style={{...GST.ROW,gap:RF(15)}}>
                    <View style={styles.coffeebeancontainer}>
                   <Image
                   source={require('../assets/app_images/beans.png')}
                   style={styles.coffeebeanimg}
                   />
                   <Text style={{...GST.smallesttxt,color:"rgba(174, 174, 174, 1)"}}>Coffee</Text>
                    </View>
                    <View style={styles.coffeebeancontainer}>
                    <Image
                   source={require('../assets/app_images/drop.png')}
                   style={styles.coffeebeanimg}
                   />
                   <Text style={{...GST.smallesttxt,color:"rgba(174, 174, 174, 1)"}}>{ing}</Text>

                    </View>
                   </View>
                </View>
            </View>
            <View style={{...GST.CENTERCONTAINER,marginTop:RF(10)}}>
              <View style={{...GST.ROW,gap:RF(5)}}>
                <Image source={require('../assets/app_images/star.png')}
                style={{height:RF(20),width:RF(20),resizeMode:"contain"}}
                />
              <Text style={GST.subdescription}>{rate} <Text style={{...GST.smallesttxt,color:"rgba(174, 174, 174, 1)"}}>({ratecount})</Text></Text>
              </View>
              <View style={{ ...GST.CENTER,height:RF(38),width:"33%",backgroundColor:AppColors.primaryDarkGreyHex,borderRadius:RF(10)}}>
              <Text style={{...GST.smallesttxt,color:"rgba(174, 174, 174, 1)",}}>{roste}</Text>
              </View>
            </View>
            </View>
      </ImageBackground>
    </View>
  );
};

export default Imgbackground;

const styles = StyleSheet.create({
  container: {
    height: "60%",
    width: '100%',
    backgroundColor: 'white',
  },
  imageBackground: {
    height: '100%',
    width: '100%',
  },
  headerContainer: {
    paddingHorizontal: '4.5%',
  },
  overlay: {
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: RF(25),
    borderTopRightRadius: RF(25),
    padding:'4.5%',
  },
  coffeebeancontainer:{
    ...GST.CENTER,
   paddingVertical:RF(5),
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
});
