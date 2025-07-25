import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React, { useContext } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { AppColors, RF } from '../utils/Responsive'
import { GST } from '../utils/Globalstyle'
import { FormContext } from '../utils/Wrappercontext'

const Singlecardcomponent = ({name,special_ingredient,imagelink_square,prices,size,quantity,incrementpress,decrementpress}) => {

const {dispatch,state}=useContext(FormContext)

  return (
    
    
              <LinearGradient
                       colors={['rgba(37, 42, 50, 1)', 'rgba(38, 43, 51, 0)']}
                       start={{ x: 0, y: 0 }}
                       end={{ x: 1, y: 1 }}
                       style={{height:RF(140),width:"100%",borderRadius:RF(10),padding:RF(15),marginTop:RF(10)}}
           >
           <View style={{...GST.ROW,width:"100%",height:"100%",gap:RF(15)}}>
            <Image
            source={imagelink_square}
            style={{height:"100%",width:"40%",borderRadius:RF(10)}}
            />
            <View>
                <Text style={GST.subdescription}>{name}</Text>
                <Text style={GST.smallesttxt}>{special_ingredient}</Text>
                <View style={[{...GST.ROW,width:"100%",gap:RF(15),alignItems:"center",marginTop:RF(10)}]}>
                <View style={styles.sizcontainer}>
                   <Text style={GST.subdescription}>{size}</Text>
                </View>
                <Text style={{...GST.description,color:AppColors.primaryOrangeHex}}>$ <Text style={GST.description}>{prices}</Text></Text>
                </View>
                <View style={{...GST.mid_row,width:RF(128),justifyContent:"space-between",marginTop:RF(10)}}>
                    <TouchableOpacity
                                style={styles.btn}
                               onPress={decrementpress}
                                >
                                  <Text style={GST.subdescription}>-</Text>
                                </TouchableOpacity>
                          <View style={{ ...GST.CENTER,height:RF(30),width:RF(40),borderRadius:RF(5),backgroundColor:AppColors.primaryBlackRGBA,borderWidth:2,borderColor:AppColors.primaryOrangeHex}}>
                            <Text style={GST.subdescription}>{quantity}</Text>
                          </View>
                            
                                <TouchableOpacity
                                style={styles.btn}
                               onPress={incrementpress}
                                >
                                  <Text style={GST.subdescription}>+</Text>
                                </TouchableOpacity>
                </View>
            </View>
           </View>
           </LinearGradient>

    
  )

}


export default Singlecardcomponent

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
})