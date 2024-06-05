/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';



import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Register from './Register';
import Login from './Login';
import Screen5 from './Screen5';
import Screen6 from './Screen6';
import Screen9 from './Screen9';
import Screen10 from './Screen10';




const Stack = createNativeStackNavigator();

function Navigator(){

  return (
    <>
    <NavigationContainer>
 
      <Stack.Navigator initialRouteName='Register'>

        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="FAQ" component={Screen5} />
        <Stack.Screen name="Educate" component={Screen6} />
        <Stack.Screen name="Help" component={Screen9} />
        <Stack.Screen name="Security" component={Screen10} />
        
      </Stack.Navigator>

    </NavigationContainer>
  
    </>
  );
}


export default Navigator;
