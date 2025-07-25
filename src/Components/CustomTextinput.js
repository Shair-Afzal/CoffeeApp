import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
  } from 'react-native';
  import React, { useState } from 'react';
import { AppColors, RF } from '../utils/Responsive';
import { GST } from '../utils/Globalstyle';

  
  const CustomTextinput = (props) => {
    const [isFocused, setIsFocused] = useState(false);
  
    const handleFocus = () => {
      if (!props.disabled) {
        setIsFocused(true);
        // Call the onFocus prop if provided
        if (props.onFocus) {
          props.onFocus();
        }
      }
    };
  
    const handleOnBlur = () => {
      if (!props.disabled) {
        setIsFocused(false);
        // Call the onBlur prop if provided
        if (props.onBlur) {
          props.onBlur();
        }
      }
    };
  
    return (
      <View style={[styles.parentContainerStyle, props.customStyle]}>
        {props.label && (
          <Text style={[GST.description, { marginBottom: '1%' }]}>
            {props.label}
          </Text>
        )}
        <View
          style={{
            ...styles.inputContainer,
            ...(isFocused && styles.inputFocused),
            ...props.customInputStyle,
          }}
        >
          {props.lefticon && (
            <TouchableOpacity style={styles.imgContainer} onPress={props.onPress}>
              <Image
                source={props.source}
                style={styles.img}
                tintColor={props.tintColor}
              />
            </TouchableOpacity>
          )}
          <TextInput
            color={'black'}
            editable={props.editable}
            placeholderTextColor={[AppColors.primaryGreyHex, props.placeholderTextColor]}
            placeholderStyle={[GST.smallesttxt, props.placeholderStyle]}
            onFocus={handleFocus} // Use the handler directly
            onBlur={handleOnBlur}  // Use the handler directly
            {...props}
            style={[
              styles.input,
              props.multiline && { height: props.numberOfLines * 20 },
              props.style,
            ]}
            placeholder={props.placeholder}
            multiline={props.multiline}
            numberOfLines={props.numberOfLines}
            value={props.value}
            onChangeText={props.onChangeText}
            keyboardType={props.keyboardType}
            disabled={props.disabled}
            selectTextOnFocus={props.selectTextOnFocus}
          />
          <View style={[GST.CENTER, { width: '15%' }]}>
            {props.iconName && (
              <TouchableOpacity onPress={props.onPress}>
                <Icon
                  name={props.iconName || 'eye-with-line'}
                  size={20}
                  color={isFocused ? 'black' : '#BDBDBD'}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
  };
  
  export default CustomTextinput;
  
  const styles = StyleSheet.create({
    parentContainerStyle: {
      width: '100%',
      alignSelf: 'center',
      marginTop: '5%',
    },
    inputContainer: {
      flexDirection: 'row',
      borderRadius: RF(15),
      backgroundColor: AppColors.primaryDarkGreyHex,
      height: RF(45),
    
    },
    input: {
      width: '77%',
      borderColor: 'red',
      paddingHorizontal: '3%',
    },
    inputFocused: {
    //   borderColor: AppColors.primaryColor,
    },
    img: {
      height: '100%',
      width: '90%',
      resizeMode: 'contain',
    },
    imgContainer: {
      height: RF(45),
      width: RF(20),
      justifyContent: 'center',
      marginLeft: '4%',
    },
  });