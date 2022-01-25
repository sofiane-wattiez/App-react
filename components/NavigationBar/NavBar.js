import * as React from 'react';
// import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../../navigation/HomeScreen'
import WineRed from '../../navigation/WineRed';
import WineRose from '../../navigation/WineRose';
import WineWhite from '../../navigation/WineWhite';


// Home page setting - props ContextState
const Tab = createBottomTabNavigator();

export default function NavBar() {
  return (
    <NavigationContainer style={{ flex: 1}}>
      <Tab.Navigator style={{ flex: 1}}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, size, color }) => {
              if (route.name === 'Win\'Home') {
                return (
                  <Ionicons
                    name={focused ? 'home' : 'ellipse-sharp'}
                    size={focused ?  35 : 20 }
                    color={focused ? '#AD160F' : '#AD160F' }
                  />
                );
              } else if (route.name === 'Rouge') {
                return (
                  <Ionicons
                    name={focused ? 'wine' : 'ellipse-sharp'}
                    size={focused ?  35 : 20 }
                    color={focused ? '#511201' : '#511201' }
                  />
                );
              }  else if (route.name === 'Blanc') {
                return (
                  <Ionicons
                    name={focused ?  'wine' : 'ellipse-sharp'}
                    size={focused ?  35 : 20 }
                    color={focused ? '#F2E5BD' : '#F2E5BD' }
                  />
                );
              } else if (route.name === 'Ros\u00e9') {
              return (
                <Ionicons
                  name={focused ?  'wine' :  'ellipse-sharp'}
                  size={focused ?  35 : 20 }
                  color={focused ? '#F8E8E8' : '#F8E8E8' }
                  />
              );
            }

            },
            tabBarInactiveTintColor: 'grey',
            tabBarActiveTintColor: 'black',
          })}

      >
        
        <Tab.Screen name="Win'Home" component={HomeScreen} />
        <Tab.Screen name="Rouge" component={WineRed}  />
        <Tab.Screen name="Blanc" component={WineWhite} />
        <Tab.Screen name="Rosé" component={WineRose}  />
      </Tab.Navigator>    
    </NavigationContainer>
  );
} 