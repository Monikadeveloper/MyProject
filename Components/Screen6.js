import React from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import TopScreen from "./TopScreen";


const Screen6=({navigation})=>{

return(
<ScrollView>
  <TopScreen/>
       <View style={styles.view3}>
<Text style={styles.text4}>
What is waste ?    </Text>

<TouchableOpacity><Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/download.png',
          }}
          style={styles.image3}
        /></TouchableOpacity>

       </View>
       <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
       <View style={styles.view4}>
<Text style={styles.text4}>
Waste Management   </Text>

<TouchableOpacity><Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/download.png',
          }}
          style={styles.image3}
        /></TouchableOpacity>
        
  <Text>This are activities that are 
aimed in the reduction of 
adverse effects of waste on 
human health, the environment, 
planetary resources and 
aesthetics, by several methods</Text>
  </View>
     </View>
       <View style={styles.view3}>
<Text style={styles.text4}>
Importance of waster management  </Text>

<TouchableOpacity><Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/download.png',
          }}
          style={styles.image3}
        /></TouchableOpacity>

       </View>
       <View style={styles.view3}>
<Text style={styles.text4}>
Types of waste    </Text>

<TouchableOpacity><Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/download.png',
          }}
          style={styles.image3}
        /></TouchableOpacity>

       </View>
       
        
       

</ScrollView>)
}


export default Screen6;

const styles = StyleSheet.create({
   logo:{
    width:248,
    height:85,
    marginTop:10,
// marginLeft:60,

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
   view2:{height:100, width:299, backgroundColor:'#D9D9D9',margin:10},
   image3:{
    height:100,
   },
   image2:{
    height:25,
    width:28,
    marginLeft:10
 },
 
 view3:{
    backgroundColor:'#D2D9D1',
    height:44,
    width:298,
    // marginLeft:35,
    margin:5,
    borderRadius:10,
    color:'black',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    padding:10
 }, view4:{
    backgroundColor:'#D2D9D1',
    height:217,
    width:305,
    
    margin:5,
    borderRadius:10,
    color:'black',
    display:'flex',
    // flexDirection:'row',
    justifyContent:'space-evenly',
    padding:10
 },

 text4:{
fontSize:16,
padding:5

 },
 image3:{
    height:24,
    width:24,
    flexDirection:'flex-end'
    },
 
   

  
   
})