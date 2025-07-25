import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList, SafeAreaView } from 'react-native'
import React, { useContext, useState } from 'react'
import { GST } from '../utils/Globalstyle'
import Header from '../Components/Header'
import PaymentFooter from '../Components/PaymentFooter'
import { AppColors, RF } from '../utils/Responsive'
import LinearGradient from 'react-native-linear-gradient'
import PopupAnimation from '../Components/PopupAnimation'
import { FormContext } from '../utils/Wrappercontext'

const PaymentScreen = ({ navigation }) => {
  const [payment, setpayment] = useState('card')
  const [showAnimation, setShowAnimation] = useState(false);
  const {dispatch,state}=useContext(FormContext)
   const order = {
      items: state.cart,
      totalAmount: state.TotalPrice,
      date: new Date().toISOString(),
    };
  const PaymentList = [
    {
      name: 'Wallet',
      icon: require("../assets/app_images/wallet.png")
    },
    {
      name: 'Google Pay',
      icon: require('../assets/app_images/gpay.png'),

    },
    {
      name: 'Apple Pay',
      icon: require('../assets/app_images/applepay.png'),
    },
    {
      name: 'Amazon Pay',
      icon: require('../assets/app_images/amazonpay.png'),

    },
  ];
  const buttonPressHandler = () => {
    setShowAnimation(true);
     dispatch({type:"Order_History", payload: order})
     dispatch({type:"Clear_Cart"})
    setTimeout(() => {
      setShowAnimation(false);
      navigation.navigate('OrderHistoryScreen');
    }, 3000);
    console.log("order",order)
  };


  return (
    <SafeAreaView style={GST.MAIN}>
      <Header
        Screenname={"Payment"}
      />
      {showAnimation ? (
        <PopupAnimation
          style={styles.LottieAnimation}
          source={payment == 'card' ? require('../assets/LottieAnimation/Payment.json') : require('../assets/LottieAnimation/Successful.json')}
        />
      ) : (
        <></>
      )}
      <TouchableOpacity
        style={{ height: RF(230), width: "100%", borderWidth: 2, borderColor: payment == 'card' ? AppColors.primaryOrangeHex : "#262B33", padding: "2.5%", borderRadius: RF(20) }}
        onPress={() => setpayment('card')}
      >
        <Text style={GST.subdescription}>Credit Card</Text>
        <Image
          source={require("../assets/app_images/card.png")}
          style={{ height: "92%", width: "100%", resizeMode: "contain", alignSelf: "center" }}

        />
      </TouchableOpacity>
      <FlatList
        data={PaymentList}
        renderItem={(item) => (
          <TouchableOpacity
            onPress={() => setpayment(item.item.name)}
          >
            <LinearGradient
              colors={['rgba(37, 42, 50, 1)', 'rgba(38, 43, 51, 0)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{ paddingVertical:RF(8), width: "100%", borderRadius: RF(20), flexDirection: "row", padding: RF(10), gap: RF(15), marginTop: RF(10), borderWidth: 2, overflow: "hidden", borderColor: payment == item.item.name ? AppColors.primaryOrangeHex : "#262B33" }}
            >
              <Image
                source={item.item.icon}
                style={{ height: RF(20), width: RF(20) }}
                resizeMode='contain'
              />
              <Text style={GST.subdescription}>{item.item.name}</Text>
            </LinearGradient>

          </TouchableOpacity>
        )}
      />
      <View style={{ width: "100%" }}>
        <PaymentFooter
          Price={"price"}
          money={"4.29"}
          title={"Pay from Credit Card"}
          navigation={buttonPressHandler}

        />
      </View>
    </SafeAreaView>
  )
}

export default PaymentScreen

const styles = StyleSheet.create({
  LottieAnimation: {
    flex: 1,
  },
})