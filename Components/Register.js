import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

 
const Register = ({ navigation }) => {
const [name,setName]=useState('');
const [nameVerify,setNameVerify]=useState(false);
const [email,setEmail]=useState('');
const [emailVerify,setEmailVerify]=useState(false);
const [password,setPassword]=useState('');
const [passwordVerify,setPasswordVerify]=useState(false);
const [user,setUser]=useState('');
const [userVerify,setUserVerify]=useState(false);
   
const handleName=(e)=>{
   const namevar=e.nativeEvent.text;
   setName(namevar);
   setNameVerify(false)
   if(namevar.length>2){
      setNameVerify(true)
   }
}
const handleEmail=(e)=>{
   const emailvar=e.nativeEvent.text;
   setEmail(emailvar);
   setEmailVerify(false)
   if(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(emailvar)){
      setEmail(emailvar);
      setEmailVerify(true)
   }
}
const handlePassword=(e)=>{
   const passwordvar=e.nativeEvent.text;
   setPassword(passwordvar)
   setPasswordVerify(false)
   if(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(passwordvar)){
      setPassword(passwordvar);
      setPasswordVerify(true);
   }
}
const handleUser=(e)=>{
   const uservar=e.nativeEvent.text;
   setUser(uservar);
   setUserVerify(false)
   if(uservar.length>5){
      setUserVerify(true)
   }
}
const handleLogin=()=>{
   if(name==="" || email === "" ||password===""|| user===""){
      console.warn('Please enter details properly')
   }
   else{
      navigation.navigate('Login')
   }
}

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
             
               <TextInput style={styles.input} placeholder="User Name" placeholderTextColor={'#000000'}
               value={name}
               onChange={(e)=>handleName(e)}/>
         
{name.length<2?null:nameVerify?null:(<Text style={{color:'red'}}>Name should be more than 2 characters</Text>)}

               <TextInput style={styles.input} placeholder="Email" placeholderTextColor={'#000000'}
                value={email}
                onChange={(e)=>handleEmail(e)}/>
                 {email.length<2?null:emailVerify?null:(<Text style={{color:'red'}}>Please Enter valid email address</Text>)}
                
               <TextInput style={styles.input} placeholder="Password" placeholderTextColor={'#000000'}
               value={password} onChange={(e)=>handlePassword(e)} secureTextEntry={password}/>
               {password.length<2?null:passwordVerify?null:(<Text style={{color:'red'}}>Please choose strong password</Text>)}
               
               <TextInput style={styles.input1} placeholder="Basic user/Garbage Collector / Scrap Dealer"
                  placeholderTextColor={'#000000'} value={user} onChange={(e)=>handleUser(e)} />
                  {user.length<2?null:userVerify?null:(<Text style={{color:'red'}}>Please enter valid user type</Text>)}
                 
               <TouchableOpacity style={styles.button} onPress={()=>handleLogin()}>
                  <Text style={styles.btntxt}>Sign Up</Text></TouchableOpacity>
             
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