import React from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Screen8=()=>{

return(<View>
    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenely'}}>
   <Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/logo-no-background 1.png',
          }}
          style={styles.logo}
        />
        <Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/Profile.png',
          }}
          style={styles.image1}
        />
        
        </View>
        <View style={{display:'flex',flexDirection:'row'}}>
        <View style={{backgroundColor:'#528265',width:106,height:114,borderRadius:10,marginLeft:30,marginTop:20}}>
    <Text style={{color:'white',fontSize:40, fontWeight:'bold', padding:25}}>DM</Text>

        </View>
        <View style={{display:'flex',flexDirection:'column'}}>
        <Text style={{fontWeight:800,fontSize:24,marginTop:40,marginLeft:10}}>DAVID MBUGUA</Text>
        <Text style={{fontWeight:400,fontSize:16,margin:10}}>david@gmail.com</Text></View>
        </View>
        <View style={styles.view3}>
<Text style={styles.text4}>
Points : </Text>
<Text style={{fontSize:20,fontWeight:600,padding:10}}>1000</Text>

       </View>
       <View style={styles.view3}>
<Text style={styles.text4}>
<Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/Help.png',
          }}
          style={styles.image2}
        />
Help & Support </Text>


       </View>
       <View style={styles.view3}>
<Text style={styles.text4}>
<Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/Security.png',
          }}
          style={styles.image2}
        />
Security & Privacy </Text>


       </View>
       <View style={styles.view4}>
<Text style={styles.text4}>
<Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/Logout.png',
          }}
          style={styles.image3}
        />
Logout </Text>


       </View>
       <View style={{display:'flex',flexDirection:'row', justifyContent:'space-evenly',backgroundColor:'#528265',height:60,marginTop:10,padding:10}}>
        <TouchableOpacity><Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/Vector.png',
          }}
          style={styles.image2}
        /></TouchableOpacity>
        <TouchableOpacity><Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/Vector2.png',
          }}
          style={styles.image2}
        /></TouchableOpacity>
        <TouchableOpacity><Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/Vector3.png',
          }}
          style={styles.image2}
        /></TouchableOpacity>
        <TouchableOpacity><Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/Vector4.png',
          }}
          style={styles.image2}
        /></TouchableOpacity>
        </View>
</View>)
}


export default Screen8;

const styles = StyleSheet.create({
   logo:{
    width:115,
    height:40,
    marginTop:30,
   },
   image1:{
    height:44,
    width:173,
    marginTop:30,
    marginLeft:10
   },view3:{
    backgroundColor:'#D2D9D1',
    height:60,
    width:301,
    marginLeft:35,
    margin:10,
    borderRadius:10,
    color:'black',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    padding:10
 
 },
 view4:{
    backgroundColor:'#D2D9D1',
    height:60,
    width:301,
    marginLeft:35,
    margin:10,
    marginTop:40,
    borderRadius:10,
    marginBottom:30,
    color:'black',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    padding:10
 
 },
 image2:{
    height:25,
    width:28,
    marginLeft:10
 },
 text4:{
fontSize:20,
fontWeight:600,
padding:10
 },
 image2:{
    height:20,
    width:20,
    padding:20
  
 },
 image3:{
    height:18,
    width:24,
    padding:17
  
 }
   })