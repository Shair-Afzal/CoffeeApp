import React, { useEffect, useState } from 'react';
import { TextInput, View, Keyboard } from 'react-native';
import CoffeeData from '../data/Coffeedata';

const CustomInput = ({ handleListItem,inputValue }) => {
    useEffect(() => {
        console.log("CustomInput rendered"); // Debugging
    }, []);
    return (
        <View>
            
            {/* <TextInput
                placeholder="Find Your Coffee..."
               
                returnKeyType="search"
                onSubmitEditing={() => Keyboard.dismiss()} // Dismiss keyboard only when "Search" is pressed
                keyboardShouldPersistTaps="handled" // Prevents keyboard from dismissing on list tap
            /> */}
              {/* <TextInput
       onChangeText={handleListItem}
       value={inputValue}
          style={{ width: "100%", borderWidth: 1, height: 50,backgroundColor:'red',color:'white' }}
        /> */}
        </View>
    );
};

export { CustomInput };
