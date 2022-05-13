import * as React from 'react';
//import { Text, View,ScrollView, } from 'react-native';
import { Text, ScrollView, StyleSheet, Image, View, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';
import { Button, Searchbar } from 'react-native-paper';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Login from './Login';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function DashScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);


  return (
    <ScrollView style={styles.ScrollView}>

      <SafeAreaView>
        <View style={{ backgroundColor: "gray", marginTop: 10, padding: 10 }}>
          <View style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

            <Image style={{ width: 90, height: 100 }} source={require('../images/mainlogo.jpg')} />

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
              <Button icon="mosque" mode="contained" onPress={() => console.log('Pressed')}>Historical</Button>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 10, marginHorizontal: 20 }}>

          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>




        <View style={styles.actionButtons}>



          <TouchableOpacity
            onPress={() => handleLogin()}
          >
            <Text style={{ borderWidth: 1, color: "white", marginLeft: 60, backgroundColor: 'blue', borderRadius: 20, padding: 10 }}>Search</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Notifications')} 
          >
            <Text style={{ borderWidth: 1, color: "white", backgroundColor: 'blue', borderRadius: 20, padding: 10 }}>Add Place</Text>
          </TouchableOpacity>
        </View>

        {/* <Button onPress={() => navigation.navigate('Signup')} title='Upload' />


          <Button onPress={() => navigation.navigate('Signup')} title='Search' />

          <Button onPress={() => navigation.navigate('Signup')} title='Verify place' /> */}

        <View style={{ position: "relative", marginBottom: 20, borderWidth: 2, marginLeft: 10, borderColor: "green", marginRight: 10, flexDirection: 'row' }}>
          <Image style={styles.image} source={require('../images/dino.jpeg')} />
          <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
            <Text style={{ color: 'black', fontWeight: 'bold', justifyContent: 'space-between', margintop: -10 }}><Text style={{ color: 'red' }}>Ammusment:</Text>Dinno Valley</Text>
            <Text style={{ color: 'black', fontWeight: 'bold' }}><Text style={{ color: 'red', }}>Location: </Text>Islamabad</Text>
            <Text style={{ color: 'black', fontWeight: 'bold' }}><Text style={{ color: 'red' }}>Ticket:</Text>400</Text>
            <Text style={{ color: 'black', fontWeight: 'bold' }}><Text style={{ color: 'red' }}>Opening Time :</Text> 10AM</Text>
            <Text style={{ color: 'black', fontWeight: 'bold' }}><Text style={{ color: 'red' }}>Closing Time:</Text> 6PM</Text>

          </View>
        </View>


        {/* <View style={{ position: "relative", marginBottom: 20 }}>
          <Image style={styles.image} source={require('../images/dino.jpeg')} />
          <Text style={styles.caption}>
            Dino Valley Amusement park in Pakistan
          </Text>
        </View> */}


        {/* <View>
          <Image style={styles.image} source={require('../images/tuscany.jpg')} />
          <Text style={styles.caption}>
            Best Italian cuisine restaurants in Islamabad.

          </Text>
        </View> */}
        <View style={{ position: "relative", flexDirection: 'row', marginBottom: 20, borderWidth: 2, marginLeft: 10, marginRight: 10, borderColor: 'green', padding: 5 }}>
          <Image style={styles.image} source={require('../images/tuscany.jpg')} />
          <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
            <Text style={{ color: 'black', fontWeight: 'bold', justifyContent: 'space-between' }}><Text style={{ color: 'red' }}>Hotel :</Text>Tuscany</Text>
            <Text style={{ color: 'black', fontWeight: 'bold' }}><Text style={{ color: 'red' }}>Location: </Text>Islamabad</Text>
            <Text style={{ color: 'black', fontWeight: 'bold' }}><Text style={{ color: 'red' }}>Special Dishes:</Text> Italian Food</Text>
            <Text style={{ color: 'black', fontWeight: 'bold' }}><Text style={{ color: 'red' }}>Opening Time :</Text> 10AM</Text>
            <Text style={{ color: 'black', fontWeight: 'bold' }}><Text style={{ color: 'red' }}>Closingg Time:</Text> 11PM</Text>

          </View>

        </View>

      </SafeAreaView>

    </ScrollView>
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


















const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (

    <Tab.Navigator
      initialRouteName="Home"
      activeColor="red"
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: 'lightgray',
        activeBackgroundColor: '#c4461c',
        inactiveBackgroundColor: '#b55031',
        style: {
          backgroundColor: '#CE4418',
          paddingBottom: 3,
        }
      }}

    >
      <Tab.Screen
        options={{
          tabBarLabel: 'home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
        name="Shop Travel" component={HomeScreen} />
      <Tab.Screen
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
        name="Settings" component={SettingsScreen} />
    </Tab.Navigator>

  );
}
