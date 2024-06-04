import React from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Login = ({ navigation }) => {

   return (
      <ScrollView><View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Image
            source={{
               uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/logo-no-background 1.png',
            }}
            style={styles.logo}
         />

         <TextInput style={styles.input} placeholder="Email" placeholderTextColor={'#000000'} />
         <TextInput style={styles.input} placeholder="Password" placeholderTextColor={'#000000'} />
         <Text style={{ marginLeft: 170 }}>Forgot Password?</Text>
         <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate('Map')}><Text style={styles.btntxt}>Sign Up</Text></TouchableOpacity>
         <Text style={styles.text2}>Don't have an account yet ?</Text>
         <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.text3}>Register now</Text></TouchableOpacity>
      </View>
      </ScrollView>)
}


export default Login;

const styles = StyleSheet.create({
   logo: {
      width: 248,
      height: 85,
      marginTop: 30,

      marginBottom: 30
   },
   input: {
      height: 60,
      width: 239,
      borderWidth: 1,
      borderRadius: 6,
      borderColor: 'black',
      display: 'flex',

      marginTop: 10,
      margin: 20,
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
      marginLeft: 70,
      padding: 20,
      fontStyle: 'bold',
      fontWeight: 500
   },
   text2: {
      margin: 10,
      color: '#000000',


   },
   text3: {
      fontSize: 14,
      fontWeight: 'bold',

   }
})