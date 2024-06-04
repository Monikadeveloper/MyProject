import React from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Map=({navigation})=>{

return(<>
<ScrollView>
  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>

<View><Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/Screenshot 2023-05-06 at 12.31 1.png',
          }}
          style={styles.image}
        />
        </View>


        <View style={styles.View1}>
        <Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/Rectangle 8.png',
          }}
          style={styles.image1}
        />
         <Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/Rectangle 8.png',
          }}
          style={styles.image1}
        />
        <View style={{display:'flex',flexDirection:'row', justifyContent:'space-evenly',margin:20}}>
        <TouchableOpacity><Image
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
        </View>
        </ScrollView>
</>)
}


export default Map;

const styles = StyleSheet.create({

 image:{
    height:395,
    width:379
 },
 View1:{
    backgroundColor:'#528265',
    width:373,
    height:218
 },
 image1:{
    height:50,
    width:296,
    margin:10,
    marginLeft:30
 },
 image2:{
    height:25,
    width:28,
    marginLeft:10
 }
})