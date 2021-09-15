import React, {useEffect, useState} from "react";
import {Button, FlatList, Text, View} from "react-native";
import {StyleSheet} from 'react-native'
import {getUsers} from "../../services/services";
const User = (props) =>{
    let {item,nav:{navigate}} = props
    const onPress = () => {
        navigate('uDetails',{data:item})
    }
    return<View>
        <Text style={styles.box}>
            {item.name}
        </Text>
        <Button title={'details'} onPress={onPress}/>
    </View>
}
export default User
let styles = StyleSheet.create({
    box:{
        flex:1,
        backgroundColor:'blue',
        marginBottom: 10,
        height:200,
        width:'100%'
    }
})