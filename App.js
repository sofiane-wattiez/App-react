import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  
  const callApi = async () => {
    let result = await fetch(
      'https://localhost:8000/api/wine_reds',
      {
       method: 'GET' 
      //  headers:'Access-Control-Allow-Origin'
      })
      .then((response) => {return response.json()})
      console.log(result)
  }
  useEffect(() => {
    callApi()
  }, [])

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
