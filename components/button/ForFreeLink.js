import React from 'react';
import { Button } from 'react-native-elements';
import { View} from 'react-native';

const ForFreeLink = () => {
    return (
    <View style={{ flex: 1, backgroundColor: '#F2E5BD', justifyContent: 'center', alignItems: 'center' }}> 
        <Button
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
    </View>
    );
}



export default ForFreeLink;