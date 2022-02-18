import React, {useState, useEffect} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import Item from '../layout/Item/Item';

const Articles = () => {
    
    const [WineRed, setWineRed] = useState([]);

    useEffect(() => {
        getWineRed();
    }, []);
    
    const getWineRed = () => {
        fetch('https://127.0.0.1:8000/api/wine_reds?page=1')
        .then (function(response){
            return response.json();
        
        }).then(function(response) {
            setWineRed(response.WineRed);
        });
    };
    
    const renderItem = ({ item }) => (
        <Item title={item.wineName} />
    );
    
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={WineRed}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    },
    item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    },
    title: {
    fontSize: 32,
    },
});

export default Articles;