import * as React from 'react';
import { View, Text, Button, Image, StyleSheet, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
// import HomeLink from '../components/MainContent/HomeLink';
import Register from '../components/MainContent/Log/Register';
import Login from '../components/MainContent/Log/Login';

// Cette page est notre page d'atterrissage (index in app.js)

// Composition - visuel final 
function HomePage ({ navigation }) {
    return (
        <View style={{ flex: 3, backgroundColor: '#F2E5BD', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ flex: 0.25, backgroundColor: '#F2E5BD', alignItems: 'center', justifyContent: 'center' }}>
                <Button
                    title="Register"
                    onPress={() => navigation.navigate('Register')}
                />
                <Button
                    title="Login"
                    onPress={() => navigation.navigate('Login')}
                />            </View>
            <View  style={{ flex: 0.5, backgroundColor: '#F2E5BD', alignItems: 'center', justifyContent: 'center' }}>      
              
            </View>
        </View>
        
    );
}

function RegisterPage({ navigation }) {
    return (
        <View style={{ flex: 3, backgroundColor: '#F2E5BD', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ flex: 0.25, backgroundColor: '#F2E5BD', alignItems: 'center', justifyContent: 'center' }}>
                <Button
                    title="Login"
                    onPress={() => navigation.navigate('Login')}
                />
                <Button
                    title="Home"
                    onPress={() => navigation.navigate('HomeLink')}
                />
            </View>
            <View  style={{ flex: 0.5, backgroundColor: '#F2E5BD', alignItems: 'center', justifyContent: 'center' }}>
                <Register/>
            </View>
        </View>
        
    );
}

function LoginPage({ navigation}) {
    return (
        <View style={{ flex: 3, backgroundColor: '#F2E5BD', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ flex: 0.25, backgroundColor: '#F2E5BD', alignItems: 'center', justifyContent: 'center' }}>
                <Button
                    title="Home"
                    onPress={() => navigation.navigate('HomeLink')}
                />
                <Button
                    title="Register"
                    onPress={() => navigation.navigate('Register')}
                />
            </View>
            <View  style={{ flex: 0.5, backgroundColor: '#F2E5BD', alignItems: 'center', justifyContent: 'center' }}>
                <Login/>
            </View>
        </View>
        
    );
}

// Définition du logo importé dans écran empilé
function LogoTitle() {
    return (
        <Image
            style={{ width: 100, height: 60 }}
            source={require('../assets/logo/logo_light-mode.png')}  
            containerStyle={styles.background}
        />
    );
}

// Animation de changement d'écran 
    const forFade = ({ current, next }) => {
        const opacity = Animated.add(
        current.progress,
        next ? next.progress : 0
        ).interpolate({
        inputRange: [0, 1, 2],
        outputRange: [0, 1, 0],
        });
    
        return {
        leftButtonStyle: { opacity },
        rightButtonStyle: { opacity },
        titleStyle: { opacity },
        backgroundStyle: { opacity },
        };
    };

// 2 - Ecran empilé
const Stack = createNativeStackNavigator();

function AppHome() {
    return (
        <Stack.Navigator>
            {/* Ecran Home All Button */}
            <Stack.Screen
                name="HomeLink"
                style={styles.background}
                component={HomePage}
                options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
            
            />
            {/* Ecran Login */}
            <Stack.Screen
                name="Login"
                style={styles.background}
                component={LoginPage}
                options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
            
            />
                            {/* ! Faire stack.Screen de For Free account */}
            

            {/* Ecran Register  */}
            <Stack.Screen
                name="Register"
                style={styles.background}
                component={RegisterPage}
                options={{
                    headerTitle: (props) => <LogoTitle {...props} />,
                    headerStyleInterpolator: forFade 
                }} 
            />
        </Stack.Navigator>  
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F2E5BD',
    }
});

// 3 - Export global de la vue final
export default function AppLog() {
    return (
        <NavigationContainer>
            <AppHome />
        </NavigationContainer>
    );
}

