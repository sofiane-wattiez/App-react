import { View, StyleSheet } from 'react-native';

const Separator = () => (
    <View style={styles.separator} />
); 

const styles = StyleSheet.create({
    separator: {
        marginVertical: 10,
        borderBottomColor: '#AD160F',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
});

export default Separator;