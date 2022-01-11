import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Button } from "react-native-elements";

// export default function FirstScreen() {
  const FirstScreen = ({ navigation }) => {
    const nav = () => {
      navigation.navigate("Signup");
    };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tulip </Text>

      <StatusBar style="auto" />
      <Image
        style={styles.Logo}
        source={{
          uri: 'https://image.freepik.com/free-vector/financial-literacy-education-e-business-school-cryptocurrency-trading-courses-crypto-trade-academy-learn-how-trade-cryptocurrency-concept_335657-72.jpg',
        }}
      />
      <Button title="Get Started!" buttonStyle={styles.button} onPress={nav}/>
    </View>
    
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Logo: {
    width: 350,
    height: 350,
  },
  heading: {
    fontSize: 30,
    // fontStyle: 'italic',
    marginBottom: 100,
  },
  text:{
    marginTop: wp("15%"),
  },
  button: {
    marginTop: wp("15%"),
    width: wp("65%"),
    fontSize: wp("20%"),
    alignSelf: "center",
    textAlign: "center",
    // paddingTop: wp("3%"),
    height: wp("10%"),
    backgroundColor: "#9370DB",
    color: "white",
    borderRadius: wp("20%"),
    marginLeft: wp("0%"),
  },
});

export default FirstScreen;