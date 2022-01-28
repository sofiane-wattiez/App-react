import { View, StyleSheet} from 'react-native';
import React from 'react';
import AppLog from './components/HelloPage';

export default function App() {
 
  return (
    <View style={{ flex: 1 }}>      
      <AppLog style={{ flex: 1}}/> 
    </View>
  );
}
