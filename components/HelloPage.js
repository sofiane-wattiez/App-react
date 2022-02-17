import * as React from 'react';
import { View, Text, Button, Image, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeLink from '../components/MainContent/HomeLink';
import Register from '../components/MainContent/Log/Register';
import Login from '../components/MainContent/Log/Login';
import NavBar from '../components/NavigationBar/NavBar';
import { StyledEngineProvider } from '@mui/material/styles';
import MenuSlide from '../components/Header/MenuSlide';
import Ripple from 'react-native-material-ripple';


// Cette page est notre page d'atterrissage (index in app.js)

// 1 - Composition - 
function HomePage ({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#F2E5BD', alignItems: 'center', justifyContent: 'center' }}>
            <View >
                <TouchableOpacity style={styles.TouchButton}>  
                    <Button 
                        color="#AD160F"   
                        style={styles.button}
                        title="Inscription"
                        onPress={() => navigation.navigate('Register')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.TouchButton}>  
                    <Button 
                        color="#AD160F"
                        style={styles.button}
                        title="Se connecter"
                        onPress={() => navigation.navigate('Login')}
                    />
                </TouchableOpacity>   
                <TouchableOpacity style={styles.TouchButton}>  
                    <Button 
                        color="#AD160F"
                        style={styles.button}
                        title="Essai gratuit"
                        onPress={() => navigation.navigate('Free')}
                    />
                </TouchableOpacity>
                    
            </View>           
            {/* </View> */}
        </View>
        
    );
}

function RegisterPage({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#F2E5BD', alignItems: 'center', justifyContent: 'center' }}>
            <View  style={styles.bodyButton}>
            <TouchableOpacity style={styles.TouchButton}>  
                    <Button color="#AD160F"
                        style={styles.button}
                        title="Se connecter"
                        onPress={() => navigation.navigate('Login')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.TouchButton}>  
                    <Button 
                        color="#AD160F"
                        style={styles.button}
                        title="Essai gratuit"
                        onPress={() => navigation.navigate('Free')}
                    />
                </TouchableOpacity>
                <Register/>
            </View>
        </View>
        
    );
}

function LoginPage({ navigation}) {
    return (
        <View style={{ flex: 1, backgroundColor: '#F2E5BD', alignItems: 'center', justifyContent: 'center' }}>
            <View  style={styles.bodyButton} >
                <TouchableOpacity style={styles.TouchButton}>  
                    <Button
                        style={styles.button}
                        color="#AD160F"
                        title="Inscription"
                        onPress={() => navigation.navigate('Register')}
                    />
                </TouchableOpacity>    
                <TouchableOpacity style={styles.TouchButton}>  
                    <Button 
                        style={styles.button}   
                        color="#AD160F"
                        title="Essai gratuit"                   
                        onPress={() => navigation.navigate('Free')}
                    />
                </TouchableOpacity>    
                <Login/>
            </View>
        </View>
        
    );
}
function FreePage({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' , alignSelf: 'stretch' }}>
            <View style={ styles.bodyButton2}>
                
                <TouchableOpacity style={styles.TouchButton}>  
                        <Button 
                            color="#AD160F"   
                            style={styles.button}
                            title="Inscription"
                            onPress={() => navigation.navigate('Register')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TouchButton}>  
                        <Button 
                            color="#AD160F"
                            style={styles.button}
                            title="Se connecter"
                            onPress={() => navigation.navigate('Login')}
                        />
                    </TouchableOpacity>
            </View>
            <View style={ styles.bodyButton2}>
                
                <StyledEngineProvider injectFirst>
                        
                        <MenuSlide />
                
                </StyledEngineProvider>
            
            </View>

            <View style={{ flex: 1, backgroundColor: '#F2E5BD', alignSelf: 'stretch', justifyContent: 'center'}}>
                <NavBar style={{ flex: 1, backgroundColor: '#F2E5BD', alignItems: 'center', alignSelf: 'stretch', justifyContent: 'center'}}/>
            </View>    
        </View>
        
    );
}

// Définition du logo importé dans écran empilé
function LogoTitle() {
    return (
            <Image
                style={{ width: 80, height: 40, marginBottom:10, }}
                source={require('../assets/logo/logo_light-mode.png')}  
                containerStyle={styles.backgroundLogo}
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
                name="Home"
                component={HomePage}
                options={{ 
                headerTitle: (props) => <LogoTitle {...props}/>, 
                // headerStyle: 'backgroundColor: black'
                
                headerStyleInterpolator: forFade 
            }}
            
            />
            {/* Ecran Login */}
            <Stack.Screen
                name="Login"
                component={LoginPage}
                options={{ 
                    headerTitle: (props) => <LogoTitle {...props} /> ,
                    headerStyleInterpolator: forFade 
                }}
            
            />            
            {/* Ecran Register  */}
            <Stack.Screen
                name="Register"
                component={RegisterPage}
                options={{
                    headerTitle: (props) => <LogoTitle {...props} />,
                    headerStyleInterpolator: forFade 
                }} 
            />
            <Stack.Screen
                name="Free"
                component={FreePage}
                options={{ 
                    headerTitle: (props) => <LogoTitle {...props} /> , 
                    headerStyleInterpolator: forFade 
                }}
            
            />
        </Stack.Navigator>  
    );
}

const styles = StyleSheet.create({
    backgroundLogo: {
        
    },
    bodyButton: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        padding: 10,
        alignSelf: 'stretch', 
    },   

    bodyButton2: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        alignSelf: 'stretch', 
        padding: 10,
    },
    TouchButton :{
        width:150,
        borderRadius: 2,
        paddingBottom: 10,


    },
    button: {
        width: 500,
        height: 40,
        // borderRadius: 5,
        // justifyContent: 'center',
        // alignItems: 'center',
        // borderColor: '#AD160F',
        // type: 'outline',
        // borderWidth:10,
        // borderColor:'#AD160F',
        // borderRadius: 2,
    },

});

// 3 - Export global de la vue final
export default function AppLog() {
    return (
        <NavigationContainer>
            <AppHome />
        </NavigationContainer>
    );
}

