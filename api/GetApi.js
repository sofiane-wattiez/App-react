import  { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar , View } from 'react-native';
import Item from '../layout/Item/Item';
import axios from 'axios';
import Articles from '../components/MainContent/Articles';
// import NavBar from './components/NavigationBar/NavBar';
// import HomeHelloScreen from './components/HelloPage';



export default function GetApi() {

const GetArticle = async () => {
    const [datas , setDatas] = useState([])
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
        // axios.get('https://127.0.0.1:8000/api/users'),
        axios.get('https://127.0.0.1:8000/api/articles'),
        // axios.get('https://127.0.0.1:8000/api/comments'),
    ]
    let result = await Promise.all(allQuery).then((response) => {return response} )
    console.log(JSON.stringify(result))

    
    setDatas(result)
    // .catch((error) => {
    //     //Error 
    //     console.error(error);
    // });
    useEffect(() => {
        GetArticle()
    }, [])
    

    const renderArticle = ({ item }) => (
        <Item title={item.title} />
    );
    
    return (
        <View>
            <GetArticle>{datas.title}</GetArticle>
        </View>
    );
    }

}