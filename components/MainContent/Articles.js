import React, {useState, useEffect} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import Item from '../layout/Item/Item';

const Articles = () => {
    
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        getDrinks();
    }, []);

    const getDrinks = () => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        .then (function(response){
            return response.json();

        }).then(function(response) {
            setDrinks(response.drinks);
        });
    };

    const renderItem = ({ item }) => (
        <Item title={item.strDrink} />
    );
    
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={drinks}
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