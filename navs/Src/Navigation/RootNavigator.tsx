import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NativeStackScreenProps, createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigatorScreenParams} from "@react-navigation/native"
import TabsNavigator, { TabsStackParamList } from './TabsNavigator'
import ProductDetails from '../Screens/ProductDetails'
import CartScreen from '../Screens/CartScreen'



export type RootStackParamList = {
    TabsStack:NativeStackScreenProps<TabsStackParamList>

    productDetails: {
        _id?: string;
        images?:[string];
        name?: string;
        price?:string;
        description?:string
    }
   cart:{
        _id?: string;
        images?:[string];
        name?: string;
        price?:string;
        description?:string
        
    }
}

const RootStack = createNativeStackNavigator<RootStackParamList>();

export type RootStackScreenProps<T extends keyof RootStackParamList> =
NativeStackScreenProps<RootStackParamList, T>;

const RootNavigator = () => {


  return (
   <RootStack.Navigator>
    <RootStack.Screen name="TabsStack" component={TabsNavigator} options={{headerShown:false}} />
    <RootStack.Screen name="productDetails" component={ProductDetails} options={{headerShown:false}} />
    <RootStack.Screen name="cart" component={CartScreen} options={{headerShown:false}} />
   </RootStack.Navigator>
  )
}

export default RootNavigator

const styles = StyleSheet.create({})