import React from 'react';
import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import Ripple from 'react-native-material-ripple';
import { View, Alert, StyleSheet } from 'react-native';

const SubmitButton = () => {
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
                    title="Connecte toi" 
                    onPress={() => Alert.alert('Bientot disponible')} 
                    containerStyle={{
                        width: 200,
                        height: 100,
                        textAlign: 'center',
                        alignContent:'center',
                        justifyContent:'center',
                    }}
                    
                    ViewComponent={LinearGradient}
                    linearGradientProps={{
                        colors: [ '#AD160F', '#511201' ],
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

export default SubmitButton;