import React from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import * as yup from 'yup';
import { Formik } from 'formik'

const loginValidationSchema = yup.object().shape({
   name:yup.string().min(6,'Please enter full name').max(50).required("Please enter your name"),
   email: yup
     .string()
     .email("Please enter valid email")
     .required('Email Address is Required'),
   password: yup
     .string()
     .min(8, ({ min }) => `Password must be at least ${min} characters`)
     .required('Password is required'),
     basicuser: yup.string().min(6,'Please enter valid types').required('Type required')
 })
 
const Register = ({ navigation }) => {
   

   return (
      <ScrollView>
         <View style={styles.container}>
            <View>
               <Image
                  source={{
                     uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/logo-no-background 1.png',
                  }}
                  style={styles.logo}
               />
               <Formik
   validationSchema={loginValidationSchema}
   initialValues={{ name:'',
    email:'',
    password:'',
  
    basicuser:''
    }}
   onSubmit={values => console.log(values)}
 >
   {({
     handleChange,
     handleBlur,
     handleSubmit,
     touched,
     values,
     errors,
     isValid,
   }) => (<>
               <TextInput style={styles.input} placeholder="User Name" placeholderTextColor={'#000000'}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name} />
                  {touched.name && errors.name &&
         <Text style={{ fontSize: 10, color: 'red',textAlign:'center' }}>{errors.name}</Text>}

               <TextInput style={styles.input} placeholder="Email" placeholderTextColor={'#000000'}
                 onChangeText={handleChange('email')}
                 onBlur={handleBlur('email')}
                 value={values.email} />
                 {touched.email && errors.email &&
         <Text style={{ fontSize: 10, color: 'red',textAlign:'center' }}>{errors.email}</Text>}

               <TextInput style={styles.input} placeholder="Password" placeholderTextColor={'#000000'}
                 onChangeText={handleChange('password')}
                 onBlur={handleBlur('password')}
                 value={values.password} />
                 {touched.password && errors.password &&
         <Text style={{ fontSize: 10, color: 'red',textAlign:'center' }}>{errors.password}</Text>}
               <TextInput style={styles.input1} placeholder="Basic user"
                  placeholderTextColor={'#000000'} 
                  onChangeText={handleChange('basicuser')}
         onBlur={handleBlur('basicuser')}
         value={values.basicuser} />
         {touched.basicuser && errors.basicuser &&
         <Text style={{ fontSize: 10, color: 'red',textAlign:'center' }}>{errors.basicuser}</Text>}
               <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}
               ><Text style={styles.btntxt}>Sign Up</Text></TouchableOpacity>
              </>)} 
              </Formik>
               <Text style={styles.text2}>Already have an account ?</Text>
               <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text style={styles.text3}>Sign in</Text></TouchableOpacity>
            </View>
         </View>
      </ScrollView>)
}


export default Register;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center'

   },
   logo: {
      width: 248,
      height: 85,
      marginTop:10

   },
   input: {
      height: 50,
      width: 239,
      borderWidth: 1,
      borderRadius: 6,
      borderColor: 'black',
      display: 'flex',

      marginTop: 10,
      justifyContent: 'center',
      padding: 10,
      backgroundColor: '#D2D9D1'
   },
   input1: {
      height: 141,
      width: 239,
      borderWidth: 1,
      borderRadius: 6,
      borderColor: 'black',
      display: 'flex',

      marginTop: 10,
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#D2D9D1'
   },
   button: {
      backgroundColor: '#528265',
      color: 'white',
      height: 63,
      width: 239,
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 6,
      marginTop: 10
   },
   btntxt: {
      padding: 10,
      color: 'white',
      fontSize: 16,
      display: 'flex',
      justifyContent: 'center',
marginLeft:60,
      padding: 20,
      fontStyle: 'bold',
      fontWeight: 500
   },
   text2: {

      color: '#808080',
      margin: 10

   },
   text3: {
      fontSize: 14,
      fontWeight: 'bold',
      marginLeft: 95
   }
})