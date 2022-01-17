import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import Connexion from './api/Connexion'


export default function App() {
  // Exemple d'une requete get avec chemin fonctionnel en revanche il faut lancer un serveur symfony en parrallele pour pouvoirs 
  // Exécuter des requetes actuellement dans le temps ont vérra si ont se prend un serveur web pour que l'api sois tous le temps dispo 
  // Je vous brief Demain
  // 
  // const callApi = async () => {
  //   let result = await fetch(
  //     'http://127.0.0.1:8005/api/wine_reds',
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
      <Text>Wine Search</Text>
      <div>
        <h2>Nos sélections</h2>
        <p>Nos vins sont vigoureusement séléctionnées en fonctions de vos préfèrences</p>
        <div className="container_article">
          <div className="wine">
            <h3>Vin Rouge</h3>
            <div className="wine-picture">
              <img src="{{ asset('img/icon_white_bckg/icon-vins.png') }}" alt="logo" className="picture_size" />
              {'{'}# {'{'}% for wine_red in wine_red %{'}'} 
              {'{'}% endfor %{'}'} #{'}'}
              <a href="wine_red">Casala v2</a>
            </div>
          </div>
          <div className="wine">
            <h3>Vin Rose</h3>
            <div className="wine-picture">	
              <img src="{{ asset('img/icon_white_bckg/icon-vins.png') }}" alt="logo" className="picture_size" />
              {'{'}# {'{'}% for wine_rose in wine_rose %{'}'} 
              {'{'}% endfor %{'}'} #{'}'}
              <a href="#">Casala v3</a>
            </div>
          </div>
          <div className="wine">
            <h3>Vin Blanc</h3>
            <div className="wine-picture">
              <img src="{{ asset('img/icon_white_bckg/icon-vins.png') }}" alt="logo" className="picture_size" />
              {'{'}# {'{'}% for wine_white in wine_white %{'}'} 
              {'{'}% endfor %{'}'} #{'}'}
              <a href="#">Casala V4</a>
            </div>
          </div>
          <div className="wine">
            <h3>Vin Blanc</h3>
            <div className="wine-picture">
              <img src="{{ asset('img/icon_white_bckg/icon-vins.png') }}" alt="logo" className="picture_size" />
              <a href="#">Casalas v2</a>
            </div>
          </div>
          {'{'}# bloc de contenu à supprimer - utilisé uniquement pour le layout #{'}'}
          <h2>Nos sélections</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eum et a ea ratione blanditiis adipisci saepe porro eaque excepturi ex nisi, magni provident aperiam, sed esse debitis accusantium quibusdam?
            Illum ad unde ea est possimus quibusdam, neque deleniti praesentium, quod incidunt autem eum harum cumque qui, nisi ipsam provident fugiat quas distinctio. Magni et reprehenderit natus nemo modi sint?
            Optio facere qui maxime quasi enim pariatur. Debitis facere recusandae facilis veritatis? Deleniti beatae itaque et temporibus suscipit rem facilis voluptatem, saepe magni, earum facere dolore molestias nostrum aliquam dolorum?
            Sunt totam, numquam asperiores unde modi placeat! Provident impedit iusto alias sequi deserunt adipisci. Quisquam eveniet debitis fuga similique itaque explicabo ipsam quas dolores laboriosam? Exercitationem similique mollitia assumenda! Dolore!
            Quia vel obcaecati, aspernatur autem natus quisquam. Debitis deleniti doloribus illo eveniet, quidem soluta minima molestiae distinctio eum dolores cum doloremque alias eligendi ipsa sequi, ad sed, voluptatem unde veniam?</p>
          <br />
          <p style={{paddingBottom: '200px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eum et a ea ratione blanditiis adipisci saepe porro eaque excepturi ex nisi, magni provident aperiam, sed esse debitis accusantium quibusdam?
            Illum ad unde ea est possimus quibusdam, neque deleniti praesentium, quod incidunt autem eum harum cumque qui, nisi ipsam provident fugiat quas distinctio. Magni et reprehenderit natus nemo modi sint?
            Optio facere qui maxime quasi enim pariatur. Debitis facere recusandae facilis veritatis? Deleniti beatae itaque et temporibus suscipit rem facilis voluptatem, saepe magni, earum facere dolore molestias nostrum aliquam dolorum?
            Sunt totam, numquam asperiores unde modi placeat! Provident impedit iusto alias sequi deserunt adipisci. Quisquam eveniet debitis fuga similique itaque explicabo ipsam quas dolores laboriosam? Exercitationem similique mollitia assumenda! Dolore!
            Quia vel obcaecati, aspernatur autem natus quisquam. Debitis deleniti doloribus illo eveniet, quidem soluta minima molestiae distinctio eum dolores cum doloremque alias eligendi ipsa sequi, ad sed, voluptatem unde veniam?</p>
        </div>
      </div>

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
