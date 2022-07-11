import React, { useState, useEffect } from 'react';
import { View, Button, TextInput, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import API from '../API';

//import { createNativeStackNavigator } from '@react-navigation/native-stack'
//import { NavigationContainer } from '@react-navigation/native'
const Login = ({ navigation }) => {
    const [name, setname] = React.useState("")

    const [password, setPassword] = React.useState("")
    const handleLogin = async () => {
       // 192.168.43.242
       //192.168.18.8
       //192.168.43.242

        fetch(`http://${API}/Final/api/Users/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'content-Type': 'application/json',

            },
            body: JSON.stringify({
                U_password: password,
                U_name:name,

            }),
        })
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson)
                if (responseJson.U_name == name) { navigation.navigate("Drawershow") }
                <Button onPress={() => navigation.navigate('Signup')} title='Signup' />

                   if(responseJson.U_name==name)
                    //  if(responseJson.user_type=='HomeScreen'){
                    //      navigation.navigate('HomeScreen');
                    //  }
                    //else
                    {
                //          navigation.navigate('Drawershow');
                        global.U_name=responseJson.U_name;
                         console.log(responseJson.U_name);

                //alert(global.U_name);
                //    }
                     }
            })

    };

    return (
        <>
            <View>
                <Image style={styles.image} source={require('../images/logo.png')} />
            </View>
            <TextInput style={styles.input} value={name} onChangeText={(name) => { setname(name) }} placeholder='name' />
            <TextInput style={styles.input} value={password} onChangeText={(pass) => { setPassword(pass) }} placeholder='Password' />
            
            
            
            
            <Button onPress={handleLogin} title='Login' />
            <View style={styles.already}>
                <Text style={styles.txt}>Don't have account get Signup </Text>
            </View>



            <View style={styles.login}>
                <Button onPress={() => navigation.navigate('Signup')} title='Signup' />
            </View>
        </>
    );

}

export default Login;
const styles = StyleSheet.create({
    body: {
        flex: 10,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',


    },
    txt: {
        fontWeight: '400',
        fontSize: 15,
        color: '#000000',
        marginTop: 10,
        marginLeft: 100,
      },
    text: {
        color: '#06111C',
        fontSize: 25,
        marginBottom: 50,


    },
    text1: {
        color: '#06111C',
        fontSize: 25,

    },
    text2: {
        color: '#06111C',
        fontSize: 15,
        marginTop: 15,


    },
    already: {
        fontFamily: "Arial",
        textDecorationStyle: 'Solid',
        fontSize: "50%",
        fontWeight: "bold",
        textalign: 'Center',



    },

    login: {
        top: 10,


    },

    image: {
        width: 500,
        height: 200,
        //alignItems:'center',
        //alignContent:'center',
        marginTop: 30,
        marginLeft: '-15%'


    },
    input: {
        width: 300,
        borderWidth: 1,
        alignContent: 'center',
        borderColor: '#000000',
        marginBottom: 30,
        borderRadius: 18,
        marginLeft: '10%',
        fontSize: 19,
    },
    button: {
        width: 120,
        backgroundColor: '#ADD8E6',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10

    },






});