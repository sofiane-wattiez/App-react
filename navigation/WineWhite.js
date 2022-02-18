import React from 'react';
import { Text, View, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RegisterLink from '../components/button/RegisterLink';
import Separator from '../components/layout/Separator';
// import Logo from '../components/Identity/Logo';
import Articles from '../components/MainContent/Articles';
import Svg, { Circle } from 'react-native-svg';


const White = () =>{
  return (
    <SafeAreaView style={styles.Container}>
     
    <View style={{ flex: 2, backgroundColor: '#F2E5BD', justifyContent: 'center', alignItems: 'center' }}>
    
      <ScrollView style={styles.ScrollView}>
        {/* <Logo/>    */}
        <Svg style={{ position:'absolute', top:500,  left:0, zIndex:-1 }} height="100%" width="100%" viewBox="0 0 100 100" >                            
          <Circle cx="30" cy="30" r="30" strokeWidth=".3" fill="#e55953ad" />
        </Svg>
        <View style={{ flex: 6, justifyContent: 'center', alignItems: 'center'}}>
            {/* <Text style={styles.SubtitleH1}>*</Text> */}
            <Svg style={{ position:'absolute', left:0,  top: -275, zIndex:-1 }} height="100%" width="100%" viewBox="0 0 100 100" >                            
              <Circle cx="30" cy="30" r="50" strokeWidth=".3" fill="#ad160f73" />
            </Svg>
            <Text style={styles.SubtitleH2}>Nos meilleurs sélections</Text>
            <Text style={styles.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Text>                       
            <Articles/>
            <Text style={styles.info}>Ici prochainement les articles</Text>
            <Text style={styles.SubtitleH2}>Les plus appréciés</Text>
            <Text style={styles.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Text>
            <Articles/>
            <Svg style={{ position:'absolute', left:0,  top: 375, zIndex:-1 }} height="100%" width="100%" viewBox="0 0 100 100" >                            
              <Circle cx="30" cy="30" r="50" strokeWidth=".3" fill="#cd3029a1" />
            </Svg>
            <Text style={styles.info}>Ici prochainement les articles</Text>

        </View>                        
          
        <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.p2}>- Faites connaitre vos productions -</Text>
            <Text style={styles.SubtitleH2}>Rejoignez-nous</Text>
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
    backgroundColor: '#F2E5BD',     
    paddingTop: StatusBar.currentHeight,
  },
  ScrollView: {
    backgroundColor: '#F2E5BD',
    marginHorizontal: 10,
    marginBottom: 20,
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
      color: '#AD160F',
      fontWeight: 'bold',
      textAlign: 'left',
      padding: 10,
  },
  p:{
      fontSize: 20,
      color: '#000000',
      textAlign: 'left',
      padding: 30, 
  },
  p2:{
    fontSize: 15,
    color: '#ffffff',
    textAlign: 'left',

    padding: 30,
  },
  info:{
      fontSize: 20,
      color: '#511201',
      textAlign: 'left',
      marginBottom: 30,
      // marginVertical: 20,
  },
});

export default White;