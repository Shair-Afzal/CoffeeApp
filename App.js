import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, Platform, TextInput, TouchableOpacity } from "react-native"
import SplashScreen from "react-native-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./src/Routes/TabNavigator";
import Button from "./src/Components/Button";
import WrapperContext from "./src/utils/Wrappercontext";
const App = () => {
//   useEffect(()=>{
//     const call=fetch()
// },[] )
  
  const [data, setdata] = useState([])
  const [value, setvalue] = useState('')
  const [editIndex, setEditIndex] = useState(false)
  
  // useEffect(()=>{
  //   // const store = JSON.parse(localStorage.getItem('todo'))
  //   if(store){
  //     setdata(store)
  //   }
  // },[])
const handleClick=(txt)=>{
  setvalue(txt)
}
const addtxt=()=>{
  
  // const todo=[...data]
  // todo.unshift(data)
  // todo.push(value)
 
  setdata((prev)=>[value,...prev])
  setvalue('')
  setEditIndex(!editIndex)

}
const handleDel=(index)=>{
  const de=data.filter((x,i)=>i!=index)
  setdata(de)
}
const handleEdit=(index)=>{
  const item=data.find((_,ind)=>ind == index)
  setvalue(item)
  setEditIndex(true)
  
}
  useEffect(() => {
    if (Platform.OS === 'android') {
      setTimeout(() => {
        SplashScreen.hide();
      }, 2000);  // Delay for 2 seconds before hiding
    }
  }, [])

  return (
    // <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
    //   <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
    //     <TextInput
    //       value={value}
    //       onChangeText={handleClick}
    //       style={{ width: "70%", borderWidth: 1, height: 50 }}
    //     />
    //     <TouchableOpacity
    //       style={{ height: 50, backgroundColor: "green", justifyContent: "center", alignItems: "center", width: "20%" }}
    //       onPress={addtxt}
    //     >
    //       <Text>{editIndex ? 'update':'Add'}</Text>
    //     </TouchableOpacity>
    //   </View>
    //   {data.map((x, index) => (
    //       <View key={index} style={{ flexDirection: "row", gap: 10 }}>
    //         <Text style={{ fontSize: 18, color: 'black' }}>{x}</Text>
    //         <TouchableOpacity
    //         onPress={() => handleDel(index)}
    //         >
    //         <Text style={{ fontSize: 18, color: 'red' }} >del</Text>
    //         </TouchableOpacity>
    //         <Text style={{ fontSize: 18, color: 'green' }} onPress={() => handleEdit(index)}>Edit</Text>
    //       </View>
    //     )
    //     )
    //   }

    // </View>
   <WrapperContext>
    <NavigationContainer>
      <TabNavigator></TabNavigator>

    </NavigationContainer>
    </WrapperContext>
  )
}
export default App;