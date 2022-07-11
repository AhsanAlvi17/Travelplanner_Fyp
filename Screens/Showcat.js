import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
//192.168.43.242
//192.168.18.8
import { Text, StyleSheet, View, TouchableOpacity, FlatList, TextInput, Rating } from 'react-native';
import { Image } from 'react-native-elements';
import API from '../API';

export default function Showcat({ navigation,route}){
    const [data, setdata] = useState([]);
    useEffect(() => {
        console.log(route.params?.Alvi)
        fetch(`http://${API}/Final/api/addplace/showcat?cat=`+route.params?.Alvi, {
          method: 'GET',
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
     
      }, [route.params?.Alvi]);
    return(
      
        <View>
        <FlatList
        // data={data.filter(b => b.p_name.includes(text))             
        //  data={data.filter(b => (b.city.toUpperCase().includes(text.toUpperCase())))}
         data={data}
       

        //keyExtractor={item => item.id}
        renderItem={({ item }) =>
          <View>

            <Image source={{ uri: item.p_image }}
              resizeMode='stretch'
              resizeMethod='resize'
              style={{ width: 350, height: 200 }}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate("Map", { longitude: item.longitude, latitude: item.latitude })}
            >
              <View style={{ flexDirection: 'row' }}>
                <Icon name='map-marker-alt' color={'red'} size={20} />

                <Text style={{ marginLeft: 10 }}>{item.p_name}</Text>
              </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => navigation.navigate('Rating', { storeKro:item.p_name })}>
              <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: '-70%' }}>
                <Icon name='star' color={'red'} size={20} />

              </View>
            </TouchableOpacity>

            {/* <Text>{item.catg}</Text> */}

            <Text>{item.description}</Text>
          </View>
        }
      />

        </View>
    )
}