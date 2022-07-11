// import { View, Text, Button } from 'react-native'
// import React from 'react'

// function PrivarcyScreen({ navigation }) {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Button onPress={() => navigation.goBack()} title="Go back home" />
//       </View>
//     );
//   }
//   export default PrivarcyScreen;
// import * as React from 'react';
// import { Checkbox } from 'react-native-paper';

// function PrivarcyScreen ({ navigation})  {
//   const [checked, setChecked] = React.useState(false);

//   return (
//     <Checkbox
//       status={checked ? 'checked' : 'unchecked'}
//       onPress={() => {
//         setChecked(!checked);
//       }}
//     />
//   );
// };

// export default PrivarcyScreen;
// import { CurrentRenderContext } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';

import { View, Button, TextInput, TouchableOpacity,FlatList, StyleSheet, Image, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import API from '../API';

export default function Map(){
const [data, setdata] = useState([]);
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

}, []);
    return (
        <View style={styles.mapcontainer}>
   <MapView
       provider={PROVIDER_GOOGLE}
       style={styles.map}
       initialRegion={{
         latitude: 33.6844,
         longitude:73.0479,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
       showUserLocation={true} >
     
     
     { data.map(item => (
<Marker coordinate={{
  latitude: parseFloat(item.latitude),
  longitude: parseFloat(item.longitude),
}}
/>

       ))}
{/* <Marker coordinate={{
            latitude: parseFloat(item.latitude),
            longitude: parseFloat(item.longitude),
          }}
          /> */}
        
       
      {/* //  <Marker coordinate={{ */}
      {/* //    latitude: 33.6844,
      //    longitude:73.0479,
      //  }}  /> */}
   </MapView>
</View>
    
      );
    };

const styles = StyleSheet.create({
    mapcontainer: {
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
  },
  map: {
        ...StyleSheet.absoluteFillObject,
  },

});



// import React, { Fragment, Component } from 'react';
// import ImagePicker from 'react-native-image-picker';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
//   Image,
//   Button,
//   Dimensions,
//   TouchableOpacity
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const options = {
//   title: 'Select Avatar',
//   customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
//   storageOptions: {
//     skipBackup: true,
//     path: 'images',
//   },
// };



// export default class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       filepath: {
//         data: '',
//         uri: ''
//       },
//       fileData: '',
//       fileUri: ''
//     }
//   }

//   chooseImage = () => {
//     let options = {
//       title: 'Select Image',
//       customButtons: [
//         { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
//       ],
//       storageOptions: {
//         skipBackup: true,
//         path: 'images',
//       },
//     };
//     ImagePicker.showImagePicker(options, (response) => {
//       console.log('Response = ', response);

//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//         alert(response.customButton);
//       } else {
//         const source = { uri: response.uri };

//         // You can also display the image using data:
//         // const source = { uri: 'data:image/jpeg;base64,' + response.data };
//         // alert(JSON.stringify(response));s
//         console.log('response', JSON.stringify(response));
//         this.setState({
//           filePath: response,
//           fileData: response.data,
//           fileUri: response.uri
//         });
//       }
//     });
//   }

  // launchCamera = () => {
  //   let options = {
  //     storageOptions: {
  //       skipBackup: true,
  //       path: 'images',
  //     },
  //   };
  //   ImagePicker.launchCamera(options, (response) => {
  //     console.log('Response = ', response);

  //     if (response.didCancel) {
  //       console.log('User cancelled image picker');
  //     } else if (response.error) {
  //       console.log('ImagePicker Error: ', response.error);
  //     } else if (response.customButton) {
  //       console.log('User tapped custom button: ', response.customButton);
  //       alert(response.customButton);
  //     } else {
  //       const source = { uri: response.uri };
  //       console.log('response', JSON.stringify(response));
  //       this.setState({
  //         filePath: response,
  //         fileData: response.data,
  //         fileUri: response.uri
  //       });
  //     }
  //   });

  // }

  // launchImageLibrary = () => {
  //   let options = {
  //     storageOptions: {
  //       skipBackup: true,
  //       path: 'images',
  //     },
  //   };
  //   ImagePicker.launchImageLibrary(options, (response) => {
  //     console.log('Response = ', response);

  //     if (response.didCancel) {
  //       console.log('User cancelled image picker');
  //     } else if (response.error) {
  //       console.log('ImagePicker Error: ', response.error);
  //     } else if (response.customButton) {
  //       console.log('User tapped custom button: ', response.customButton);
  //       alert(response.customButton);
  //     } else {
  //       const source = { uri: response.uri };
  //       console.log('response', JSON.stringify(response));
  //       this.setState({
  //         filePath: response,
  //         fileData: response.data,
  //         fileUri: response.uri
  //       });
  //     }
  //   });

  // }

  // renderFileData() {
  //   if (this.state.fileData) {
  //     return <Image source={{ uri: 'data:image/jpeg;base64,' + this.state.fileData }}
  //       style={styles.images}
  //     />
  //     // } else {
  //     //   return <Image source={require('./assets/dummy.png')}
  //     //     style={styles.images}
  //     //   />
  //   }
  // }

  // renderFileUri() {
  //   if (this.state.fileUri) {
  //     return <Image
  //       source={{ uri: this.state.fileUri }}
  //       style={styles.images}
  //     />
  //   } else {
  //     return <Image
  //       //source={require('./assets/galeryImages.jpg')}
  //       style={styles.images}
  //     />
  //   }
  // }

//   render() {
//     return (
//       <Fragment>
//         <StatusBar barStyle="dark-content" />
//         <SafeAreaView>
//           <View style={styles.body}>
//             <Text style={{ textAlign: 'center', fontSize: 20, paddingBottom: 10 }} >Pick Images from Camera & Gallery</Text>
//             <View style={styles.ImageSections}>
//               <View>
//                 {this.renderFileData()}
//                 <Text style={{ textAlign: 'center' }}> Upload Image</Text>
//               </View>
//               {/* <View>
//                 {this.renderFileUri()}
//                 <Text style={{textAlign:'center'}}>File Uri</Text>
//               </View> */}
//             </View>

//             <View style={styles.btnParentSection}>
//               <TouchableOpacity onPress={this.chooseImage} style={styles.btnSection}  >
//                 <Text style={styles.btnText}>Choose File</Text>
//               </TouchableOpacity>

//               {/* <TouchableOpacity onPress={this.launchCamera} style={styles.btnSection}  >
//                 <Text style={styles.btnText}>Directly Launch Camera</Text>
//               </TouchableOpacity>

//               <TouchableOpacity onPress={this.launchImageLibrary} style={styles.btnSection}  >
//                 <Text style={styles.btnText}>Directly Launch Image Library</Text>
//               </TouchableOpacity> */}
//             </View>

//           </View>
//         </SafeAreaView>
//       </Fragment>
//     );
//   }
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },

//   body: {
//     backgroundColor: Colors.white,
//     justifyContent: 'center',
//     borderColor: 'black',
//     borderWidth: 1,
//     height: Dimensions.get('screen').height - 20,
//     width: Dimensions.get('screen').width
//   },
//   ImageSections: {
//     display: 'flex',
//     flexDirection: 'row',
//     paddingHorizontal: 8,
//     paddingVertical: 8,
//     justifyContent: 'center'
//   },
//   images: {
//     width: 150,
//     height: 150,
//     borderColor: 'black',
//     borderWidth: 1,
//     marginHorizontal: 3
//   },
//   btnParentSection: {
//     alignItems: 'center',
//     marginTop: 10
//   },
//   btnSection: {
//     width: 225,
//     height: 50,
//     backgroundColor: '#DCDCDC',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 3,
//     marginBottom: 10
//   },
//   btnText: {
//     textAlign: 'center',
//     color: 'gray',
//     fontSize: 14,
//     fontWeight: 'bold'
//   }
// });

// import Geolocation from '@react-native-community/geolocation';
// import MapView, { Marker, } from 'react-native-maps';
// import { View, TextInput, Alert, StyleSheet, Image, Button, ScrollView, Text, TouchableOpacity, ToastAndroid, FlatList } from 'react-native'
// import React, { useState, useEffect } from 'react';
// import API from '../API';

// export default function Map() {

// const [position, setPosition] = useState({
//   latitude: 33.6844,
//   longitude: 73.0479,
//   latitudeDelta: 0.001,
//   longitudeDelta: 0.001,
// });

// useEffect(() => {
//   Geolocation.getCurrentPosition((pos) => {
//     const crd = pos.coords;
//     setPosition({
//       latitude: crd.latitude,
//       longitude: crd.longitude,
//       latitudeDelta: 0.0421,
//       longitudeDelta: 0.0421,
//     });

//   }).catch((err) => {
//     console.log(err);
//   });
// }, []);

// const [data, setdata] = useState([]);
// useEffect(() => {
//   fetch(`http://${API}/Final/api/addplace/Status`, {
//     method: 'GET',
//     headers: {
//       Accept: 'application/json',
//       'content-Type': 'application/json',
//     },
//   })
//     .then(response => response.json())
//     .then(responseJson => {
//       setdata(responseJson)
//       console.log("----response", responseJson)
//     })

// }, []);

// const [curentPosition, setCurentPosition] = useState({
//   latitudeDelta: 0.0922,
//   longitudeDelta: 0.0421, latitude: 33.6844,
//   longitude: 73.0479,
// });
// // /69.3451
// const onMapPress = (e) => {
//   // alert("coordinates:" + JSON.stringify(e.nativeEvent.coordinate))
//   setCurentPosition({
//     ...curentPosition,
//     latitude: e.nativeEvent.coordinate.latitude,
//     longitude: e.nativeEvent.coordinate.longitude
//   })
// }
// return (
//   <ScrollView>
//     <View>
//       {/* MAP Code */}
//       <View style={styles.mapcontainer}>
//         <MapView
//           onPress={(e) => onMapPress(e)}
//           style={styles.map}
//           initialRegion={position}
//           showsUserLocation={true}
//           showsMyLocationButton={true}
//           followsUserLocation={true}
//           showsCompass={true}
//           scrollEnabled={true}
//           zoomEnabled={true}
//           pitchEnabled={true}
//           rotateEnabled={true}>

// <FlatList
//  data={data}

// renderItem={({ item }) =>
// <Marker coordinate={{
//             latitude: parseFloat(item.latitude),
//             longitude: parseFloat(item.longitude),
//           }}
//           />
//         }
//        ></FlatList>   
//         </MapView>

//       </View>
//       <Text style={{ color: 'red' }}>{curentPosition.latitude}</Text>
//        <Text style={{ color: 'red' }}>{curentPosition.longitude}</Text>
//          </View>
//       </ScrollView>
//   );
//       }
// const styles = StyleSheet.create({
//   body: {
//     flex: 10,
//     backgroundColor: '#FFFFFF',
//     alignItems: 'center',
//   },

//   login: {
//     top: 10
//   },
//   mapcontainer: {
//     height: 800,
//     width: 600,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   text: {
//     color: '#06111C',
//     fontSize: 25,
//     marginBottom: 50,
//   },
//   text1: {
//     color: '#06111C',
//     fontSize: 25,

//   },
//   text2: {
//     color: '#06111C',
//     fontSize: 15,
//     marginTop: 15,
//   },
//   mapcontainer: {
//     height: 500,
//     width: 600,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },

// });




