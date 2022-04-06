import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const HomeScreen = ({navigation}) => {
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

export default function App() {
  return (

    <Tab.Navigator
      initialRouteName="Home"
      activeColor="red"
      // tabBarOptions={{
      //   activeTintColor: '#fff',
      //   inactiveTintColor: 'lightgray',
      //   activeBackgroundColor: '#c4461c',
      //   inactiveBackgroundColor: '#b55031',
      //   style: {
      //     backgroundColor: '#CE4418',
      //     paddingBottom: 3,
      //   }
      // }}

    >
      <Tab.Screen
        options={{
          tabBarLabel: 'Shop Travel',
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
