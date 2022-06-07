
import { View, TextInput, Alert, StyleSheet, Image, Button, ScrollView, Text, TouchableOpacity, ToastAndroid, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react';
import { CheckBox } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import DocumentPicker from 'react-native-document-picker';
import MapView, { Marker, } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const AddPlaces = ({ navigation }) => {
  //const [U_id, setU_id] = React.useState('');
  const [U_name, setU_name] = React.useState('');
  const [Description, setDescription] = React.useState('');
  const [city, setcity] = React.useState('');
  const [privatestatus, setprivatestatus] = React.useState();
  const [one, setone] = useState(false);
  const [two, settwo] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [image, setimage] = useState();

  const [items, setItems] = useState([
    { label: 'Hotel', value: 'Hotel' },
    { label: 'Park', value: 'Park' },
    { label: 'Restaurant', value: 'Restaurant' },
    { label: 'Historical ', value: 'Historical ' }
  ]);
  const [position, setPosition] = useState({
    latitude: 33.6660103,
    longitude: 73.1531032,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });
  useEffect(() => {
    Geolocation.getCurrentPosition((pos) => {
      const crd = pos.coords;
      setPosition({
        latitude: crd.latitude,
        longitude: crd.longitude,
        latitudeDelta: 0.0421,
        longitudeDelta: 0.0421,
      });
 
    }).catch((err) => {
      console.log(err);
    });
  }, []);
  const checkbox1 = () => {
    setone(true);
    settwo(!true);
    setprivatestatus("Private")
    ToastAndroid.show("private", 500)
  }
  const checkbox2 = () => {
    settwo(true);
    setone(!true);
    setprivatestatus("Public")
    ToastAndroid.show("public", 500)

  }
  
  //{Image upload }
  const selectFile = async () => {
    try {
      const res = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.allFiles],
        //There can me more options as we
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      const obj = Object.assign({}, ...res)
      
      uploadimage(obj);
      setimage(obj.uri)
      //Printing the log realted to the file
      // console.log('res : ' + JSON.stringify(res));
      // console.log('URI : ' + res.uri);
      // console.log('Type : ' + res.type);
      // console.log('File Name : ' + res.name);
      // console.log('File Size : ' + res.size);
      //Setting the state to show single file attributes
      //this.setState({ singleFile: res });
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        // alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        // alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };
  // image upload in api
  async function uploadimage(obj) {
    
    const data = new FormData();
    data.append('picture', {
      name: obj.name,
      type: obj.type,
      uri: obj.uri
    });
    try {
      let response = await fetch('http://192.168.18.8/Final/api/Uploadimage/UploadFile', {
        method: 'POST',
        body: data,
        headers: {
          'content-Type': 'multipart/form-data',
        }
      })
      let json = await response.json()
      ToastAndroid.show("image is add", 2000)
    } catch (e) {
      console.log(e) 
    }
  }
  // add places
  const _sendplaces = () => {
//192.168.18.8
    fetch('http://192.168.18.8/Final/api/addplace/Addplaces', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'content-Type': 'application/json',

      },
      body: JSON.stringify({
        p_name: U_name,
        Description: Description,
        city: city,
        p_image: image,
        status: privatestatus,
        catg: value,
        latitude: curentPosition.latitude,
        longitude: curentPosition.longitude
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        ToastAndroid.show("Location is add", 2000)
        navigation.navigate("Dashboard",{locationAdded:true})

      })

  }
  const [curentPosition, setCurentPosition] = useState({
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421, latitude: 33.6844,
    longitude: 73.0479,
  });

  const onMapPress = (e) => {
    // alert("coordinates:" + JSON.stringify(e.nativeEvent.coordinate))
    setCurentPosition({
      ...curentPosition,
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude
    })

  }

  return (
    <ScrollView>
      <View>
        {/* MAP Code */}
        <View style={styles.mapcontainer}>
          <MapView
            onPress={(e) => onMapPress(e)}

            style={styles.map}
            initialRegion={position}
            showsUserLocation={true}
            showsMyLocationButton={true}
            followsUserLocation={true}
            showsCompass={true}
            scrollEnabled={true}
            zoomEnabled={true}
            pitchEnabled={true}
            rotateEnabled={true}>
            <Marker coordinate={{
              latitude: parseFloat(curentPosition.latitude),
              longitude: parseFloat(curentPosition.longitude),
            }}

            />

          </MapView>

        </View>
        <Text style={{ color: 'red' }}>{curentPosition.latitude}</Text>
        <Text style={{ color: 'red' }}>{curentPosition.longitude}</Text>
        <TextInput style={styles.input} onChangeText={(U_name) => setU_name(U_name)} placeholder='Name of Place' />
        <TextInput style={styles.input} onChangeText={(Description) => setDescription(Description)} placeholder='Description' />
        <TextInput style={styles.input} onChangeText={(city) => setcity(city)} placeholder='City' />
        {/* Checkbox  */}
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 20 }}>Private</Text>
          <CheckBox
            //status={checked?'checked':'unchecked'}
            onPress={() => checkbox1()}
            checked={one}
          />
          <Text style={{ fontSize: 20 }}>public</Text>
          <CheckBox
            onPress={() => checkbox2()}
            checked={two}
          />
        </View>
      </View>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
      <View style={styles.container}>
        <Image
          source={{
            uri: image
          }}
          style={{ width: 200, height: 200 }}
        />

        {/* <Image
           source={{ uri: imagePath?.uri }}
          style={{ width: 200, height: 200,}}
        /> */}
        <TouchableOpacity onPress={selectFile} style={styles.button}  >
          <Text style={styles.buttonText}>Select File</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={_sendplaces} style={styles.button1}  >
          <Text style={styles.buttonText}>Add Place</Text>

        </TouchableOpacity>

      </View>

      {/* <View style={{ marginTop: 10 }}> */}
      {/* <View style={{ bottom: 10 }}> */}
      {/* <Button style={{ buttom: 30 }} title="Signup" onPress={() => Alert.alert('Wellome')} /> */}
      {/* </View> */}
      {/* <View style={styles.login}>
          <Button onPress={() => navigation.navigate('Login')} title='login' />
        </View> */}

      {/* </View> */}
      {/* <View style={{flex:1}}>
      <ModalDropdown isFullWidth={true} textStyle={{fontSize:20}} dropdownTextStyle={{fontSize:20}} style={{backgroundColor:"red",padding:20}} options={['public', 'private']}/>
      </View> */}




    </ScrollView>
  );
}
export default AddPlaces;

const styles = StyleSheet.create({
  body: {
    flex: 10,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },

  login: {
    top: 10
  },
  mapcontainer: {
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
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
  // image: {
  //   width: 300,
  //   height: 200,
  //   //alignItems:'center',
  //   //alignContent:'center',
  //   marginTop: 100,
  //   marginLeft: '10%',


  // },
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
    width: 150,
    height: 60,
    marginLeft: 150,
    backgroundColor: '#3740ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    marginTop: -40
  },
  button1: {
    width: 150,
    height: 60,
    marginLeft: 150,
    backgroundColor: '#3740ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 1,
    marginTop: 100
  },

  // button: {
  //   width: 20,
  //   backgroundColor: '#ADD8E6',
  //   alignItems: 'center',
  //   borderRadius: 5,
  //   marginBottom: 10,
  //   paddingTop: 10,
  //   marginTop: 10,
  // },
  space: {
    width: 800, // or whatever size you need
    height: 100,
    marginBottom: 15,
  },

  mapcontainer: {
    height: 250,
    width: 350,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },

});
