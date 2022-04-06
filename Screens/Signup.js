import { View, TextInput, Alert, StyleSheet, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react' 

//const Signup = ({ navigation }) => {

  const Signup = ({navigation}) => {
    //const [U_id, setU_id] = React.useState('');
    const [U_name, setname] = React.useState('');
    const [U_email, setemail] = React.useState('');
    const [U_password, setPassword] = React.useState('');
  
    
    const handleSignup = () => {
      if (
        U_name.trim() &&
        U_email.trim() &&
        U_password.trim()
      ) {
        navigation.navigate("Login");
        const requestOptions = {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            //U_id: U_id,
            U_name: U_name,
            U_email: U_email,
            U_password:U_password,
          }),
        };
        fetch(
          'http://192.168.18.8/Final/api/Users/Addusers',
          requestOptions,
        )
          .then(response => {
            if (!response.ok) {
              throw Error('Check your connection');
            } else {
              alert('Sign Up Successfull');
            }
            response.json();
          })
          .then(data => console.log('---response', data))
          .catch(err => {
            alert(err.message);
          });
      } else {
        alert('Plz fill complete form');
      }
    };

return (
    <>
      <View>
        <Image style={styles.image} source={require('../images/logo.png')} />
      </View>
      <TextInput style={styles.input} onChangeText={(U_name) => { setname(U_name) }}placeholder='Name' />
      <TextInput style={styles.input} onChangeText={(U_email) => { setemail(U_email) }}placeholder='Email' />
      <TextInput style={styles.input} onChangeText={(U_password) => {setPassword(U_password)}}placeholder='Password' />
      <Button onPress={handleSignup} title='Signup' />

      <View style={{ marginTop: 10 }}>
        <View style={{ bottom: 10 }}>
{/* <Button style={{ buttom: 30 }} title="Signup" onPress={() => Alert.alert('Wellome')} /> */}
        </View>
        <View style={styles.login}>
          {/* <Button onPress={() => navigation.navigate('Login')} title='login' /> */}
        </View>
      </View>
    </>
  );
}
export default Signup

const styles = StyleSheet.create({
  body: {
    flex: 10,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },

  login: {
    top: 10
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
  image: {
    width: 500,
    height: 200,
    //alignItems:'center',
    //alignContent:'center',
    marginTop: 30,
    marginLeft: '-15%',


  },
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
    width: 20,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
    paddingTop: 10,
    marginTop: 10,
  },
  space: {
    width: 800, // or whatever size you need
    height: 100,
    marginBottom: 15,
  }

  })
