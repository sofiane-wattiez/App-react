import React from 'react';
import { Text, View } from 'react-native';

const Rose = () =>{

  return (
    <View style={{ flex: 1  , backgroundColor: '#F2E5BD'}}>
    <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center', flexDirection:'row' }}>
      <Text>Les vins</Text> 
      <Text>Rosés</Text>
    </View>
  </View>
    
  );
}
export default Rose;

