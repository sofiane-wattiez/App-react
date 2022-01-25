import  { View,Text,useEffect,useState} from 'react';


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
    useEffect(() => {
      CallApi()
    }, [])
    
    return(
      <View>
        <Text>{datas.title}</Text>
      </View>
    );

  }
    export default CallApi;


