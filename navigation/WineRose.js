import React from 'react';
import { Text, View, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RegisterLink from '../components/button/RegisterLink';
import Separator from '../components/layout/Separator';
import Logo from '../components/Identity/Logo';
import Articles from '../components/MainContent/Articles';

const Rose = () =>{

  return (
    <SafeAreaView style={styles.Container}>
    <View style={{ flex: 2, backgroundColor: '#F8E8E8', justifyContent: 'center', alignItems: 'center' }}>
      <ScrollView style={styles.ScrollView}>
        <Logo/>   
        
        <View style={{ flex: 6, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.SubtitleH1}>ROSE</Text>
            <Text style={styles.SubtitleH2}>Nos meilleurs sélections</Text>
            <Text style={styles.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Text>                       
            {/* Articles Get via l'api */}
            <Articles/>
            <Text style={styles.info}>Ici prochainement les articles</Text>
            <Text style={styles.SubtitleH2}>Les plus appréciés</Text>
            <Text style={styles.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Text>
            {/* Articles Get via l'api */}
            <Articles/>
            <Text style={styles.info}>Ici prochainement les articles</Text>
        </View>                        
          
        <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.p}>- Faites connaitre vos productions -</Text>
            <Text style={styles.SubtitleH2}>Rejoins-nous</Text>
        </View>
        <Separator/>                        

        <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center'}}>
            <RegisterLink/>
        </View>
      </ScrollView>
    </View>
  </SafeAreaView>
  

  );
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  ScrollView: {
    backgroundColor: '#F8E8E8',
    marginHorizontal: 50,
    // marginBottom: 20,
  },
  SubtitleH1: {
    fontSize: 50,
    color: '#AD160F',
    textAlign: 'center',
    lineHeight: 55,
    marginBottom: 20,
  },
  SubtitleH2:{
    fontSize: 25,
    color: '#511201',
    // fontWeight: 'bolder',
    textAlign: 'center',
    padding: 30,
  },
  p:{
    fontSize: 20,
    color: '#AD160F',
    textAlign: 'left',
    marginBottom: 20,
    marginVertical: 20,
  },
  info:{
    fontSize: 20,
    color: 'white',
    textAlign: 'left',
    marginBottom: 30,
    // marginVertical: 20,
  },
});

export default Rose;
