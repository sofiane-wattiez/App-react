import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import SearchMain from '../components/Header/SearchMain';


const HomeScreen = () =>{

  return (
   
    <View style={{ flex: 1, backgroundColor: '#F2E5BD', justifyContent: 'center', alignItems: 'center' }}>
    <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: '#AD160F'}}>Bienvenue dans votre application d'œnologie</Text>
      <Text style={{ color: '#AD160F' }}>Di' wino </Text>
    </View>
    
  </View>
    
  );
}

export default HomeScreen ;

