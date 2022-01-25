import { Text , View, Image, StyleSheet, Button   } from 'react-native';
import  { useState, useEffect } from 'react';
import axios from 'axios';
import HomeHelloScreen from './components/HelloPage';
// import CallApi from './api/CallApi';


  const [datas , setDatas] = useState([])
  const GetApi = async () => {
  const  allQuery = [
    axios.get('https://127.0.0.1:8000/api/wine_reds'),
    axios.get('https://127.0.0.1:8000/api/wine_white'),
    // axios.get('https://127.0.0.1:8000/api/articles'),
    // axios.get('https://127.0.0.1:8000/api/user'),
  ]
  let result = await Promise.all(allQuery).then((response) => {return response} )
  console.log(result)
  setDatas(result)
//   .catch((error) => {
//     //Error 
//     console.error(error);
// });
useEffect(() => {
  GetApi()
}, [])

return (
  <View style={styles.container}>
    <Text>TEST INTEGRATION API</Text>
    <Text>{datas.title}</Text>
  </View>
);

}
 
 export default GetApi;