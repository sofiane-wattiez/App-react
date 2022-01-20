import React from 'react';
import { Text, View } from 'react-native';


const White = () =>{
  return (
    <View style={{ flex: 1,  backgroundColor: '#F2E5BD' }}>
    <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center', flexDirection:'row' }}>
      <Text style={{ color: '#AD160F', fontSize: '30px' }}>Les vins</Text>
      <Text style={{ color: '#AD160F', fontSize: '80px' }}>Blancs</Text>
    </View>
  </View>
  );
}
export default White;

