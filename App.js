import { View, Text, StyleSheet} from 'react-native';
import React , { useState, useEffect } from 'react';
import AppLog from './components/HelloPage';
import axios from 'axios';

export default function App() {
  
  // Website you wish to allow to connect


  const [datas , setDatas] = useState([])
  const CallApi = async () => {
      

    // axios.get('exp://10.0.2.55:8000/api/articles').then( function (response) {
      axios.get('https://127.0.0.1:8000/api/articles/3')
      .then( function (response) {
      console.log(response.data)
      setDatas(response.data)
    }).catch(function (error){
      console.log(error)
    });
  }
  useEffect(() => {
    CallApi()
  }, [])

  return (
    <View style={{ flex: 1 }}>      
      <AppLog style={{ flex: 1}}/> 
      <Text  style={{flex:1}}>TEST INTEGRATION</Text>
      <Text >{datas.title}</Text>
      <Text >{datas.id}</Text>
    </View>
  );

}