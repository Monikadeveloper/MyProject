import React from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import TopScreen from "./TopScreen";

const Screen7=({navigation})=>{

return(
<ScrollView><View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
   <Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/logo-no-background 1.png',
          }}
          style={styles.logo}
        />
        <TopScreen/>
       <View style={styles.view3}>
<Text style={styles.text4}>
Type your location   </Text>

<TouchableOpacity onPress={() => navigation.navigate('Map')}><Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/Location.png',
          }}
          style={styles.image3}
        /></TouchableOpacity>

       </View>
   <Text style={{fontWeight:'bold',fontSize:32,marginTop:20,
   }}>Accra</Text>
   <Text style={{fontWeight:500,fontSize:24,margin:10,}}>{19}°C</Text>
   <Text style={{fontWeight:400,fontSize:20}}>Sunny</Text>
   <Text style={{fontWeight:700,fontSize:16,margin:10}}>Weather Forecast</Text>
       
       <View style={styles.view3}>
<View style={{width:47,height:36,backgroundColor:'#528265',padding:10,borderRadius:10}}>
<TouchableOpacity><Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/Cloud.png',
          }}
          style={styles.image3}
        /></TouchableOpacity>
</View>
<View>
    <Text>Saturday, 6 May 19</Text>
    <Text>Sunny</Text>
</View>
 </View>
 <View style={styles.view3}>
<View style={{width:47,height:36,backgroundColor:'#528265',padding:10,borderRadius:10}}>
<TouchableOpacity><Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/Cloud.png',
          }}
          style={styles.image3}
        /></TouchableOpacity>
</View>
<View>
    <Text>Saturday, 6 May 19</Text>
    <Text>Sunny</Text>
</View>
 </View>
       
        
        
      
</View>
</ScrollView>)
}


export default Screen7;

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
   view2:{height:100, width:299, backgroundColor:'#D9D9D9',margin:10},
   image3:{
    height:100,
   },
   image2:{
    height:25,
    width:28,
  
 },
 
 view3:{
    backgroundColor:'#D2D9D1',
    height:60,
    width:301,
    
    margin:5,
    borderRadius:10,
    color:'black',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    padding:10
 
 },

 text4:{
fontSize:16,
padding:5

 },
 image3:{
    height:17,
    width:25,

    },
 
   

  
   
})