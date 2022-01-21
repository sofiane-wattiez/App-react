import react , { StyleSheet,View,Text,useEffect,useState} from 'react';

const GetApi = async () => {

const urlApi = 'https://localhost:8000/api/'
// let id = [i + i++]

    const GetApiWineRed = async () => {

    const [datas , setDatas] = useState([])
    // Il faut probablement créer un chemin générique avec les id etc
    // exemple  : 'https://localhost:8000/api/wine_reds'+id,
        // let id = i++;
        let result = await fetch(
         urlApi+'wine_reds/'.jsonId,
          {
            headers: {
                Authorization: token,
                'Content-type': 'application/json',
                /** rest of headers... */
              },
           method: 'GET' 
           
          //  headers:'Access-Control-Allow-Origin'
          })
          .then((response) => {return response.json()})
         setDatas(result)
         useEffect(() => {
            GetApiWineRed()
          }, [])
        
          return (
              <View>
                  <Text>TEST GET API</Text>
                  <Text>{datas.id}</Text>
              </View>
          )
      }
}


// const styles = StyleSheet.create({
//     h1: {
//         fontSize: 80,
//         color: '#ffffff',
//     },
    
//     logo: {
//     width: 150,
//     height: 80,
//     margin: 40,
//     alignContent: 'center',
//     justifyContent: 'center'
//     }
// });

export default GetApi;