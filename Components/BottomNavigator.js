import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Map from './Map';
import Screen4 from './Screen4';
import Screen7 from './Screen7';
import Screen8 from './Screen8';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function BottomNavigator() {
  return (
    <NavigationContainer>
    <Tab.Navigator >
      <Tab.Screen name="Map" component={Map}  />
       
      <Tab.Screen name="Events" component={Screen4} />
      
        <Tab.Screen name="location" component={Screen7} />
        <Tab.Screen name="Profile" component={Screen8} />
       
    </Tab.Navigator>
    </NavigationContainer>
  );
}
export default BottomNavigator;