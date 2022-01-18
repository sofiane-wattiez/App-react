import React from 'react';
import { Text, View } from 'react-native';


const White = () =>{
  return (
    <View style={{ flex: 1, backgroundColor: '#ffff' }}>
    <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
      <Text>White</Text>
    </View>
    <View style={{ flex: 1 }}></View>
  </View>
  );
}
export default White;

