import React from 'react';
import { Text, View, StyleSheet,  } from 'react-native';




const Red = () =>{
  return (

  <View style={{ flex: 1,  backgroundColor: '#511201'}}>
    <Text style={styles.h1}>Di wino</Text>
    <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center', flexDirection:'row'  }}>
      <Text style={{ color: '#AD160F', fontSize: 30 }}>Les vins </Text>
      <Text style={{ color: '#AD160F', fontSize: 80 }}>Rouges</Text>
    </View>
  </View>
  

  );
}

const styles = StyleSheet.create({
  h1: {
      fontSize: 80,
      paddingLeft:  10,
      color: '#ffffff'
    }
});

export default Red;