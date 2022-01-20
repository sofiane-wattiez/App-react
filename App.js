
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
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

