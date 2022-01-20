// import

const getApi = async () => {

    const [datas , setDatas] = useState([])

    let result = await fetch(
      'https://localhost:8000/api/wine_reds',
      {
       method: 'GET' 
      //  headers:'Access-Control-Allow-Origin'
      })
      .then((response) => {return response.json()})
     setDatas(result)
     useEffect(() => {
        getApi()
      }, [])
    
      return (
          <View>
              <Text></Text>
              <Text>{datas.title}</Text>
          </View>
      )
  }
  