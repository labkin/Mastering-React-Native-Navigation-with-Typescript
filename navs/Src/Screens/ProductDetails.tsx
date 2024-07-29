import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {RootStackScreenProps} from "../Navigation/RootNavigator"

type Props = {}

const ProductDetails = ({navigation, route}:RootStackScreenProps<"productDetails">) => {
  return (
    <View>
      <Text>ProductDetails</Text>
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({})