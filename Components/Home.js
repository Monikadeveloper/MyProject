import React from 'react';
import {
    Image,
    StyleSheet,
} from 'react-native';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Map from './Map';
import Screen4 from './Screen4';
import Screen7 from './Screen7';
import Screen8 from './Screen8';
import Render from './Render';



const Tab = createBottomTabNavigator();

function Home() {
 return (
        
        <Tab.Navigator  screenOptions={{headerShown:false,
            tabBarStyle: { position: 'absolute',backgroundColor:
            "#528265", borderRadius:4, color:'White' },}}>
        {/* <Tab.Screen name="Map" component={Map} /> */}
        <Tab.Screen name="Map"  component={Map}  options={{
          
          tabBarIcon: ({ color, size }) => (<Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/Vector.png',
          }}
          style={{ height:25,
            width:28,padding:10}}/>)
          
        }}  />
             <Tab.Screen name='Events' component={Screen4} options={{
          
          tabBarIcon: ({ color, size }) => (<Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/Vector2.png',
          }}
          style={{ height:25,
            width:28,padding:10}}/>)
          
        }}/>
             <Tab.Screen name="location" component={Screen7} options={{
          
          tabBarIcon: ({ color, size }) => (<Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/Vector3.png',
          }}
          style={{ height:25,
            width:28,padding:10}}/>)
          
        }} />
             <Tab.Screen name="Profile" component={Screen8} options={{
          
          tabBarIcon: ({ color, size }) => (<Image
          source={{
            uri: '/Users/dr.mac/Desktop/Chemba/MyProject/Components/Assets/Vector4.png',
          }}
          style={{ height:25,
            width:28,padding:10}}/>)
          
        }}/>
               
            </Tab.Navigator>
        
    );
}


export default Home;
