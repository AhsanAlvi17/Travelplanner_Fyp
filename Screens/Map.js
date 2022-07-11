
import React, { useState, useEffect } from 'react';
import {  StyleSheet, View ,Image,Text,TouchableOpacity,ToastAndroid} from 'react-native';
import MapView, { Marker, } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import API from '../API';

export default function Map({ route }) {
    const [position, setPosition] = useState({
        latitude: 33.6660103,
        longitude: 73.1531032,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
    });
    const [image,setimage]=useState('');
    const [name,setname]=useState('');
    const [favorite,setfavorite]=useState(false)
    React.useEffect(() => {
        var a = parseFloat(route.params?.longitude);
        var b = parseFloat(route.params?.latitude);
        setimage(route.params?.image);
        setname(route.params?.name);
        setPosition({
            latitude: b,
            longitude: a,
            latitudeDelta: 0.0421,
            longitudeDelta: 0.0421,
          });
    }, []);
    // useEffect(() => {
    //     fetch(`http://${API}/Final/api/fav/checkfav`, {
    //       method: 'POST',
    //       headers: {
    //         Accept: 'application/json',
    //         'content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         user_id:global.U_name,
    //         p_name:name,
    //       }),
    //     })
        
    //       .then(response => response.json())
    //       .then(responseJson => {
    //         //setdata(responseJson)
    //         console.log("----response", responseJson)
    //         console.log("----re",name)

    //         const obj = Object.assign({}, ...responseJson);
    //         console.log(obj.user_id)
    //         console.log(obj.p_name)
    //        if (obj.user_id == global.U_name && obj.p_name==name){
    //         setfavorite({favorite:f})
    //        }
    //        else{
    //         setfavorite(favorite)
    //        }
           
           
    //         // console.log("dwefa"+f)
    //         // setfavorite({favorite:f})
    //       })
    
    //   }, [route.params?.locationAdded]);
     
    // const addfav=()=>{
    //     const fav="fav"
    //     fetch(`http://${API}/Final/api/fav/Addfav`, {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //         U_name :global.U_name,
    //         p_name:name,
    //         favour:fav

    //         }),
    //     })
    //         .then(response => response.json())
    //         .then(responseJson => {
    //             ToastAndroid.show("Favourite", 4000)
    //         })
    // }
     return (
        <View style={{width:"100%",height:"100%"}}>
             <MapView
                //onPress={(e) => onMapPress(e)}
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
                    latitude: position.latitude,
                    longitude: position.longitude,
                }}
                 />

            </MapView> 
            {/* <View style={{flexDirection:'column',alignContent:"center"}}>
            <Image source={{ uri:image }}
             resizeMode='contain'
             resizeMethod='resize'
             style={{ width: 150, height: 150, borderRadius: 10 ,marginLeft:10}}
            />
           <View style={{flexDirection:'row'}}>
           <Text style={{marginLeft:20}}>{name}</Text>
           <TouchableOpacity
           onPress={()=>addfav()}
           >
           <Icon
                                        name={favorite ? 'heart' : 'heart-o'}
                                        //  name={favorite ? 'heart' : ''}
                                        //  color={undefined}
                                        size={20}
                                        color='red'
                                        style={{ marginLeft: 15 }}
                                    />
           </TouchableOpacity>
           </View>
            </View> */}


        </View>
    )
}
const styles = StyleSheet.create({
    body: {
        flex: 10,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
    },

    
    map: {
        // ...StyleSheet.absoluteFillObjec,
        borderWidth:1,
        width:350,
        height:200,
        alignItems:'center',
    },

});
