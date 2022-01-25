import { Text , View, Image, StyleSheet, Button   } from 'react-native';
import React, { useState, useEffect } from 'react';
// import { AsyncStorage } from 'react-native';
import axios from 'axios';
// import NavBar from './components/NavigationBar/NavBar';
import HomeHelloScreen from './components/HelloPage';
// import CallApi from './api/CallApi';


export default function App() {

  const [datas , setDatas] = useState([])
  const CallApi = async () => {
  // Fetch Method
  //   let result = await fetch(
  //     'https://127.0.0.1:8000/api/articles?page=1', 
  //     {
  //      method: 'GET' ,
  //      headers: {
  //       'Accept': 'application/ld+json',
  //       'content-Type': 'application/ld+json',
  //       // Authorization: 'bearer '+await AsyncStorage.getItem('token')
         

  //       }
  //       , body: JSON.stringify(result)
  //       , title: 'Test',
      
  //     })
  //     .then((response) => {return response.json()})
  //     setDatas(result);
  //     console.log(result)
  //     // console.log(JSON.stringify(result))
     
  // }
  const  allQuery = [
    axios.get('https://127.0.0.1:8000/api/wine_reds?page=1'),
    // axios.get('https://127.0.0.1:8000/api/users?page=1'),
    // axios.get('https://127.0.0.1:8000/api/articles?page=1'),
    // axios.get('https://127.0.0.1:8000/api/wine_white?page=1'),
    // axios.get('https://127.0.0.1:8000/api/wine_rose?page=1'),
  ]
  let result = await Promise.all(allQuery).then((response) => {return response} )
  console.log(result)
  setDatas(result)
//   .catch((error) => {
//     //Error 
//     console.error(error);
// });
}
  useEffect(() => {
    CallApi()
  }, [])

 
  return (
    <View style={{ flex: 1 }}>
      {/* <NavBar style={{ flex: 4 }}/> */}
    
     
      <HomeHelloScreen style={{ flex: 4 }}/>
      <Text  style={{flex:1}}>{datas.title}</Text>
    
     
      
    </View>
  );
}

