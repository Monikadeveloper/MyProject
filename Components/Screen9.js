import React from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Screen9=()=>{

return(<View>
    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenely'}}>
   <Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/logo-no-background 1.png',
          }}
          style={styles.logo}
        />
      
       <Text style={{fontWeight:700,fontSize:28,color:'#528265',marginTop:40,margin:10}}>Help & Support</Text>
        
        </View>
        <Text style={{fontSize:14,fontWeight:500,margin:20}}>We’re always here to answer any of your questions, and support of any kind.</Text>
       
        <View style={styles.view3}>
<Text style={styles.text4}>
<Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/Chat.png',
          }}
          style={styles.image2}
        />
Chat with Customer Support </Text>


       </View>
       <View style={styles.view3}>
<Text style={styles.text4}>
<Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/Email.png',
          }}
          style={styles.image2}
        />
Send us an E-mail</Text>


       </View>
       <Text style={{fontWeight:600, fontSize:20, color:'#528265',marginLeft:80,marginTop:30}}>Connect with us on :</Text>
<View style={{display:'flex',flexDirection:'row', justifyContent:'space-evenly',marginTop:20}}>
<Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/Facebook.png',
          }}
          style={styles.image3}
        />
        <Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/Linkedin.png',
          }}
          style={styles.image3}
        />
        <Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/ln.png',
          }}
          style={styles.image3}
        />
</View>
<View style={{display:'flex',flexDirection:'row', justifyContent:'space-evenly',marginTop:30}}>
<Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/Instagram.png',
          }}
          style={styles.image3}
        />
        <Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/Youtube.png',
          }}
          style={styles.image3}
        />
        
</View>
<View style={{display:'flex',flexDirection:'row', justifyContent:'space-evenly',backgroundColor:'#528265',height:60,marginTop:50,padding:15}}>
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


export default Screen9;

const styles = StyleSheet.create({
   logo:{
    width:115,
    height:40,
    marginTop:30,
    margin:10
   },view3:{
    backgroundColor:'#D2D9D1',
    height:60,
    width:288,
    marginLeft:35,
    margin:10,
    borderRadius:10,
    color:'black',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    padding:10
 
 },image2:{
    height:21,
    width:25,
    marginLeft:10,
    padding:1
 },
 image3:{
    width:40,
    height:40
 }
  
   })