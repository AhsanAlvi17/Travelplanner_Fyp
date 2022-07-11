
import React, { useState, useEffect } from 'react';

//import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import API from '../API';


const App = ({ route, navigation }) => {
  //yeh kam dosry page sy is page py use krny ky liye kiya
  const {storekro} = route.params
  const {Rat} = route.params

  const {cona} = route.params

  console.log("p-name=",storekro)
  console.log("count=",cona)

  useEffect(() => {
    console.log("--defaul rating=", defaultRating)
  }, [])
 
  // To set the default Star Selected
  const [defaultRating, setDefaultRating] = useState(5);
  // To set the max number of Stars
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  // Filled Star. You can also give the path from local
  const starImageFilled =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
  // Empty Star. You can also give the path from local
  const starImageCorner =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
  // our handlerating function
  const handlerating = () => {
    const val=(defaultRating+parseFloat(Rat))/2
    const valcon=1+parseFloat(cona)
    fetch(`http://${API}/Final/api/Rating/Rating`, {
      method: 'Post',
      headers: {
        Accept: 'application/json',
        'content-Type': 'application/json',
      },

      body: JSON.stringify({
        p_name: storekro,
        rating: val.toString(),
        count:  valcon.toString()
      }),

    })
      .then(response => response.json())
      .then(responseJson => {
        // setdata1(responseJson)
        alert("successfully inserted rating=", responseJson)
        console.log("----response", responseJson)
      })
      .catch(err => {
        alert(err.message);
      });


  }
  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaultRating(item)}>
              <Image
                style={styles.starImageStyle}
                source={
                  item <= defaultRating
                    ? { uri: starImageFilled }
                    : { uri: starImageCorner }
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          {/* React Native Custom Star Rating Bar */}
        </Text>
        <Text style={styles.textStyle}>
          {storekro} {Rat} {cona}
          How was your experience with us
        </Text>
        <Text style={styles.textStyleSmall}>
          Please Rate Us
        </Text>
        {/* View to hold our Stars */}
        <CustomRatingBar />
        <Text style={styles.textStyle}>
          {/* To show the rating selected */}
          {defaultRating} / {Math.max.apply(null, maxRating)}
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={handlerating}>
          {/* Clicking on button will show the rating as an alert */}
          <Text style={styles.buttonTextStyle}>
            Get Selected Value
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
    textAlign: 'center',
  },
  titleText: {
    padding: 8,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 23,
    color: '#000',
    marginTop: 15,
  },
  textStyleSmall: {
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
    marginTop: 15,
  },
  buttonStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
    padding: 15,
    backgroundColor: '#8ad24e',
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  customRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  starImageStyle: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
});


 //   fetch('http://192.168.18.8/Final/api/Rating/Rating', {
  //     method: 'Post',
  //     headers: {
  //       Accept: 'application/json',
  //       'content-Type': 'application/json',
  //     },

  //      body: JSON.stringify({

  //       Rating:defaultRating,


  //     }),

  //   })
  //     .then(response => response.json())
  //     .then(responseJson => {
  //       // setdata1(responseJson)
  //       console.log("----response", responseJson)
  //     })

  // }, []);
