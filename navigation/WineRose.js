import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const Rose = () =>{

  return (
    <View style={{ flex: 1  , backgroundColor: '#F8E8E8'}}>
      <View  style={{ flex: 2, justifyContent: 'center', alignItems: 'center', flexDirection:'row'  }}>
        <Image
          style={styles.logo}
          source={require('../assets/logo/logo_dark_mode.png')}
        /> 
      </View>
      <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center', flexDirection:'row' }}>
        <Text  style={{ color: '#AD160F', fontSize: 30 }}>Les vins</Text> 
        <Text  style={{ color: '#AD160F', fontSize: 80 }}>Rosés</Text>
      </View>
  </View>

  );
}
const styles = StyleSheet.create({
  h1: {
    fontSize: 80,
    paddingLeft:  10,
    color: '#ffffff'
    },
  
    logo: {
      width: 150,
      height: 80,
      margin: 40,
      alignContent: 'center',
      justifyContent: 'center'
    }
});

export default Rose;
