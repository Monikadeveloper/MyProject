/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  ScrollViewBase,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Register from './Components/Register';
import Login from './Components/Login';
import Map from './Components/Map';
import Screen4 from './Components/Screen4';
import Screen5 from './Components/Screen5';
import Screen6 from './Components/Screen6';
import Screen7 from './Components/Screen7';
import Screen8 from './Components/Screen8';
import Screen9 from './Components/Screen9';
import Screen10 from './Components/Screen10';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigator from './Components/BottomNavigator';




const Stack = createNativeStackNavigator();


function App(){


 
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Register'>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Events" component={Screen4} />
        <Stack.Screen name="FAQ" component={Screen5} />
        <Stack.Screen name="Educate" component={Screen6} />
        <Stack.Screen name="location" component={Screen7} />
        <Stack.Screen name="Profile" component={Screen8} />
        <Stack.Screen name="Help" component={Screen9} />
        <Stack.Screen name="Security" component={Screen10} />
        
      </Stack.Navigator>

    </NavigationContainer>
  
    </>
  );
}

const styles = StyleSheet.create({

});

export default App;
