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
import Screen5 from './Components/Assets/Screen5';
import Screen6 from './Components/Screen6';
import Screen7 from './Components/Screen7';
import Screen8 from './Components/Screen8';
import Screen9 from './Components/Screen9';
import Screen10 from './Components/Screen10';



function App(){


 
  return (
    <>
    {/* <Register/> */}
    {/* <Login/> */}
    {/* <Map/> */}
    {/* <Screen4/> */}
    {/* <Screen5/> */}
    {/* <Screen6/> */}
{/* <Screen7/> */}
{/* <Screen8/> */}
{/* <Screen9/> */}
<Screen10/>
    </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
