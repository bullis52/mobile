import React, {useEffect, useState} from "react";
import {FlatList, Text, View} from "react-native";
import {StyleSheet} from 'react-native'
import {createStackNavigator} from "@react-navigation/stack";
import Users from "../components/Users/Users";
import UsersDetails from "./user-details";
let StackNavigator = createStackNavigator()
const UserPageNavigate = () =>{
    return <StackNavigator.Navigator>
        <StackNavigator.Screen
            options={{
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
            name={'users'} component={Users}/>
        <StackNavigator.Screen name={'uDetails'} component={UsersDetails}/>
    </StackNavigator.Navigator>
}
export default UserPageNavigate
let styles = StyleSheet.create({})