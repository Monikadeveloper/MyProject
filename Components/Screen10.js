import React from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Screen10=({navigation})=>{

return(<>
<ScrollView>
<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenely'}}>
   <Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/logo-no-background 1.png',
          }}
          style={styles.logo}
        />
        <Text style={{fontWeight:700,fontSize:28,color:'#528265',marginTop:40}}>Security & Privacy</Text>
        </View>
        <View style={styles.view2}>
<Text style={styles.text4}>
<Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/user-alt.png',
          }}
          style={styles.image4}
        />
Privacy Policy </Text>


       </View>
       <View style={styles.view2}>
<Text style={styles.text4}>
<Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/terms.png',
          }}
          style={{width:25,height:20}}
        />
Terms of service </Text>


       </View>
       
       <View style={styles.view2}>
<Text style={styles.text4}>
<Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/Devices.png',
          }}
          style={{height:25,width:15,padding:8}}
        />
Devices </Text>


       </View>
       <View style={{display:'flex',flexDirection:'row',width:370, justifyContent:'space-evenly',backgroundColor:'#528265',height:60,marginTop:170,padding:15}}>
        <TouchableOpacity onPress={() => navigation.navigate('Map')}><Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/Vector.png',
          }}
          style={styles.image5}
        /></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Events')}><Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/Vector2.png',
          }}
          style={styles.image5}
        /></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('location')}><Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/Vector3.png',
          }}
          style={styles.image5}
        /></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}><Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/Vector4.png',
          }}
          style={styles.image5}
        /></TouchableOpacity>
        </View>
      

       
       
       </View>
       </ScrollView>
</>)
}


export default Screen10;

const styles = StyleSheet.create({
   
    logo:{
        width:115,
        height:40,
        marginTop:30,
        margin:10
       },
     image3:{
        width:40,
        height:40
     },
     view2:{
      height:67,
      width:295,
      backgroundColor:"#D2D9D1",
      borderRadius:10,
     
      marginTop:30,
      display:'flex',
      justifyContent:'space-between'

     },
     image4:{
      width:25,
      height:25,
      

    
     },
     image5:{
      height:21,
      width:25,
     
      padding:1
   },
     text4:{
      fontSize:24,
      fontWeight:500,
      margin:10,
      paddingLeft:20
      
     }
      
  
   })