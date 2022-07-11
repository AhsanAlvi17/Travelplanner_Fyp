
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { NavigationContainer } from '@react-navigation/native';
import DashScreen from './DashScreen';
// import AddPlaces from './AddPlaces';
import PrivacyScreen from './PrivacyScreen';

const Drawer = createDrawerNavigator();
export default function Drawershow() {
   
        return (

            <Drawer.Navigator>
    
                <Drawer.Screen name="Dashboard" component={DashScreen} />
                {/* <Drawer.Screen name="Addplaces" component={AddPlaces} /> */}
                
                 <Drawer.Screen name="Privacy" component={PrivacyScreen} /> 
               

            </Drawer.Navigator>
        )
    }

