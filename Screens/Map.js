
import React, { useState, useEffect } from 'react';
import {  StyleSheet, View } from 'react-native';
import MapView, { Marker, } from 'react-native-maps';
export default function Map({ route }) {
    const [position, setPosition] = useState({
        latitude: 33.6660103,
        longitude: 73.1531032,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
    });
    
    React.useEffect(() => {
        var a = parseFloat(route.params?.longitude);
        var b = parseFloat(route.params?.latitude);
        
        setPosition({
            latitude: b,
            longitude: a,
            latitudeDelta: 0.0421,
            longitudeDelta: 0.0421,
          });
    }, []);

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
        ...StyleSheet.absoluteFillObject,
    },

});
