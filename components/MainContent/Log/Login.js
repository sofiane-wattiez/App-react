import React from 'react';
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback,  Button, Keyboard, ScrollView, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SubmitButton from '../../button/SubmitButton';
import { Ionicons } from '@expo/vector-icons';

const Login = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.containerL}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.Container}>
          <View style={styles.inner}>              
            <Text style={styles.header}>Se connecter </Text>
            <ScrollView style={styles.ScrollView}>
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
                <Text style={styles.p}>Identifiant | Profil</Text>
              </View>
              <TextInput placeholder="Mail" style={styles.textInput} />
              <TextInput placeholder="Mot de passe" style={styles.textInput} />
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
    justifyContent:'center',
    alignItems:'center',
  },  
  ScrollView: {
    flex: 1,
    backgroundColor: '#F2E5BD',
    marginHorizontal: 20,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around"
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
  p:{
    fontSize: 15,
    color: "#511201",
    textAlign: 'center',
    // marginBottom: 20,
    marginVertical: 20,
    
},
  ArrowDownContainer: {
    alignItems:'center',
    flexDirection:'row',
  },
  textInput: {
    height: 30,
    borderColor: "#AD160F",
    color: "#AD160F",
    borderBottomWidth: 1,
    marginBottom: 35,
    fontSize: 20,
  },
  btnContainer: {
    color: "white",
    marginTop: 50,
    marginVertical: 35,
    marginHorizontal: 35,
  
  },
  Button: {
    backgroundColor: "#AD160F",
    color: "#AD160F",
  }
});

export default Login;