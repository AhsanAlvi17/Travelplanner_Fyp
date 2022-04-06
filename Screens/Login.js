import React, { useState, useEffect } from 'react';
import { View, Button, TextInput, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack'
//import { NavigationContainer } from '@react-navigation/native'
const Login = ({ navigation }) => {
    const [email, setEmail] = React.useState("")

    const [password, setPassword] = React.useState("")
    const handleLogin = async () => {


        fetch('http://192.168.18.8/Final/api/Users/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'content-Type': 'application/json',

            },
            body: JSON.stringify({
                U_password: password,
                U_email: email,

            }),
        })
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson)
                if (responseJson.U_email == email) { navigation.navigate("Home") }
                <Button onPress={() => navigation.navigate('Signup')} title='Signup' />

                //    if(responseJson.user_email==email){
                //      if(responseJson.user_type=='HomeScreen'){
                //          window.alert("Wellcome to libraray")
                //         // this.props.navigation.dispatch(StackActions.replace('HomeScreen'))
                //          navigation.navigate('HomeScreen');

                //      }else {
                //          navigation.navigate('SignupScreen');
                //          global.user_id=responseJson.U_email;
                //         //alert(global.user_id);
                //      }
                //     }
            })











        // const requestOptions = {
        //     method: 'GET',
        //     // headers: { 'Content-Type': 'application/json' },
        //     // body:{
        //     //     U_email: email,
        //     //     U_password: password
        //     // }
        // };
        // console.log("===",requestOptions)

        // fetch('http://localhost/Final/api/Users/Allusers', requestOptions)
        //     .then(response => console.log("response",response))
        //     .catch(error => console.log("error",error))
        //     .then(data => console.log("response", data));

        // try {
        //   axios.get('http://localhost/Final/api/Users/Allusers') 
        // .then(response => console.log("response",response))
        //  .catch(error => console.log("error",error))
        //  .then(data => console.log("response", data));

        // } catch (error) {
        //     alert("An error has occurred",error);

        // }




    };

    return (
        <>
            <View>
                <Image style={styles.image} source={require('../images/logo.png')} />
            </View>
            <TextInput style={styles.input} value={email} onChangeText={(email) => { setEmail(email) }} placeholder='Email' />
            <TextInput style={styles.input} value={password} onChangeText={(pass) => { setPassword(pass) }} placeholder='Password' />
            <Button onPress={handleLogin} title='Login' />
            <View style={styles.already}>
                <Text>Don't  have  Account get Signup </Text>
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