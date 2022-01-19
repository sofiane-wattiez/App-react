import React from 'react';
import { Text, View } from 'react-native';


const Red = () =>{
  return (
  
  <View style={{ flex: 1,  backgroundColor: '#F2E5BD'}}>
    <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center', flexDirection:'row'  }}>
      <Text style={{ color: '#511201', fontSize: '30px' }}>Les vins </Text>
      <Text style={{ color: '#511201', fontSize: '80px' }}>Rouges</Text>
    </View>
  </View>
    
  );
}

export default Red;

