import * as React from 'react';
import { View, Text, Image  ,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CallApi } from '../App';


//Composition - visuel rendu 
function HomeHelloScreen() {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home -Hello- Screen</Text>
       {/* <CallApi></CallApi> */}
    </View>
    
   
    );
}

// Définition du logo
function LogoTitle() {
    return (
        <Image
        style={{ width: 100, height: 50 }}
        source={require('../assets/logo/logo_light-mode.png')}    />
    );
}


const Stack = createNativeStackNavigator();

// construction de l'affichage
function AppHome() {
    return (
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            name="Home"
            component={HomeHelloScreen}
            options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
            />
        </Stack.Navigator>
        </NavigationContainer>
        
    );
}

export default AppHome;




// Se connecter (pro account => login | new inscription => register)


// Continuer sans inscription (free user)
