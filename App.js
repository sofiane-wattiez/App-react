import { Text , View, Image, StyleSheet, Button   } from 'react-native';
import React, { useState, useEffect } from 'react';
// import NavBar from './components/NavigationBar/NavBar';
import HomeHelloScreen from './components/HelloPage';
// import CallApi from './api/CallApi';


export default function App() {

  const [datas , setDatas] = useState([])
  const CallApi = async () => {
    let result = await fetch(
      'https://localhost:8000/api/wine_reds',
      {
       method: 'GET' ,
       headers: {
         'Content-Type': 'application/json',
          
        }
      })
      .then((response) => {return response.json()})
      setDatas(result)
      console.log(result)
  }
  useEffect(() => {
    CallApi()
  }, [])

  // return(
  //   <View>
  //     <Text>{datas.title}</Text>
  //   </View>
  // );

  return (
    <View style={{ flex: 1 }}>
      {/* <NavBar style={{ flex: 4 }}/> */}
    
      <View style={{ flex: 4 }}>
        <Text>Test Integration API</Text>
      <Text>{datas.title}</Text>
      </View>
      {/* <HomeHelloScreen style={{ flex: 4 }}/> */}
      
 
    </View>
  );
}

