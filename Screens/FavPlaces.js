import React, { useState, useEffect, } from 'react';
import { Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Text,  StyleSheet, View, TouchableOpacity, FlatList, TextInput,Rating } from 'react-native';
import API from '../API';

export default function FavPlaces({ navigation,route}) {
    //  const [data, setdata] = useState([]);
    const [data, setdata] = useState([]);
    
      const [text, settext] = useState('');
      useEffect(() => {
        
        fetch(`http://${API}/Final/api/addplace/Allfav?U_name=`+global.U_name, {
          method: 'Post',
          headers: {
            Accept: 'application/json',
            'content-Type': 'application/json',
          },
        })  
          .then(response => response.json())
          .then(responseJson => {
            setdata(responseJson)
            console.log("----response",responseJson)
          })
    
      }, []);
    
    
    
        
     
      return (
        <>
        
          
            <FlatList
              //data={data.filter(b => b.p_name.includes(text))}
              // data={data.filter(b => b.city.includes(text) ) }
              data={data}
    
              //keyExtractor={item => item.id}
              renderItem={({ item }) =>
                <View>
    
                  <Image source={{ uri: item.p_image}}
                    resizeMode='stretch'
                    resizeMethod='resize'
                    // style={{ width: 350, height: 200 }}
                    style={{ width: 250, height: 250, borderRadius: 20 ,marginLeft:43,marginTop:10}}

                  />
                <Text style={{textAlign:"center",color:'red' }}>{item.p_name}</Text>
                <Text style={{textAlign:"center",size:"20" }}>City: {item.city}</Text>
                <Icon name='star' color={'red'} size={20}style={{ marginLeft:200}} />


                <Text style={{ marginLeft:210}}>{item.Rating}</Text>
    
                </View>
              }
            />
          </>
    
      );
    }
    
    
    const styles = StyleSheet.create({
    
      body: {
        flex: 10,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
    
      },
      menuBtn: {
        width: 200
      },
      actionButtons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 10,
        marginBottom: 10,
      },
      button: {
        width: 120,
        backgroundColor: 'red',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10
    
      },
      login: {
        top: 10,
    
      },
      login1: {
        top: -25,
        marginRight: 250
      },
      login2: {
        bottom: 60,
        marginRight: -250
      },
    
    
      image: {
        width: 150,
        height: 150,
        margininBottom: 20,
        borderWidth: 2,
        borderRadius: 32
        //alignItems: 'center',
        //alignContent:'center',
        // marginTop: 118,
        //marginLeft: "20",
        //marginVertical:12
        // justifyContent: "center"
    
    
    
      },
      caption: {
        fontSize: 16,
        fontWeight: "bold",
        bottom: 1,
        alignContent: "center",
        padding: 10,
        color: "white",
        position: 'absolute',
        backgroundColor: "grey",
    
      },
    
    });
    