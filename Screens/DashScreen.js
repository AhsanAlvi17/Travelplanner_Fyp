import React, { useState, useEffect, } from 'react';
import { Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Text, StyleSheet, View, TouchableOpacity, FlatList, TextInput, Rating } from 'react-native';
import { Button } from 'react-native-paper';
import API from '../API';

//192.168.18.8
//192.168.43.242
//192.168.43.242 
//172.20.10.2
export default function DashScreen({ navigation, route }) {
   const [data, setdata] = useState([]);
   //search ky liye nechy search bar mein call howa ha
   const [chk, setchk] = useState(""); 
   
   const Addfav=(name)=>{ 
  let p_name=name;
  const U_name=global.U_name;
    const favour="fav";
    let item = {favour,U_name,p_name};
    fetch(`http://${API}/Final/api/addplace/Addfav`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'content-Type': 'application/json',

      },
      body: JSON.stringify(item)
     
    })
    .then(response => response.json())
        .then(data => {
         if(data.U_name){
          alert("Favourite data add successful")
         }
         else{
           alert("something wrong happen")
         }
        });  

      }


const [text, settext] = useState('');
//search function
const Test=( )=>{ 
  var x=`http://${API}/Final/api/addplace/Test?chec=${chk}`
  console.log(x+'123')  
  fetch(x, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'content-Type': 'application/json',

      },
    })

      .then(response => response.json())
      .then(responseJson => {
        var x=JSON.stringify(responseJson )
        var y=JSON.parse(x)
        setdata(y)
        console.log("----------------response", responseJson)
      })

  }










  useEffect(() => {
    fetch(`http://${API}/Final/api/addplace/Status`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        setdata(responseJson)
        console.log("----response", responseJson)
      })

  }, [route.params?.locationAdded]);

  return (
    <>
      {/* <ScrollView style={styles.ScrollView}> */}
      <View style={{ backgroundColor: "gray", marginTop: 10, padding: 10 }}>
        {/* <View style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Image style={{ width: 60, height: 60 }} source={require('../images/mainlogo.jpg')} />
        </View>
        <View style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
          <View style={{ width: "49%", marginRight: 10, }}>
            <Button icon="flower" mode="contained" onPress={() => navigation.navigate('Showcat', { Alvi: 'park' })}>
              parks
            </Button>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Button icon="cart" mode="contained" onPress={() => navigation.navigate('Showcat', { Alvi: 'shooping' })}>
             Shooping 
            </Button>
          </View>
        </View>
        <View style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
          <View style={{ width: "49%", marginRight: 10, }}>
            <Button icon="silverware" mode="contained" onPress={() => navigation.navigate('Showcat', { Alvi: 'Hotel' })}>
              Hotel</Button></View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Button icon="warehouse" mode="contained" onPress={() => navigation.navigate('Showcat', { Alvi: 'Historical' })}>Historical</Button>
          </View>
        </View> */}
        {/* <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Privates')}>
            <View style={{ display: "flex", flexDirection: 'row', marginTop: 10, marginLeft: '40%' }}>
              <Text >Show Favorite</Text>
              <Icon name='heart' color={'yellow'} size={25} />
            </View>

          </TouchableOpacity>
        </View> */}
        {/* <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Privates')}>
            <View style={{ display: "flex", flexDirection: 'row',marginTop: -20,  marginLeft: '80%' }}>
              <Icon name='eye-slash' color={'red'} size={25} />
            </View>

          </TouchableOpacity>
        </View> */}
        <View style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
          <View style={{ width: "49%", marginRight: 10, }}>
            <Button icon="heart" mode="contained" onPress={() => navigation.navigate('FavPlaces')}>
              Show Favourite
            </Button>
          </View>
</View>
<View style={{ display: "flex", flexDirection: "row" ,marginTop: -38}}>
          <View style={{ width: "45%", marginLeft:175, }}>
            <Button icon="plus" mode="contained" onPress={() => navigation.navigate('AddPlaces')}>
              AddPlaces
            </Button>
          </View>
</View>
<View style={{ display: "flex", flexDirection: "row" ,marginTop: 38}}>
          <View style={{ width: "45%", marginLeft:75, }}>
            <Button icon="search-web" mode="contained" onPress={()=>Test() }>
              Search
            </Button>
          </View>
</View>

      </View>
      
      <View style={{ marginTop: 10, marginHorizontal: 20 }}>

        <TextInput
          placeholder="Search"
          onChangeText={e=> setchk(e)}

        />
      </View>
      {/* </ScrollView> */}

      <FlatList
               data={data}
               //data.filter(b=>b.city.includes(text))

  //  data={data.filter(b=>b.city.toUpperCase().includes(text.toUpperCase())) || (b.p_name.toUpperCase().includes(text.toUpperCase()))}
          //(b.City.toLowerCase().includes(text.toLowerCase()))) }
         // || (b.p_name.toUpperCase().includes(text.toUpperCase())))  }
        //data={data.filter(b =>b.city.includes(text))}

        //keyExtractor={item => item.favid}
        renderItem={({ item }) =>
          <View>

            <Image source={{ uri: item.p_image }}
              // resizeMode='stretch'
              resizeMethod='resize'
              style={{ width: 350, height: 200 }}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate("Map", { longitude: item.longitude, latitude: item.latitude,image:item.p_image,name:item.p_name })}
            >
              <View style={{ flexDirection: 'row' }}>
                <Icon name='map-marker-alt' color={'red'} size={20} />

                <Text style={{ marginLeft: 10 }}>{item.p_name}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Addfav(item.p_name)}
            >
              <View style={{ flexDirection: 'row' }}>
                <Icon name='heart' color={'red'} size={20} />

                <Text style={{ marginLeft: 10 }}>Addfav</Text>
              </View>
            </TouchableOpacity>


            <TouchableOpacity
              onPress={() => navigation.navigate('Rating',{storekro:item.p_name,Rat:item.Rating,cona:item.count})}>
              <View style={{ flexDirection: 'row'}}>
                <Icon name='star' color={'red'} size={20}style={{ marginLeft:200}} />
                <Text style={{ marginLeft:10}}>{item.Rating}
                </Text>

              </View>
            </TouchableOpacity>
            {/* <Text>{item.catg}</Text> */}
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
