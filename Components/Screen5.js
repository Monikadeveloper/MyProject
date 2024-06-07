import React from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import TopScreen from "./TopScreen";

const Screen5=({navigation})=>{

return(
<ScrollView>
  <TopScreen/>
       <View style={styles.view3}>
<Text style={styles.text4}>
What is Chemba and how does it work?    </Text>

<TouchableOpacity><Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/download.png',
          }}
          style={styles.image3}
        /></TouchableOpacity>

       </View>
       <View style={styles.view3}>
<Text style={styles.text4}>
What is Chemba and how does it work?    </Text>

<TouchableOpacity><Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/download.png',
          }}
          style={styles.image3}
        /></TouchableOpacity>

       </View>
       <View style={styles.view3}>
<Text style={styles.text4}>
What is Chemba and how does it work?    </Text>

<TouchableOpacity><Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/download.png',
          }}
          style={styles.image3}
        /></TouchableOpacity>

       </View>
       <View style={styles.view3}>
<Text style={styles.text4}>
What is Chemba and how does it work?    </Text>

<TouchableOpacity><Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/download.png',
          }}
          style={styles.image3}
        /></TouchableOpacity>

       </View>
       <View style={styles.view3}>
<Text style={styles.text4}>
What is Chemba and how does it work?    </Text>

<TouchableOpacity><Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/download.png',
          }}
          style={styles.image3}
        /></TouchableOpacity>

       </View>
       <View style={styles.view3}>
<Text style={styles.text4}>
What is Chemba and how does it work?    </Text>

<TouchableOpacity><Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/download.png',
          }}
          style={styles.image3}
        /></TouchableOpacity>

       </View>
       <View style={styles.view3}>
<Text style={styles.text4}>
What is Chemba and how does it work?    </Text>

<TouchableOpacity><Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/download.png',
          }}
          style={styles.image3}
        /></TouchableOpacity>

       </View>
       <View style={styles.view3}>
<Text style={styles.text4}>
What is Chemba and how does it work?    </Text>

<TouchableOpacity><Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/download.png',
          }}
          style={styles.image3}
        /></TouchableOpacity>

       </View>

       
       
        
       
      
      

</ScrollView>)
}


export default Screen5;

const styles = StyleSheet.create({
   logo:{
    width:248,
    height:85,

   },
  
   text3:{
    textAlign:'center',
    fontSize:16,
    fontWeight:700
   },
   view2:{height:80, width:299, backgroundColor:'#D9D9D9',margin:3},
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
  
    margin:5,
    borderRadius:10,
    color:'black',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    padding:10
 
   
   
   
 },
 text4:{
fontSize:14,
padding:5

 },
 image3:{
    height:24,
    width:24,
    },
 
   

  
   
})