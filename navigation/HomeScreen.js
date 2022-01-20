import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import SearchMain from '../components/Header/SearchMain';


const HomeScreen = () =>{

  return (
   

  <View style={{ flex: 1,  backgroundColor: '#ffff'}}>
    <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
      <SearchMain/>
      
    </View>
    <View style={{ flex: 1 }}></View>
  </View>
    
  );
}

export default HomeScreen ;

