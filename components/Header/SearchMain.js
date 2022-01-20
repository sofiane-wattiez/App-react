import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const SearchMain = () =>{
    return (
  
    <View style={{ flex: 1,  backgroundColor: '#ffff'}}>
       <TextInput
        style={styles.input}
        placeholder="Search"
      />
    </View>
      
    );
  }

  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      width: 380,
      borderWidth: 1,
      padding: 10,
    },
  });

export default SearchMain;