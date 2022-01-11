import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View,ScrollView,TextInput , ImageBackground,Modal,Alert } from 'react-native';
import { Button ,Image,Slider,CheckBox, } from "react-native-elements";
import { post } from "../api/fetch";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TouchableOpacity } from 'react-native-gesture-handler';



const Bank = ({navigation}) => {
  
    const [modalOpen2, setModalOpen2] = useState(false);
    const [modalOpen3, setModalOpen3] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [text, onChangeText] = useState(0);
    const nav = () => {
        setModalOpen2(false);
        setModalOpen3(false);

        navigation.navigate("Bank");
      };
      const submitDeposits=()=>{
        console.log(text)
        post("/deposit", {depositvalue:parseInt(text),points:100})
        .then(async (res) => {
          console.log(res);
          if(res.status ==200){
            Alert.alert("Success!", `You have deposited ${text} coins`, [
              { text: "Okay",onPress:()=>{ console.log('DEPOSITED SUCCESSFULLyyy')} },
            ]);
            
          }
          else{
            Alert.alert("Failed:(", `You failed to deposit ${text} coins`, [
              { text: "Okay",onPress:()=>{ console.log('DEPOSITED UNSUCCESSFULLyyy')} },
            ]);
            setErrorMessage("Something went wrong.");
          }
        }).catch(function(error) {
          console.log('There has been a problem with your fetch operation: ' + error.message);
           // ADD THIS THROW error
            throw error;
          });
        
      }


      const submitWithdraws=()=>{
        console.log(text)
        post("/withdraw", {withdrawvalue:parseInt(text),points:100})
        .then(async (res) => {
          console.log(res);
          if(res.status ==200){
            Alert.alert("Success!", `You have withdrawn ${text} coins`, [
              { text: "Okay",onPress:()=>{ console.log('WITHDRAWN SUCCESSFULLyyy')} },
            ]);
            
          }
          else{
            Alert.alert("Failed:(", `You failed to withdraw ${text} coins`, [
              { text: "Okay",onPress:()=>{ console.log('WITHDRAWN UNSUCCESSFULLyyy')} },
            ]);
            setErrorMessage("Something went wrong.");
          }
        }).catch(function(error) {
          console.log('There has been a problem with your fetch operation: ' + error.message);
           // ADD THIS THROW error
            throw error;
          });
        
      }

      const openModal2 = () => {
        setModalOpen2(true);
      }
      const closeModal2 = () => {
        setModalOpen2(false);
      };
      const openModal3 = () => {
        setModalOpen3(true);
      }
      const closeModal3 = () => {
        setModalOpen3(false);
      };
    state = {  
        isVisible: false, //state of modal default false  
      }  


  return (
      <View style={{backgroundColor:'#fff',height:hp('100%')}}>
    <ScrollView>
    <View style={styles.container}>
      <Modal visible={modalOpen2} animationType="slide" style={{height:50, width:50}}>
        <View style={{height:600,width:300, alignSelf:"center", marginTop:100, backgroundColor:"#fff"}}> 
        <Text style={{textAlign:'center', fontSize:15,color:'#ffbf00'}}>You have 100 Coins</Text>

        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        keyboardType="numeric"
        placeholder="Enter Amount"
      />
        <Button title="Submit" onPress={submitDeposits} buttonStyle={styles.button} />

<Button title="Go Back!" onPress={nav}  buttonStyle={styles.button2} />

      </View >

      
      </Modal>
     <Modal visible={modalOpen3} animationType="slide" style={{height:50, width:50}}>
        <View style={{height:600,width:300, alignSelf:"center", marginTop:100, backgroundColor:"#fff"}}> 
        <Text style={{textAlign:'center', fontSize:15,color:'#808080'}}>You have 100 Coins</Text>

        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        keyboardType="numeric"
        placeholder="Enter Amount"
      />
        <Button title="Submit" onPress={submitWithdraws} buttonStyle={styles.button} />

<Button title="Go Back!" onPress={nav}  buttonStyle={styles.button2} />

      </View >

      
      </Modal>

      
 


      
      <Text style={styles.heading}>Welcome to the Bank</Text>
      <Text style={{textAlign:'center', fontSize:15,color:'#808080'}}>You have 100 Coins</Text>
      <Text style={{textAlign:'center', fontSize:15,color:'#808080'}}>You can deposit coins at an interest rate of 10% per week or choose to withdraw</Text>
      <Text style={{textAlign:'center', fontSize:15,color:'#808080'}}>You have 10 Coins in the deposit currently</Text>



      <StatusBar style="auto" />


      <View style={styles.cardContainer}>


  
<Image
      source={{uri: "https://i.ibb.co/Mn0wqQg/money.png"}}
      style={styles.imageBackground}
    >
 </Image>
 <View style={{alignItems:"center",   
 flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',}}>
 <Button title="Deposit Coins"  onPress={openModal2} buttonStyle={styles.button} />
 <Button title="Withdraw Coins" onPress={openModal3} buttonStyle={styles.button2} />
 </View>

      </View>
      {/* <Button title="Get Started!" buttonStyle={styles.button}/> */}
      </View>
      </ScrollView>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:10
  },
  text:{
    marginTop: wp("15%"),
  },
  cardContainer: {
    //   flex: 1,
      flexDirection:"row",
      flexWrap: "wrap",
    //   marginTop: wp("40%"),
    // alignSelf: "center",
    // marginLeft: wp("3%"),
  },

  imageBackground: {
    height: 350,
    width: wp("110%"),
    margin:10,
    borderRadius:10
  },
  innerContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.00)',
borderRadius:10,
  },
  button: {
    width: wp("65%"),
    fontSize: wp("20%"),
    alignSelf: "center",
    textAlign: "center",
    // paddingTop: wp("3%"),
    height: wp("10%"),
    backgroundColor: "#8AFF8A",
    color: "white",
    borderRadius: wp("20%"),
    marginLeft: wp("0%"),
  },
  button2: {
    width: wp("65%"),
    fontSize: wp("20%"),
    alignSelf: "center",
    textAlign: "center",
    margin: wp("3%"),
    height: wp("10%"),
    backgroundColor: "#FF2E2E",
    color: "white",
    borderRadius: wp("20%"),
    marginLeft: wp("0%"),
  },
  modalCont: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Bank;