import React from 'react';
import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { View} from 'react-native';

const LogoutLink = () => {
    return (
    <View style={{ flex: 1, backgroundColor: '#F2E5BD', justifyContent: 'center', alignItems: 'center' }}> 
        <Button
        // à finir !
            title={'Se déconnecter'}
            containerStyle={{
                width: 200,
                marginHorizontal: 60,
                marginVertical: 20,
            }}
            ViewComponent={LinearGradient}
            linearGradientProps={{
                colors: [ '#AD160F', '#8c100c'],
                start: { x: 0, y: 0.5 },
                end: { x: 0.5, y: 0.5 },
            }}
        />
    </View>
    );
}

export default LogoutLink;