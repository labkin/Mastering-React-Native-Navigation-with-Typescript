import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {TabsStackScreenProps} from "../Navigation/TabsNavigator"


const PaymentScreen = ({navigation, route}:TabsStackScreenProps<"payment">) => {
  return (
    <View style={{margin:70}}>
      <Text style={{color:"black", fontSize:18, textAlign:"center"}}>PaymentScreen</Text>
    </View>
  )
}

export default PaymentScreen

const styles = StyleSheet.create({})