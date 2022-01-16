import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View,ScrollView,SafeAreaView, ImageBackground,Modal,Alert } from 'react-native';
import { Button ,Card,Slider,CheckBox } from "react-native-elements";
import { NeuView } from 'react-native-neu-element';
import MoneyCarouselCards from './MoneyCarouselCards'
import BudgetingCards from './BudgetingCards';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TouchableOpacity } from 'react-native-gesture-handler';
import SaveCards from './SaveCards';
import BankCards from './BankCards';
import { get } from "../api/fetch";


const Dashboard = ({navigation}) => {
  
    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpen2, setModalOpen2] = useState(false);
    const [modalOpen3, setModalOpen3] = useState(false);
    const  [modalOpen4, setModalOpen4] = useState(false);
    const  [modalOpen5, setModalOpen5] = useState(false);
    const  [modalOpen6, setModalOpen6] = useState(false);

    const [value,setValue] = useState(0);
    const [value1,setValue1] = useState(0);
    const [value2,setValue2] = useState(0);
    const add2 = () => {
      const sum=value+value1+value2;
      if (sum == 2000 && value1 && value2 && value) {
        Alert.alert("Success!", "You have cracked Birthday Party! ", [
          { text: "Okay",onPress:()=>{ navigation.navigate('Dashboard')} },
        ]);
      }
      else{
        Alert.alert("Oh no!", "You have not cracked Birthday Party :(", [
          { text: "Okay",onPress:()=>{ navigation.navigate('Dashboard')} },
        ]);

      }
    }
    const nav = () => {
        setModalOpen5(false);
        navigation.navigate("Dashboard");
      };
    state = {  
        isVisible: false, //state of modal default false  
      }  
      const closeModal = () => {
        setModalOpen(false);
      };
      const openModal = () => {
        setModalOpen(true);
      }
      const openModal6 = () => {
        setModalOpen6(true);
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
      const openModal4 = () => {
        setModalOpen4(true);
      }
      const closeModal4 = () => {
        setModalOpen4(false);
        navigation.navigate('Bank');
      };
      const closeModal5 = () => {
        setModalOpen5(false);
        setModalOpen3(false);
        navigation.navigate('Dashboard');
      };
      const openModal5 = () => {
        setModalOpen5(true);
      }
      const Activity2 = () => {
    setModalOpen2(false);
      navigation.navigate('Bank');
      };

      const Activity4 = () => {
        setModalOpen6(false);
        setModalOpen(false);
        
          navigation.navigate('Dashboard');
          };
          const Activity5 = () => {
            setModalOpen5(false);
            setModalOpen(false);
            
              navigation.navigate('Dashboard');
              };
    

          useEffect(() => {
            async function getToken() {
              let response = await get("/gettoken");
              console.log(response);
            }
        
            getToken();
          }, []);



         
        const add = () => {
          const sum=value+value1+value2;
          if (sum == 31){
            Alert.alert("Success!", "You have cracked Jewel Swap! ", [
              { text: "Okay",onPress:()=>{ navigation.navigate('Dashboard')} },
            ]);
          }
          else{
            Alert.alert("Oh no!", "You have not cracked Jewel Swap :(", [
              { text: "Okay",onPress:()=>{ navigation.navigate('Dashboard')} },
            ]);

          }
        }

       
          

      const Activity3 = () => {
        setModalOpen2(false);
        setModalOpen5(true)
       
        
      };
  return (
      <View>
    <ScrollView>
    <View style={styles.container}>
        
         <Modal visible={modalOpen} animationType="slide" style={{height:50, width:50}}>
        <View style={{height:600,width:300, alignSelf:"center", marginTop:100, backgroundColor:"#fff"}}> 
     
  <SafeAreaView style={styles.modalCont}>
      <Text style={{fontSize:25, color:"#2F5061"}}>About Money</Text>
      <Text/>
      <Text/>
      <Text/>
      <Text/>
      <Text/>
      <Text/>


      <MoneyCarouselCards />
      
    </SafeAreaView>

      </View >
      <Button title="Go to Activity!" onPress={openModal6}  buttonStyle={styles.button2} />
      
      </Modal>
      <Modal visible={modalOpen2} animationType="slide" style={{height:50, width:50}}>
        <View style={{height:600,width:300, alignSelf:"center", marginTop:100, backgroundColor:"#fff"}}> 
     
  <SafeAreaView style={styles.modalCont}>
      <BudgetingCards />
      
    </SafeAreaView>

      </View >
      <Button title="Go to Activity!" onPress={Activity3}  buttonStyle={styles.button2} />
      
      </Modal>
      <Modal visible={modalOpen3} animationType="slide" style={{height:50, width:50}}>
        <View style={{height:600,width:300, alignSelf:"center", marginTop:100, backgroundColor:"#fff"}}> 
     
  <SafeAreaView style={styles.modalCont}>
      <SaveCards />
      
    </SafeAreaView>

      </View >

      <Button title="Try it out now!" onPress={Activity2}  buttonStyle={styles.button2} />
      {/* <Button title="Close" onPress={closeModal3}  buttonStyle={styles.button} /> */}
      
      </Modal>
      <Modal visible={modalOpen4} animationType="slide" style={{height:50, width:50}}>
        <View style={{height:600,width:300, alignSelf:"center", marginTop:100, backgroundColor:"#fff"}}> 
     
  <SafeAreaView style={styles.modalCont}>
     <BankCards/>
      
    </SafeAreaView>

      </View >
      <Button title="Go to Bank" onPress={closeModal4}  buttonStyle={styles.button} />
      
      </Modal>
      <Modal visible={modalOpen6} animationType="slide" style={{height:50, width:50}}>

        <View style={{height:600,width:300, alignSelf:"center", marginTop:100, backgroundColor:"#fff"}}> 
        <Text style={{textAlign:'center', fontSize:25, padding:10}}>Jewel Swap!</Text>
        <Text style={{textAlign:'center', fontSize:15, padding:10,color:'#808080'}}>Welcome to Jewel Swap.You have 31 stones. There are a variety of gems presented to you each of different value. Use the stones u have to barter for maximum value of gems u can obtain.Make sure no stones are remaining.
Diamonds are 10 stones worth
Rubies are 7 stones worth
Emeralds are 2 stones worth </Text>

     
  <SafeAreaView style={styles.modalCont}>
<ScrollView>
  <Card style={{borderRadius:10}}>
  <Card.Title>Diamond</Card.Title>
  <Card.Divider/>
  <Card.Image style={{width:160,marginLeft:wp("5%")}} source={{uri:('https://i.ibb.co/xL0G3zV/diamond.png')}}>
  </Card.Image>
  <Card.Divider/>
  <Slider
          value={value}
          onValueChange={value => setValue( parseInt(value) )}
          maximumValue={50}
          step={10}
          thumbTintColor="purple"
          minimumTrackTintColor="black"
          thumbTouchSize={{width: 50, height: 50}}
        />
        <Text style={{textAlign:'center'}} >{value}</Text>
</Card>
<Card style={{borderRadius:10}}>
  <Card.Title>Ruby</Card.Title>
  <Card.Divider/>
  <Card.Image style={{width:160,marginLeft:wp("7%")}} source={{uri:('https://i.ibb.co/9sts0LD/ruby.png')}}>
  </Card.Image>
  <Card.Divider/>
  <Slider
          value={value1}
          onValueChange={value1 => setValue1( parseInt(value1) )}
          maximumValue={70}
          step={7}
          thumbTintColor="purple"
          minimumTrackTintColor="black"
          thumbTouchSize={{width: 50, height: 50}}
        />
        <Text style={{textAlign:'center'}}>{value1}</Text>
</Card>
<Card style={{borderRadius:10, alignItems:'center'}}>
  <Card.Title>Emerald</Card.Title>
  <Card.Divider/>
  <Card.Image style={{width:160, marginLeft:wp('5%')}} source={{uri:('https://st.depositphotos.com/1765462/3152/v/380/depositphotos_31520603-stock-illustration-emerald-green-vector-icon.jpg')}}>
  </Card.Image>
  <Card.Divider/>
  <Slider
          value={value2}
          onValueChange={value2 => setValue2( parseInt(value2) )}
          maximumValue={60}
          step={2}
          thumbTintColor="purple"
          minimumTrackTintColor="black"
          thumbTouchSize={{width: 50, height: 50}}
        />
        <Text style={{textAlign:'center'}}>{value2}</Text>

</Card>
<Text/>
<Button title="Submit!" onPress={add}  buttonStyle={styles.button} />
<Button title="Go Back!" onPress={Activity4}  buttonStyle={styles.button2} />
<Text/>
<Text/>
<Text/>
<Text/>
<Text/>
<Text/>
<Text/>
<Text/>
<Text/>
<Text/>
<Text/>
<Text/>
<Text/>
<Text/>
<Text/>
<Text/>



      </ScrollView>
      
    </SafeAreaView>
    

      </View >

      
      {/* <Button title="Close" onPress={closeModal3}  buttonStyle={styles.button} /> */}
      
      </Modal>

      <Modal visible={modalOpen5} animationType="slide" style={{height:50, width:50}}>

<View style={{height:600,width:300, alignSelf:"center", marginTop:100, backgroundColor:"#fff"}}> 
<Text style={{textAlign:'center', fontSize:25, padding:10}}>Birthday Party!</Text>
<Text style={{textAlign:'center', fontSize:15, padding:10,color:'#808080'}}>You have a Birthday party coming up!! You have 2000 coins in your hand. Plan your own birthday using the this.)
All the Best!!!</Text>


<SafeAreaView style={styles.modalCont}>
<ScrollView>
<Card style={{borderRadius:10}}>
<Card.Title>Cake</Card.Title>
<Card.Divider/>
<Card.Image style={{width:160,marginLeft:wp('5%')}} source={{uri:('https://image.freepik.com/free-vector/birthday-cake-sweet-cream-pie-with-candles-illustration_1284-52975.jpg')}}>
</Card.Image>
<Card.Divider/>
<Slider
  value={value}
  onValueChange={value => setValue( parseInt(value) )}
  maximumValue={1000}
  step={10}
  thumbTintColor="purple"
  minimumTrackTintColor="black"
  thumbTouchSize={{width: 50, height: 50}}
/>
<Text style={{textAlign:'center'}} >{value}</Text>
</Card>
<Card style={{borderRadius:10}}>
<Card.Title>Snacks</Card.Title>
<Card.Divider/>
<Card.Image style={{width:160,marginLeft:wp('5%')}} source={{uri:('https://image.freepik.com/free-vector/hand-drawn-fast-food-illustration_23-2149013386.jpg')}}>
</Card.Image>
<Card.Divider/>
<Slider
  value={value1}
  onValueChange={value1 => setValue1( parseInt(value1) )}
  maximumValue={1000}
  step={10}
  thumbTintColor="purple"
  minimumTrackTintColor="black"
  thumbTouchSize={{width: 50, height: 50}}
/>
<Text style={{textAlign:'center'}}>{value1}</Text>
</Card>
<Card style={{borderRadius:10, alignItems:'center'}}>
<Card.Title>Balloons</Card.Title>
<Card.Divider/>
<Card.Image style={{width:160, marginLeft:wp('5%')}} source={{uri:('https://image.freepik.com/free-vector/colorful-festive-balloons-design-vectors_53876-58079.jpg')}}>
</Card.Image>
<Card.Divider/>
<Slider
  value={value2}
  onValueChange={value2 => setValue2( parseInt(value2) )}
  maximumValue={1000}
  step={10}
  thumbTintColor="purple"
  minimumTrackTintColor="black"
  thumbTouchSize={{width: 50, height: 50}}
/>
<Text style={{textAlign:'center'}}>{value2}</Text>

</Card>
<Text/>
<Button title="Submit!" onPress={add2}  buttonStyle={styles.button} />
<Button title="Go Back!" onPress={Activity5}  buttonStyle={styles.button2} />

<Text/>
<Text/>
<Text/>
<Text/>
<Text/>
<Text/>
<Text/>


</ScrollView>

</SafeAreaView>


</View >


{/* <Button title="Close" onPress={closeModal3}  buttonStyle={styles.button} /> */}

</Modal>


      
      
      <Text style={styles.heading}>Welcome Srivatsa</Text>
      <Text style={{color:'#ffbf00',fontWeight:'bold',fontSize:15, fontStyle:'italic'}}>You currently have 100 coins.</Text>
      <Text style={{color:'#9370DB',fontWeight:'bold',fontSize:15,textAlign:'center'}}>Use the App regularly to increase your personal coins multiplier by upto 4X</Text>
      <Text style={{marginBottom:60}}>Your current coins multiplier is: 1X</Text>


      <StatusBar style="auto" />
      {/* <Image
        style={styles.Logo}
        source={{
          uri: 'https://image.freepik.com/free-vector/saving-money-financial-concept_74855-7849.jpg',
        }}
      /> */}

      <View style={styles.cardContainer}>
        {/* <ImageBackground source={{uri: "https://i.ibb.co/j85wSfZ/money.png",width:10,height:10}}>
        <TouchableOpacity style={styles.to1}>
          <Image
  source={{  height:100,width:100, uri: "https://i.ibb.co/j85wSfZ/money.png"}} 
 
/>
<Text style={{marginTop:wp("1%")}}>This be card</Text>
      </TouchableOpacity>
        </ImageBackground> */}

{/* <TouchableOpacity style={{backgroundColor:''}}> */}
<TouchableOpacity onPress={openModal}>   
 <NeuView color='#eef2f9' height={180} width={170} borderRadius={16} style={{margin:11}}>
          {/* <Text>Hello</Text> */}
          <ImageBackground
      source={{uri: "https://i.ibb.co/5j8RC6K/money.png",width:10,height:10}}
      style={styles.imageBackground}
    >
      <View style={styles.innerContainer}>
        
          </View>
 </ImageBackground>
 <Text style={{marginBottom:30, marginTop:-20, color:"#696969"}}>What Is Money?</Text>
        </NeuView>
 </TouchableOpacity>
 <TouchableOpacity  onPress={openModal2}>   
 <NeuView color='#eef2f9' height={180} width={170} borderRadius={16} style={{margin:11}}>
         
          <ImageBackground
      source={{uri: "https://i.ibb.co/nkZJmr9/money3.png",width:10,height:10}}
      style={styles.imageBackground}
    >
      <View style={styles.innerContainer}>
        
          </View>
 </ImageBackground>
 <Text style={{marginBottom:30, marginTop:-20,color:"#696969"}}>Budgeting</Text>
  {/* <Text>Hello</Text> */}
        </NeuView>
 </TouchableOpacity>

 <TouchableOpacity onPress={openModal3}>   
 <NeuView color='#eef2f9' height={180} width={170} borderRadius={16} style={{margin:11}}>
          {/* <Text>Hello</Text> */}
          <ImageBackground
      source={{uri: "https://i.ibb.co/Pz0khV8/money2.png",width:10,height:10}}
      style={styles.imageBackground}
    >
      <View style={styles.innerContainer}>
        
          </View>
 </ImageBackground>
 <Text style={{marginBottom:30, marginTop:-20,color:"#696969"}}>Saving And Investing</Text>
        </NeuView>
 </TouchableOpacity>
 {/* <TouchableOpacity>
 <ImageBackground
      source={{uri: "https://i.ibb.co/16yYZH0/money.png"}}
      style={styles.imageBackground}
    >
      <View style={styles.innerContainer}>
        
          <Text>This be card</Text>
      </View>
 </ImageBackground>

 </TouchableOpacity> */}
  <TouchableOpacity  onPress={openModal4}>   
 <NeuView color='#eef2f9' height={180} width={170} borderRadius={16} style={{margin:11}}>
          {/* <Text>Hello</Text> */}
          <ImageBackground
      source={{uri: "https://i.ibb.co/PYvS35x/money.png",width:10,height:8, marginTop:10}}
      style={styles.imageBackground}
    >
 </ImageBackground>
 <Text style={{marginBottom:30, marginTop:-20,color:"#696969",}}>What Does A Bank Do?</Text>
        </NeuView>
 </TouchableOpacity>
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
    fontSize: 25,
    // fontStyle: 'italic',
    marginBottom: 10,
  },
  text:{
    marginTop: wp("15%"),
  },
  button: {
    // marginTop: wp("15%"),
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
  cardContainer: {
    //   flex: 1,
      flexDirection:"row",
      flexWrap: "wrap",
    //   marginTop: wp("40%"),
    // alignSelf: "center",
    // marginLeft: wp("3%"),
  },
  to1:{
      backgroundColor:"transparent",
      alignItems:"center",
      padding:40,
      borderRadius:10,
      margin:10,
      height:200
  },
  to2:{
    backgroundColor:"purple",
    alignItems:"center",
    padding:50,
    borderRadius:10,
    margin:10,
    height:200
},
to3:{
    backgroundColor:"red",
    alignItems:"center",
    padding:50,
    borderRadius:10,
    margin:10,
    height:200
},
to4:{
    backgroundColor:"cyan",
    alignItems:"center",
    padding:50,
    borderRadius:10,
    margin:10,
    height:200
},
  imageBackground: {
    height: 150,
    width: 150,
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
    backgroundColor: "#9370DB",
    color: "white",
    borderRadius: wp("20%"),
    marginLeft: wp("0%"),
  },
  modalCont: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
});
export default Dashboard;