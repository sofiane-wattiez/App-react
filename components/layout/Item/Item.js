import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function Item ({ title })  {
    return(
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
        item: {
            backgroundColor: '#AD160F',
            padding: 20,
            marginVertical: 8,
            marginHorizontal: 16,
            width: 300,
        },
        title: {
            color: '#F8E8E8',
            fontSize: 32,
        },
    });
