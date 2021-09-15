import React, {useEffect, useState} from "react";
import {Button, FlatList, Text, View} from "react-native";
import {StyleSheet} from 'react-native'
import {getUsers} from "../../services/services";
import User from "./User";
const Users = (props) =>{
    let {navigation} = props
    let [users,setUsers] = useState([])
    useEffect(()=>{
        getUsers().then(value => setUsers([...value]))
    },[])
    return<View>
        <Text>
            <FlatList data={users}
                      keyExtractor={item => '' + item.id}
                      renderItem={({item})=> {
                          return <User item={item} nav={navigation}/>
                         }}/>
        </Text>
    </View>
}
export default Users
let styles = StyleSheet.create({})