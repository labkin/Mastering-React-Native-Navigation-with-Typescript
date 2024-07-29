import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createBottomTabNavigator, BottomTabScreenProps} from '@react-navigation/bottom-tabs'
import {CompositeScreenProps} from "@react-navigation/native"
import { RootStackScreenProps } from './RootNavigator'
import HomeScreen from '../Screens/Homescreen'
import {Entypo, AntDesign, Ionicons} from "@expo/vector-icons"
import CartScreen from '../Screens/CartScreen'
import ProfileScreen from '../Screens/ProfileScreen'
import PaymentScreen from '../Screens/PaymentScreen'



export type TabsStackParamList = {
    Home: undefined;
    cart:{
        _id?: string;
        images?:[string];
        name?: string;
        price?:string;
        description?:string
        
    }

    profile:undefined
    payment: undefined
}

const TabsStack = createBottomTabNavigator<TabsStackParamList>();

export type TabsStackScreenProps<T extends keyof TabsStackParamList> = 
CompositeScreenProps<BottomTabScreenProps<TabsStackParamList, T>,
RootStackScreenProps<"TabsStack">>

const TabsNavigator = () => {


  return (
    <TabsStack.Navigator screenOptions={{tabBarShowLabel:false}}>
        <TabsStack.Screen 
            name='Home' 
            component={HomeScreen} 
            options={{headerShown:false,
            tabBarIcon: ({focused})=>focused?(
            <Entypo name ="home" size={24} color="#008E97" /> 
            ):(
                <AntDesign name ="home" size={24} color="black" />
            )  }}
        />

        <TabsStack.Screen 
            name='cart' 
            component={CartScreen} 
            options={{headerShown:false,
            tabBarIcon: ({focused})=>focused?(
            <AntDesign name ="shoppingcart" size={24} color="#008E97" /> 
            ):(
                <AntDesign name ="shoppingcart" size={24} color="black" />
            )  }}
        />

        <TabsStack.Screen 
            name='profile' 
            component={ProfileScreen} 
            options={{headerShown:false,
            tabBarIcon: ({focused})=>focused?(
            <Ionicons name ="person" size={24} color="#008E97" /> 
            ):(
                <Ionicons name ="person-outline" size={24} color="black" />
            )  }}
        />

        <TabsStack.Screen 
            name='payment' 
            component={PaymentScreen} 
            options={{headerShown:false,
            tabBarIcon: ({focused})=>focused?(
            <Ionicons name ="card" size={24} color="#008E97" /> 
            ):(
                <Ionicons name ="card" size={24} color="black" />
            )  }}
        />
    

    </TabsStack.Navigator>
  )
}

export default TabsNavigator

const styles = StyleSheet.create({})