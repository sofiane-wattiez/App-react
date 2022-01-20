import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../../navigation/HomeScreen'
import WineRed from '../../navigation/WineRed.js';
import WineRose from '../../navigation/WineRose.js';
import WineWhite from '../../navigation/WineWhite.js';


// Home page setting - props ContextState


const Tab = createBottomTabNavigator();

export default function NavBar() {
  return (
    <NavigationContainer style={{ flex: 1}}>
    <Tab.Navigator style={{ flex: 2}}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Accueil') {
              return (
                <Ionicons
                  name={focused ? 'home' : 'ellipse-sharp'}
                  size={focused ?  35 : 10 }
                  color={focused ? '#AD160F' : '#AD160F' }
                />
              );
            } else if (route.name === 'Rouge') {
              return (
                <Ionicons
                  name={focused ? 'wine' : 'ellipse-sharp'}
                  size={focused ?  35 : 10 }
                  color={focused ? '#511201' : '#511201' }
                />
              );
            }  else if (route.name === 'Blanc') {
              return (
                <Ionicons
                  name={focused ?  'wine' : 'ellipse-sharp'}
                  size={focused ?  35 : 10 }
                  color={focused ? '#F2E5BD' : '#F2E5BD' }
                />
              );
            } else if (route.name === 'Ros\u00e9') {
            return (
              <Ionicons
                name={focused ?  'wine' :  'ellipse-sharp'}
                size={focused ?  35 : 10 }
                color={focused ? '#F8E8E8' : '#F8E8E8' }
                />
            );
          }

          },
          tabBarInactiveTintColor: 'grey',
          tabBarActiveTintColor: 'black',
        })}

    >
      <Tab.Screen name="Accueil" component={HomeScreen} />
      <Tab.Screen name="Rouge" component={WineRed}  />
      <Tab.Screen name="Blanc" component={WineWhite} />
      <Tab.Screen name="Rosé" component={WineRose}  />
    </Tab.Navigator>
    </NavigationContainer>
  );
} 