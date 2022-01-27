import React from 'react';
import { Button } from 'react-native-elements';
import Ripple from 'react-native-material-ripple';
import { View, StyleSheet } from 'react-native';

const ForFreeLink = () => {
    return (
    <View style={styles.body}> 
        <Ripple
            style={styles.button}
            rippleColor='#e0d4af'
            rippleOpacity={0.9}
            rippleDuration={400}
            rippleSize={90}
            rippleCentered={false}
            rippleSequential={true}
        >
            <Button
                onPress={() => console.log('hello')}
                title="Essai gratuit"
                buttonStyle={{
                borderColor: '#AD160F',
                }}
                type="outline"
                titleStyle={{ color: '#AD160F' }}
                containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
                }}
            />
        </Ripple>
    </View>
    );
}
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
        // backgroundColor: '#AD160F',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default ForFreeLink;