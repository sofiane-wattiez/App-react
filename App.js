import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import React, { useState, useEffect } from 'react';

export default function App() {
  // Exemple d'une requete get avec chemin fonctionnel en revanche il faut lancer un serveur symfony en parrallele pour pouvoirs 
  // Exécuter des requetes actuellement dans le temps ont vérra si ont se prend un serveur web pour que l'api sois tous le temps dispo 
  // Je vous brief Demain
  // 
  // const callApi = async () => {
  //   let result = await fetch(
  //     'https://localhost:8000/api/wine_reds',
  //     {
  //      method: 'GET' 
  //     //  headers:'Access-Control-Allow-Origin'
  //     })
  //     .then((response) => {return response.json()})
  //     console.log(result)
  // }
  // useEffect(() => {
  //   callApi()
  // }, [])

  return (
    <View style={styles.container}>
      <Text>Wine Search </Text>
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
