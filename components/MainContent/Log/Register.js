import React from 'react';
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback,  Button, Keyboard, ScrollView, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SubmitButton from '../../button/SubmitButton';
import { Ionicons } from '@expo/vector-icons';

const Register = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.containerL}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.Container}>
          <View style={styles.inner}>              
            <Text style={styles.header}>Inscription </Text>           
              <ScrollView style={styles.ScrollView}>
                <View style={styles.Bloc}>
                  <Text style={styles.SubtitleH1}>Amateur de vins </Text>
                    <View style={styles.ArrowDownContainer}>
                      <Ionicons 
                          name={'arrow-down-outline'}
                          size= {80} 
                          color={'#AD160F'}
                          alignItems={'center'}
                          justifyContent={'center'}
                          style={[styles.box, {
                            transform: [{ rotate: "45deg" }]
                          }]} 
                        /> 
                      <Text style={styles.SubtitleH2}>Identifiant | Profil</Text>
                    </View>
                    <TextInput placeholder="Nom" style={styles.textInput} />
                    <TextInput placeholder="Mail" style={styles.textInput} />
                    <TextInput placeholder="Mot de passe" style={styles.textInput} />
                </View>
                <View style={styles.Bloc}>
                  <Text style={styles.SubtitleH1}>Compte PRO</Text>                
                  <View style={styles.ArrowDownContainer}>
                    <Ionicons 
                      name={'arrow-down-outline'}
                      size= {80} 
                      color={'#AD160F'}
                      alignItems={'center'}
                      justifyContent={'center'}
                      style={[styles.box, {
                        transform: [{ rotate: "-45deg" }]
                      }]} 
                    />
                    <Text style={styles.SubtitleH2}>Professionnel | Producteur</Text>
                  </View>
                  <TextInput placeholder="N° de siret" style={styles.textInput} />
                  <TextInput placeholder="Nom de l'entreprise" style={styles.textInput} />
                  <TextInput placeholder="Domaine - Appellation" style={styles.textInput} />
                </View>
                <View style={styles.btnContainer}>
                  <SubmitButton/>
                </View>
              </ScrollView>          
          </View> 
          
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  containerL: {
    flex: 1,
    backgroundColor: "#F2E5BD"
  },
  Container: {
    flex: 1,
  },  
  ScrollView: {
    backgroundColor: '#F2E5BD',
    marginHorizontal: 10,
    paddingBottom: 20,
  },
  inner: {
    padding: 24,
    flex: 2,
    justifyContent: "space-around"
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
  SubtitleH1: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: 55,
    marginBottom: 10,
    textAlign:'left',
    
},
SubtitleH2:{
    fontSize: 15,
    color: "#511201",
    textAlign: 'center',
    flexWrap: 'wrap',
    marginVertical: 20,
},
  ArrowDownContainer: {
    alignItems:'flex-end',
    flexDirection:'row',
    marginBottom: 40,
  
  },
  textInput: {
    height: 20,
    borderColor: "#AD160F",
    color: "#AD160F",
    borderBottomWidth: 1,
    marginBottom: 30,
    fontSize: 20,
  },
  Bloc:{
    flex: 2,
    paddingBottom: 15,
    marginBottom:15,
  },
  btnContainer: {
    color: "white",
    marginTop: 5,
    marginBottom:60,
    marginHorizontal: 3,
  
  },
});

export default Register;