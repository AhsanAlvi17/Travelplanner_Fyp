import { View, Text, Button ,fontSize} from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


function IconScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FontAwesome5 name={'comments'} size={100}/>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }
  export default IconScreen;