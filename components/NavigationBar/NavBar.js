import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import WineRed from '../../navigation/WineRed.js';
import WineRose from '../../navigation/WineRose.js';
import WineWhite from '../../navigation/WineWhite.js';
import HomeScreen from '../../navigation/HomeScreen.js';




const Tab = createBottomTabNavigator();

export default function NavBar() {
  return (
    <NavigationContainer style={{ flex: 1 }}>
      <Tab.Navigator 
           screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === 'Home') {
                return (
                  <Ionicons
                    name={focused ? 'home' : 'home'}
                    size={size}
                    color={'#000000'}
                  />
                );
              } else if (route.name === "Wine red") {
                return (
                  <Ionicons
                    name={focused ? 'wine' : 'wine'}
                    size={size}
                    color={'#DC143C'}
                  />
                );
              }  else if (route.name === 'Wine white') {
                return (
                  <Ionicons
                    name={focused ? 'wine' : 'wine'}
                    size={size}
                    color={'#ffdc86'}
                  />
                );
              } else if (route.name === 'Wine rose') {
              return (
                <Ionicons
                  name={focused ? 'wine' : 'wine'}
                  size={size}
                  color={'#e7a6c6'}
                />
              );
            }

            },
            tabBarInactiveTintColor: 'black',
            tabBarActiveTintColor: 'tomato',
          })}
      
      >
        <Tab.Screen name="Home" component={HomeScreen}  />
        <Tab.Screen name="Wine red" component={WineRed}  />
        <Tab.Screen name="Wine white" component={WineWhite} />
        <Tab.Screen name="Wine rose" component={WineRose}  />
      </Tab.Navigator>
    </NavigationContainer>
  );
} 