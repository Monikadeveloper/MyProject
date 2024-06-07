import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import TopScreen from "./TopScreen";

const Screen4=()=>{



return(
<ScrollView>
<TopScreen/>
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