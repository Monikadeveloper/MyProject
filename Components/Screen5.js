import React from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Screen5=({navigation})=>{

return(
<ScrollView><View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
   <Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/logo-no-background 1.png',
          }}
          style={styles.logo}
        />
        <View style={{display:'flex',justifyContent:'space-evenly',flexDirection:'row'}}>
            <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Events')}>
                <Text style={styles.text2}>Events</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('FAQ')}>
                <Text style={styles.text1}>FAQ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Educate')}>
                <Text style={styles.text2}>Educate</Text>
            </TouchableOpacity>
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
       
       
        
        <View style={{display:'flex',flexDirection:'row',width:370, justifyContent:'space-evenly',backgroundColor:'#528265',height:50,marginTop:0,padding:10}}>
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


export default Screen5;

const styles = StyleSheet.create({
   logo:{
    width:248,
    height:85,

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