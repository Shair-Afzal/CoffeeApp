import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import React, { useContext } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import { AppColors, RF } from '../utils/Responsive';
import { GST } from '../utils/Globalstyle';
import espresso_pic_1_square from "../assets/coffee_assets/espresso/square/espresso_pic_3_square.png"
import cappuccino_pic_3_square from "../assets/coffee_assets/cappuccino/square/cappuccino_pic_3_square.png";
import americano_pic_1_square from "../assets/coffee_assets/americano/square/americano_pic_1_square.png";
import black_coffee_pic_1_square from "../assets/coffee_assets/black_coffee/square/black_coffee_pic_1_square.png";
import latte_pic_1_square from "../assets/coffee_assets/latte/square/latte_pic_1_square.png"
import { FormContext } from '../utils/Wrappercontext';

const  Cardslist = ({ data ,navigation}) => {
  const {dispatch,state}=useContext(FormContext)
  const cardWidth = RFValue(130)
 
  const sumbit=()=>{
    dispatch({type:"Add_To_Cart",payload:items.item})
    dispatch({type:"totalprice"})
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        pagingEnabled
        horizontal
        keyExtractor={(item, index) => item.id.toString() || index.toString()}
        
        renderItem={(items) => (
          
          <LinearGradient
            colors={['rgba(37, 42, 50, 1)', 'rgba(38, 43, 51, 0)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.card, { width: cardWidth }]}
          >
            <TouchableOpacity
            onPress={()=>navigation.navigate("DetailsScreen",{id:items.item.id,type:items.item.type})}
            >
              <Image
                source={items.item.imagelink_square}
                style={styles.image}
              />
              <View style={styles.ratingContainer}>
                <Image
                  source={require("../assets/app_images/star.png")}
                  style={styles.starIcon}
                />
                <Text style={GST.smallesttxt}>{items.item.average_rating}</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.cardTitle}>{items.item.name}</Text>
            <Text style={styles.cardDescription}>{items.item.special_ingredient}</Text>
            <View style={{...GST.CENTERCONTAINER,marginTop:RF(10)}}>
            <View style={{...GST.ROW,gap:RF(5)}}>
            <Text style={{...GST.description,color:AppColors.primaryOrangeHex}}>
                {items.item.prices.find(p => p.size === 'M'|| '500')?.currency}
              </Text>
              <Text style={GST.description}>
                {items.item.prices.find(p => p.size === 'L'||'500')?.price}
              </Text>
            </View>
            <TouchableOpacity
            style={styles.btn}
            onPress={()=>{dispatch({type:"Add_To_Cart",payload:items.item}),dispatch({type:"totalprice"})}}
            >
              <Text style={GST.subdescription}>+</Text>
            </TouchableOpacity>
            </View>
          </LinearGradient>
        )}
        contentContainerStyle={styles.flatListContentContainer}
        snapToInterval={ cardWidth + RF(18)} // Match item width + gap
        decelerationRate="fast"
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Cardslist;

const styles = StyleSheet.create({
  container: {
    // paddingVertical:RF(15),
    // borderWidth:1,
    // borderColor:"white",
    
  },
  card: {   
    borderRadius: RFValue(20),
    marginTop: RFValue(10),
    padding: RF(12),
    borderWidth:1,
    borderColor:"white"

  },
  image: {
    height: RF(90),
    width: "100%",
    resizeMode: "cover",
    borderRadius: RF(10),
    position: "relative",
  },
  ratingContainer: {
    ...GST.ROW,
    gap: RF(2),
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    width: RF(40),
    borderBottomLeftRadius: RF(100),
    position: "absolute",
    right: 0,
    borderTopRightRadius: RF(70),
    ...GST.CENTER,
  },
  starIcon: {
    height: RF(10),
    width: RF(10),
    resizeMode: "contain",
  },
  cardTitle: {
    ...GST.subdescription,
    marginTop: RF(3),
  },
  cardDescription: {
    ...GST.smallesttxt,
    marginTop: RF(3),
  },
  flatListContentContainer: {
    gap: RF(18),
  
  },
  btn:{
    ...GST.CENTER,
    paddingHorizontal:RF(7),
    paddingVertical:RF(1.3),
    borderRadius:RF(3),
    backgroundColor:AppColors.primaryOrangeHex 
  }
});
