import React from 'react';
import { Text, View } from 'react-native';


const Red = () =>{
  return (

  <View style={{ flex: 1,  backgroundColor: '#FF0000'}}>
    <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Red</Text>
    </View>
    <View style={{ flex: 1 }}></View>
  </View>
    
  );
}

export default Red;

