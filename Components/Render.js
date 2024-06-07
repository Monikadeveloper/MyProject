import React, { useState } from "react";
import {  TouchableOpacity, View } from "react-native";
import Screen4 from "./Screen4";
import Screen5 from "./Screen5";
import Screen6 from "./Screen6";
import TopScreen from "./TopScreen";


const Render=({type})=>{
 
    (type==="Events")?  <Screen4/>:(type==="FAQ"); return <Screen5/> 
    }
    // switch(type){
    //     case "Events": return <Screen4/>
    //     break;
    //     case "FAQ": return <Screen5/>
    //     break;
    //     case "Educate": return <Screen6/>
    //     default:
    //         break;
    // }

        
        export default Render;
       
        
        
       