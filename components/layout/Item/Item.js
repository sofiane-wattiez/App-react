import React from 'react';
import { View, Text,Image, StyleSheet } from 'react-native';


export default function Item ({ title })  {
    return(
        <View style={styles.item}>
            {/* <Image
                style={{ width: 80, height: 40, marginBottom:10, display:'flex', alignContent: 'center', justifyContent:'center' }}
                source={require('../../../assets/logo/logo_dark_mode@2x.png')}  
            /> */}
            <Image
                style={{ width: 100, height: 100, marginBottom:10, display:'flex', alignContent: 'center', justifyContent:'center' }}
                source={require('../../../assets/icons/icon-vins.png')}  
            />
            <Text style={styles.title}>{title}</Text>
        
        </View>
    )
};

const styles = StyleSheet.create({
        item: {
            backgroundColor: '#6c1b0530',
            padding: 40,
            marginVertical: 8,
            marginHorizontal: 16,
            width: 300,
            borderTopColor: 'grey',
            borderRadius:5,
            display: 'flex',
            alignItems: 'center',
        },
        title: {
            color: '#F8E8E8',
            fontSize: 32,
            textAlign:'center',
        },
    });
