import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {TabsStackScreenProps} from "../Navigation/TabsNavigator"


const HomeScreen = ({navigation, route}:TabsStackScreenProps<"Home">) => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})