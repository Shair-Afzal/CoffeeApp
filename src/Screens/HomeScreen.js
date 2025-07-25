import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, KeyboardAvoidingView, ActivityIndicator } from 'react-native'
import React, { createContext, useCallback, useEffect, useMemo, useState, useSyncExternalStore } from 'react'
import Header from '../Components/Header'
import { GST } from '../utils/Globalstyle'
import { AppColors, RF } from '../utils/Responsive'
import CustomTextinput from '../Components/CustomTextinput'
// import { ScrollView } from 'react-native-virtualized-view';
import CoffeeData from '../data/Coffeedata'
import BeansData from '../data/BeansData'
import Cardslist from '../Components/Cardslist'
import { useNavigation } from "@react-navigation/native";
import { coffee } from '../data/db.json'
import { debounce } from 'lodash'
import Coffeeanimation from '../Components/Coffeeanimation'
export const MyContext = createContext();
const HomeScreen = () => {
  const navigation = useNavigation();
  const [search, setsearch] = useState("")
  const [loading, setloading] = useState(true);
  const [filterdata, setfilterdata] = useState(CoffeeData)
  const uniqueCategories = ["All", ...new Set(CoffeeData.map((items) => items.name))];
  const [selectcategroies, setSelectcategories] = useState('All')
  const selected = (name) => {

    setSelectcategories(name)
    setloading(true)
    if (name == "All") {
      setfilterdata(CoffeeData)
    } else {
      let adddata = CoffeeData.filter((item) => item.name == name)
      setfilterdata(adddata)
    }

    // setTimeout(() => {
    //   setloading(false);
    // }, 2000);
  }
  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 3000)

  }, [loading])

  const searchdata = (txt) => {
    setloading(true)
    if (txt) {
      let newdata = CoffeeData.filter((item) =>
        item.name.toLowerCase().includes(txt.toLowerCase()))
      setfilterdata(newdata)

    } else {
      setfilterdata(CoffeeData)



    }
    // setTimeout(() => {
    //   setloading(false);
    // }, 2000)
  }
  const debouncedata = useMemo(() => debounce(searchdata, 300), [CoffeeData])
  const handlesearch = (txt) => {
    setsearch(txt)
    debouncedata(txt)

  }

  return (
    <MyContext.Provider value={filterdata}>
      <SafeAreaView
        style={{ ...GST.MAIN, paddingRight: 0 }}
        keyboardShouldPersistTaps="handled"
      >

        <View style={{ paddingRight: '4.5%', }}>
          <Header
          />

          <Text style={{ ...GST.heading, fontSize: RF(28), marginTop: RF(8) }}>Find the best{"\n"}
            coffee for you</Text>
          <CustomTextinput

            lefticon
            source={require("../assets/app_images/search-normal.png")}
            placeholder={"Find Your Coffee..."}
            value={search}
            onChangeText={(txt) => {
              handlesearch(txt);
            }
            }

          />
        </View>

        <View >
          <FlatList
            data={uniqueCategories}
            horizontal
            renderItem={(items) => (
              <TouchableOpacity style={{ marginTop: RF(10) }}
                onPress={() => selected(items.item)}
              >
                <Text style={{ ...GST.subdescription, color: selectcategroies == items.item ? AppColors.primaryOrangeHex : AppColors.primaryLightGreyHex }}>{items.item}</Text>
              </TouchableOpacity>
            )
            }
            contentContainerStyle={{ gap: RF(15) }}
          />
        </View>
        {loading ?
          <Coffeeanimation
          />
          :
          <Cardslist
            data={filterdata}
            navigation={navigation}
          />
        }
        {
          filterdata.length == 0 || loading ?
            <View style={{ paddingVertical: RF(85), ...GST.CENTER }}>
              <Text style={GST.subdescription}>no item found</Text>

            </View> : null

        }

        <Text style={{ ...GST.description, marginTop: RF(10) }}>Coffee beans</Text>
        <Cardslist
          data={BeansData}
          navigation={navigation}

        />
      </SafeAreaView>
    </MyContext.Provider>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  maincontainer: {
    paddingRight: 0
  },

})