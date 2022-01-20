import react , {View,Text,useEffect,useState} from 'react';

const GetApi = async () => {
urlApi = 'https://localhost:8000/api/'
    const GetApiWineRed = async (id) => {

        const [datas , setDatas] = useState([])
    // Il faut probablement créer un chemin générique avec les id etc
    // exemple  : 'https://localhost:8000/api/wine_reds'+id,
        // let id = i++;
        let result = await fetch(
         urlApi+'wine_reds/'+id,
          {
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
export default GetApi;