import React from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Screen4=({navigation})=>{

return(
<ScrollView><View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
   <Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/logo-no-background 1.png',
          }}
          style={styles.logo}
        />
        <View style={{display:'flex',justifyContent:'space-evenly',flexDirection:'row'}}>
            <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Events')}>
                <Text style={styles.text1}>Events</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('FAQ')}>
                <Text style={styles.text2}>FAQ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Educate')}>
                <Text style={styles.text2} >Educate</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.view2}>
            
        <Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/d3c1caaeb4c4eb10146adbcf97adafa8.jpeg',
          }}
          style={styles.image3}/>
        </View>
        <Text style={styles.text3}>Kibera Clean up 16th May 2023</Text>

        <View style={styles.view2}>
            
       
        </View>
        <Text style={styles.text3}>Kisumu Recycling Bins installation
19th May 2023</Text>

        <View style={styles.view2}>
            
       
        </View>
        <Text style={styles.text3}>Kibera Clean up 16th May 2023</Text>
        <View style={{display:'flex',flexDirection:'row', justifyContent:'space-evenly',backgroundColor:'#528265',height:50,marginTop:20,padding:10,width:370}}>
        <TouchableOpacity onPress={() => navigation.navigate('Map')}><Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/Vector.png',
          }}
          style={styles.image2}
        /></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Events')}><Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/Vector2.png',
          }}
          style={styles.image2}
        /></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('location')}><Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/Vector3.png',
          }}
          style={styles.image2}
        /></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}><Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/Vector4.png',
          }}
          style={styles.image2}
        /></TouchableOpacity>
        </View>
      
</View>
</ScrollView>)
}


export default Screen4;

const styles = StyleSheet.create({
   logo:{
    width:248,
    height:85,
    marginTop:10,

marginBottom:10
   },
   button1:{
    width:87,
    height:42,
    backgroundColor:'#528265',
    borderRadius:6,
 


   },
   button2:{
    width:87,
    height:42,
    borderRadius:6,
    borderWidth:1
 },
   text1:{
    padding:10,
    color:'white',
    fontSize:16,
    fontWeight:'bold'
   }, text2:{
    padding:10,
    fontSize:16,
    fontWeight:'bold'
   },
   text3:{
    textAlign:'center',
    fontSize:16,
    fontWeight:700
   },
   view2:{height:100, width:299, backgroundColor:'#D9D9D9',margin:5,marginLeft:40},
   image3:{
    height:100,
   },
   image2:{
    height:25,
    width:28,
    marginLeft:10
 }
   

  
   
})