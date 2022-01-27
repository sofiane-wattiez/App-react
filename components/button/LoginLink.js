import React from 'react';
import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import Ripple from 'react-native-material-ripple';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View,  StyleSheet, Animated } from 'react-native';
import Login from '../../components/MainContent/Log/Login';

function LoginLink ({ navigation }) {
    return (
        <View style={styles.body}> 
            <Ripple
                style={styles.button}
                rippleColor='#8c100c'
                rippleOpacity={0.9}
                rippleDuration={400}
                rippleSize={90}
                rippleCentered={false}
                rippleSequential={true}
            >
                <Button
                    onPress={() => navigation.navigate('Login')}    
                    title="Se connecter"
                    containerStyle={{
                        width: 200,
                        height: 100,
                        textAlign: 'center',
                        alignContent:'center',
                        justifyContent:'center',
                    }}
                    ViewComponent={LinearGradient}
                    linearGradientProps={{
                        colors: [ '#AD160F', '#8c100c'],
                        start: { x: 0, y: 0.5 },
                        end: { x: 0.5, y: 0.5 },
                    }}
                />
            </Ripple>
        </View>
    );
};
const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: 200,
        height: 40,
        backgroundColor: '#AD160F',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
});



export default LoginLink;