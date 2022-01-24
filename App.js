import { View } from 'react-native';
import React from 'react';
// import NavBar from './components/NavigationBar/NavBar';
import HomeHelloScreen from './components/HelloPage';





export default function App() {
 
  return (
    <View style={{ flex: 1 }}>
      {/* <NavBar style={{ flex: 4 }}/> */}
      <HomeHelloScreen style={{ flex: 4 }}/>
    
    </View>
  );
}

