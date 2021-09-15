
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import Home from "./components/Home/Home";

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import UserPageNavigate from "./screens/userPageNavigate";



let BottomTabNavigator = createBottomTabNavigator()


export default function App() {
  return (
    <NavigationContainer screenOptions={{ headerShown: false }}>
        <BottomTabNavigator.Navigator>
          <BottomTabNavigator.Screen
              options={{ headerShown: false }}
              name={'users'} component={UserPageNavigate}
          />
            <BottomTabNavigator.Screen name={'home'} component={Home}/>
            <BottomTabNavigator.Screen name={'home1'} component={Home}/>
            <BottomTabNavigator.Screen name={'home2'} component={Home}/>
            <BottomTabNavigator.Screen name={'home3'} component={Home}/>

        </BottomTabNavigator.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
