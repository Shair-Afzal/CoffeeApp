import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import { AppColors, RF } from '../utils/Responsive';
import { GST } from '../utils/Globalstyle';


const Button = ({
  btnTitle,
  onPress,
  customStyles,
  linGradH,
  backgroundColor,
  customStyless,
  TextColor,
  style,
  txtStyle,
  disabled,
  num,
  price,
}) => {



  return (
    
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.btn,
        customStyless,
        GST.mid_row,

      ]}>
      <Text
        style={[
          GST.description,
          {color: TextColor ? TextColor : AppColors.white},
        ]}>
        {num}
      </Text>
      <Text
        style={[
          GST.description,
        
        ]}>
        {btnTitle}
      </Text>
      <Text
        style={[
          GST.description,
          {color: TextColor ? TextColor : AppColors.white},
        ]}>
        {price}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    paddingVertical:RF(15),
    borderRadius: RF(15),
    backgroundColor:  AppColors.primaryOrangeHex
  
  },
  ViewBorder:{

    paddingHorizontal:'4.5%',
    paddingTop:'4%',
    paddingBottom:'5%',
    borderTopWidth:RF(0.9),
    // borderColor:AppColors.lightgrey

  }
});