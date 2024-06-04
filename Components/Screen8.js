import React from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Screen8=({navigation})=>{

return(
<ScrollView><View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
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
        <TouchableOpacity onPress={() => navigation.navigate('Help')}>
<Text style={styles.text4}>
<Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/Help.png',
          }}
          style={styles.image2}
        />
Help & Support </Text>
</TouchableOpacity>

       </View>
       <View style={styles.view3}>
        <TouchableOpacity onPress={() => navigation.navigate('Security')}>
<Text style={styles.text4}>
<Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/Security.png',
          }}
          style={styles.image2}
        />
Security & Privacy </Text>
</TouchableOpacity >

       </View>
       <View style={styles.view4}>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
<Text style={styles.text4}>
<Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/Logout.png',
          }}
          style={styles.image3}
        />
Logout </Text></TouchableOpacity>


       </View>
       <View style={{display:'flex',flexDirection:'row',width:370, justifyContent:'space-evenly',backgroundColor:'#528265',height:50,padding:10}}>
        <TouchableOpacity onPress={() => navigation.navigate('Map')}><Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/Vector.png',
          }}
          style={styles.image4}
        /></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Events')}><Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/Vector2.png',
          }}
          style={styles.image4}
        /></TouchableOpacity >
        <TouchableOpacity onPress={() => navigation.navigate('location')}><Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/Vector3.png',
          }}
          style={styles.image4}
        /></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}><Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/Vector4.png',
          }}
          style={styles.image4}
        /></TouchableOpacity>
        </View>
      
</View>
</ScrollView>)
}


export default Screen8;

const styles = StyleSheet.create({
   logo:{
    width:115,
    height:40,
    marginTop:10,
   },
   image1:{
    height:44,
    width:173,
    marginTop:10,
    
   },view3:{
    backgroundColor:'#D2D9D1',
    height:60,
    width:301,
   
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
   
 },
 text4:{
fontSize:20,
fontWeight:600,
padding:10
 },
 image4:{
  height:25,
  width:28,
  
},
 image3:{
    height:18,
    width:24,
    padding:17
  
 }
   })