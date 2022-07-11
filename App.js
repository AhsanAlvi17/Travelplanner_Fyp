import React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import DashScreen from './Screens/DashScreen';
import LoginScreen from './Screens/Login';
import PrivacyScreen from './Screens/PrivacyScreen';
import SignupScreen from './Screens/Signup';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Drawershow from './Screens/Drawershow';
import Map from './Screens/Map';
import Rating  from './Screens/Rating';
import Privates  from './Screens/Privates';
import Showcat from './Screens/Showcat';
import FavPlaces from './Screens/FavPlaces';
import AddPlaces from './Screens/AddPlaces';

const Stack = createNativeStackNavigator();

export default function MyStack(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Drawershow"
          component={Drawershow}
          options={{headerShown: false}}
        />
         <Stack.Screen name="Signup" component={SignupScreen} />
         <Stack.Screen name="Map" component={Map} />
         <Stack.Screen name="Rating" component={Rating} />
         <Stack.Screen name="Privates" component={Privates} />
         <Stack.Screen name="Showcat" component={Showcat} />
      <Stack.Screen name="FavPlaces" component={FavPlaces} />
      <Stack.Screen name="AddPlaces" component={AddPlaces} />

         {/* <Stack.Screen name="Privarcy" component={Privarcy} /> */}


{/* 
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddPlaces" component={AddPlaces} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  )
};

// const Drawer = createDrawerNavigator();


// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator>
//         <Drawer.Screen name="Home" component={HomeScreen} />
       
//          {/* <Drawer.Screen name="Signup" component={SignupScreen} />  */}
//         <Drawer.Screen name="Dash" component={DashScreen} />
//         <Drawer.Screen name="Add Places" component={AddPlaces} />
//          {/* <Drawer.Screen name="Privacy" component={PrivacyScreen} />  */}
//       </Drawer.Navigator>
//     </NavigationContainer>

//   );
// }
