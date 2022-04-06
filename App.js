import React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen';
import NotificationsScreen from './Screens/NotificationsScreen';
import DashScreen from './Screens/DashScreen';
import LoginScreen from './Screens/Login';
import PrivacyScreen from './Screens/PrivacyScreen';
import SignupScreen from './Screens/Signup';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Signup" component={SignupScreen} />
        <Drawer.Screen name="Dash" component={DashScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Privacy" component={PrivacyScreen} />
      </Drawer.Navigator>
    </NavigationContainer>

  );
}
