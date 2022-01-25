import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const Logo = () => {
    return ( 
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <Image
                style={styles.Logo}
                source={require('../../assets/logo/logo_light-mode.png')}
            />
        </View>
    );
}   
const styles = StyleSheet.create({
    
    Logo: {
        width: 150,
        height: 80,
        margin: 40,
        alignContent: 'center',
        justifyContent: 'center'
    }
});

export default Logo;