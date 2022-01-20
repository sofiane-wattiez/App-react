import React from 'react';
import { Text, View } from 'react-native';


const White = () =>{
  return (
    <View style={{ flex: 1,  backgroundColor: '#F2E5BD' }}>
    <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center', flexDirection:'row' }}>
      <Text>Les vins</Text>
      <Text>Blancs</Text>
    </View>
  </View>
  );
}
export default White;

