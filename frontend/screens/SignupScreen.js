import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert
} from "react-native";
import { Button } from "react-native-elements";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { post } from "../api/fetch";
import CustomInput from "../CustomInput";
import { Formik, Field } from "formik";
import * as yup from "yup";
const SignupForm = ({
  children,
  navigation,
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [type, onChangeType] = useState("T");
  const signUpValidationSchema = yup.object().shape({
    name: yup
      .string()
      .matches(/(\w.+\s).+/, "Enter Full Name")
      .required("Full name is required"),
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email is required"),
    password: yup
      .string()
      .matches(/\w*[a-z]\w*/, "Password must have a small letter")
      .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
      .matches(/\d/, "Password must have a number")
      .matches(
        /[!@#$%^&*()\-_"=+{}; :,<.>]/,
        "Password must have a special character"
      )
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords do not match")
      .required("Confirm password is required"),
    grade: yup
      .string()
      .max(2, ({ max }) => `Class must have ${max} digits `)
      .required("Class is required"),
  });

  return (
    
    <ScrollView contentContainerStyle={styles.container}>
      
      <Formik
      
        validationSchema={signUpValidationSchema}
        
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          grade: "",
        }}
        onSubmit={(values) => {
          values.grade =parseInt(values.grade)
          values.phoneNumber=parseInt(values.phoneNumber)
         
          var params = {

            name:values.name,
            email: values.email,
            password: values.password,
            grade: parseInt(values.grade),

          };
          
        //   var formBody = [];
        //   for (var property in params) {
        //     console.log(property)
        //     if (typeof(params[property])=='int'){
        //       var encodedValue = parseInt(encodeURIComponent(params[property]));
        //     }
        //     else{
        //       var encodedValue = encodeURIComponent(params[property]);
        //     }
        //     var encodedKey = encodeURIComponent(property);
        //     formBody.push(encodedKey + "=" + encodedValue);
        //   }
        //   formBody = formBody.join("&");
        //   console.log(formBody)
        // console.log('Params are');
        // console.log(params);
          post("/user", params)
          .then(async (res) => {
            console.log(res);
            if(res.status ==200){
              Alert.alert("Success!", "Created your account successfully", [
                { text: "Okay",onPress:()=>{ navigation.navigate('LoginScreen')} },
              ]);
              
            }
            else{
              setErrorMessage("Something went wrong.");
            }
          }).catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
             // ADD THIS THROW error
              throw error;
            });
        }}
      >
        {({ handleSubmit, isValid }) => (
          
          <>
            <Field
              component={CustomInput}
              name="name"
              placeholder="Full Name"
            />
            <Field
              component={CustomInput}
              name="email"
              placeholder="Email Address"
              maxLength={80}
            />
            <Field
              component={CustomInput}
              name="password"
              placeholder="Password"
              secureTextEntry
            />
            <Field
              component={CustomInput}
              name="confirmPassword"
              placeholder="Confirm Password"
              secureTextEntry
            />
            <Field
              component={CustomInput}
              name="grade"
              placeholder="Class"
              maxLength={2}
              keyboardType="numeric"
            />

            <Text>{"\n"}</Text>
            <View style={styles.container}>

            
              <Button title="Sign Up" disabled={!isValid}
                onPress={handleSubmit}
                buttonStyle={{
                  backgroundColor: "#9370DB",
                  height: widthPercentageToDP("10%"),
                  borderRadius: widthPercentageToDP("5%"),
                  width: widthPercentageToDP("90%"),
                  alignItems:'center',
                  textAlign:'center '
                }}/>
            </View>
          </>
        )}
      </Formik>
      <Text>{"\n"}</Text>
      {!!errorMessage && <Text style={{ color: 'red' }}>{errorMessage}</Text>}
      <Text>{"\n"}</Text>
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#f2f2f2",
    position:'relative'
  },
  input: {
    paddingLeft: 10,
    height: widthPercentageToDP("10%"),
    width: widthPercentageToDP("90%"),
    borderColor: "#4B0082",
    borderRadius: widthPercentageToDP("5%"),
    borderWidth: 1,
    marginTop: 20,
    backgroundColor: "#f6f6f6",
  },
  btn: {
    borderColor: "#9370DB",
  },
});
const SignupScreen = ({ navigation }) => {
  
  return (
    <SignupForm buttonText="Sign Up" navigation={navigation}>
      <Text
        style={{ color: "blue", marginBottom: widthPercentageToDP('10%') }}
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Already have an account?
      </Text>
    </SignupForm>
  );
};

export default SignupScreen;