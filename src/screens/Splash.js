//import liraries
import { useNavigation } from '@react-navigation/native';
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

// create a component
const Splash = ({navigation}) => {
// const navigation =useNavigation();
    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace('Login')
        },5000);
       
    },[])
   
    return (
        <View style={styles.container}>
            <Text>Splash Screen</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Splash;
