import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {TabsStackScreenProps} from "../Navigation/TabsNavigator"


const CartScreen = ({navigation, route}:TabsStackScreenProps<"cart">) => {
  return (
    <View style={{margin:70}}>
      <Text style={{color:"black", fontSize:18, textAlign:"center"}}>CartScreen</Text>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({})