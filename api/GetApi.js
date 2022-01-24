import { View,Text,useEffect,useState} from 'react';

function GetApi()  {

// const test = 'https://127.0.0.1:8000/api/wine_reds?page=1'
// let id = [i + i++]

    // let jsonId = [jsonId]
    // const GetApiWineRed = async () => {
        const callApi = async () => {
               const [datas , setDatas] = useState([])
            let result = await fetch(
              'https://localhost:8000/api/wine_reds',
              {
               method: 'GET' ,
               headers:{
               accept: "application/json",
                },
             
              })
              .then((response) => {return response.json()})
              console.log(result)
          }
          useEffect(() => {
            callApi(datas)
          }, [])

    // const [datas , setDatas] = useState([])
    // Il faut probablement créer un chemin générique avec les id etc
    // exemple  : 'https://localhost:8000/api/wine_reds'+id,
        // let result = await fetch(
        //  'https://localhost:8000/api/wine_reds.json',
        // // test ,
        //   {
        //     method: 'GET' ,
        //     headers: {
        //         "accept": "application/json",
        //         'Content-type': 'application/json',
        //         /** rest of headers... */
        //       },
        
        //   })
        //   .then((response) => {return response.json()})
        // //  setDatas(result)
        //  console.log(response)
        //  useEffect(() => {
        //     GetApiWineRed(datas)
        //   }, [])
    
        


          return (
              <View styles={{flex: 1 ,  width: 100, height: 50  }}>
                  <Text>TEST GET API</Text>
                  <Text>{datas}</Text>
              </View>
          )
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