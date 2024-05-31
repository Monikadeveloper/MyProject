import React from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Map=()=>{

return(<><View>
<Image
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
        <View style={{display:'flex',flexDirection:'row', justifyContent:'space-evenly'}}>
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
        
</View>
</>)
}


export default Map;

const styles = StyleSheet.create({

 image:{
    height:485,
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