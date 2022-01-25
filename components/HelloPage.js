import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeLink from '../components/MainContent/HomeLink';
import Icon from '../components/Icon/Icon';


// Cette page est notre page d'atterrissage (index in app.js)

//Composition - visuel rendu Q
function HomeHelloScreen() {
    return (
    <View style={{ flex: 3, backgroundColor: '#F2E5BD', alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ flex: 0.25, backgroundColor: '#F2E5BD', alignItems: 'center', justifyContent: 'center' }}>
            <Icon/>
        </View>
        <View  style={{ flex: 0.5, backgroundColor: '#F2E5BD', alignItems: 'center', justifyContent: 'center' }}>
            <HomeLink />   
        </View>
    </View>
        
    );
}

// Définition du logo
function LogoTitle() {
    return (
        <Image
            style={{ width: 100, height: 60 }}
            source={require('../assets/logo/logo_light-mode.png')}  
            containerStyle={styles.background}
        />
    );
}

const Stack = createNativeStackNavigator();

// construction de l'affichage
function AppHome() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    style={styles.background}
                    name="HomeLink"
                    component={HomeHelloScreen}
                    options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
                />
                </Stack.Navigator>  
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F2E5BD',
    }
});

export default AppHome;