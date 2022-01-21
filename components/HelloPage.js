import * as React from 'react';
import { View, Text, Image  ,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Cette page va être notre page d'atterrissage index

//Composition - visuel rendu 
function HomeHelloScreen() {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home -Hello- Screen</Text>

        <Button>Home</Button>
        <Button>TEST</Button>
        <Button>SCREEN</Button>
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

// Login 
// function Login() {
//     return(

//     );
// }

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
