import React, { useState, useEffect, } from 'react';
import { Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Text,  StyleSheet, View, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
//192.168.18.8
//192.168.43.242
export default function DashScreen({ navigation,route }) {
  const [data, setdata] = useState([]);
  const [text, settext] = useState('');
  useEffect(() => {
    fetch('http://192.168.18.8/Final/api/addplace/Allplaces', {
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

  }, [route.params?.locationAdded]);  

  return (
    <>
    {/* <ScrollView style={styles.ScrollView}> */}
      <View style={{ backgroundColor: "gray", marginTop: 10, padding: 10 }}>
        <View style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

          <Image style={{ width: 60, height: 60 }} source={require('../images/mainlogo.jpg')} />

        </View>
        <View style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>

          <View style={{ width: "49%", marginRight: 10, }}>
            <Button icon="flower" mode="contained" onPress={() => console.log('Pressed')}>
              Park
            </Button>


          </View>
          <View style={{ width: "50%", }}>
            <Button icon="tea" mode="contained" onPress={() => console.log('Pressed')}>
              restaurant</Button>

          </View>
        </View>
        <View style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
          <View style={{ width: "49%", marginRight: 10, }}>
            <Button icon="silverware" mode="contained" onPress={() => console.log('Pressed')}>
              Hotel</Button></View>
          <View style={{ width: "50%", }}>
            <Button Button icon="mosque" mode="contained" onPress={() => console.log('Pressed')}>Historical</Button>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 10, marginHorizontal: 20}}>

        <TextInput
          placeholder="Search"
          onChangeText={text => settext(text)}
        
        />
      </View>
      {/* </ScrollView> */}
      
        <FlatList
          //data={data.filter(b => b.p_name.includes(text))}
          data={data.filter(b => b.city.includes(text) ) ||(a=> a.p_name.includes(text))}

          //keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <View>

              <Image source={{ uri: item.p_image }}
                resizeMode='stretch'
                resizeMethod='resize'
                style={{ width: 350, height: 200 }}
              />
              <TouchableOpacity
              onPress={()=>navigation.navigate("Map",{longitude:item.longitude,latitude:item.latitude})}
              >
              <View style={{ flexDirection: 'row' }}>
                <Icon name='map-marker-alt' color={'red'} size={20} />
                <Text style={{marginLeft:10}}>{item.p_name}</Text>
              </View>
              </TouchableOpacity>
              <Text>{item.description}</Text>
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
