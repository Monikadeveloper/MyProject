import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


const TopScreen=({navigation})=>{
const [type,setType]=useState('Events');
return(
<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
   <Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/logo-no-background 1.png',
          }}
          style={styles.logo}
        />
        <View style={{display:'flex',justifyContent:'space-evenly',flexDirection:'row',margin:10,gap:10}}>
            <TouchableOpacity style={styles.button1} onPress={navigation.navigate('Events')} >
                <Text style={styles.text1}>Events</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={navigation.navigate('FAQ')} >
                <Text style={styles.text2} >FAQ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={navigation.navigate('Educate')}>
                <Text style={styles.text2} >Educate</Text>
            </TouchableOpacity>
        </View>
        </View>
)};
        
        export default TopScreen;
        const styles = StyleSheet.create({
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
        })