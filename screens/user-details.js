import React, {useEffect, useState} from "react";
import {FlatList, Text, View} from "react-native";
import {StyleSheet} from 'react-native'
const UsersDetails = (props) =>{
   let {route:{params:{data}},navigation} = props
    return <View>
        <Text>{data.id} - {data.name} - {data.email}</Text>
    </View>
}
export default UsersDetails
let styles = StyleSheet.create({})