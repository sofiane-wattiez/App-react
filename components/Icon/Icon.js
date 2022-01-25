import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

export default () => {
    return (
        <>
            <View
                style={{
                alignItems: 'center',
                paddingVertical: 5,
                flexGrow: 1,
                }}
        >
                <Icon
                    raised
                    name='smileo'
                    type='antdesign'
                    color='#F2E5BD'
                    onPress={() => console.log('hello')} />
            </View>
        </>
    );
};