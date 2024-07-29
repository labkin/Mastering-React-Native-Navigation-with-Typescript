import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {TabsStackScreenProps} from "../Navigation/TabsNavigator"


const ProfileScreen = ({navigation, route}:TabsStackScreenProps<"profile">) => {
  return (
    <View style={{margin:70}}>
      <Text style={{color:"black", fontSize:18, textAlign:"center"}}>ProfileScreen</Text>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})