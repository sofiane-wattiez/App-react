
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import NavBar from './components/NavigationBar/NavBar';


export default function App() {

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: '#AD160F' }} />
      <View style={{ flex: 0.5, backgroundColor: '#000000' }} />
      <View style={{ flex: 3, backgroundColor: '#511201' }} />
      <NavBar style={{ flex: 1 }}/>
    </View>
    
  );
}

