import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WineRed from '../../navigation/WineRed.js';
import WineRose from '../../navigation/WineRose.js';
import WineWhite from '../../navigation/WineWhite.js';



function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();

export default function NavBar() {
  return (
    <NavigationContainer style={{ flex: 1 }}>
      <Tab.Navigator style={{ flex: 2}}>
        <Tab.Screen name="home" component={HomeScreen}  />
        <Tab.Screen name="Wine red" component={WineRed}  />
        <Tab.Screen name="Wine white" component={WineWhite} />
        <Tab.Screen name="Wine rose" component={WineRose}  />
      </Tab.Navigator>
    </NavigationContainer>
  );
} 