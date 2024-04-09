//import liraries
import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Alert,TextInput, TouchableOpacity } from 'react-native';
import {
    responsiveHeight as hp,
    responsiveWidth as wp,
    responsiveFontSize as fz
} from "react-native-responsive-dimensions";
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

// create a component
const Login = () => {
    const navigation = useNavigation();
    const [number, onChangeNumber] = React.useState('');
    const handleButton1Press = () => {
        console.log('Button 1 Pressed' ,number);
        if(number){
            AsyncStorage.setItem('PId', number);''
            navigation.navigate('Home')
        }
        else{
            alert("PID cannot be blank")
        }
    };
   

    const handleButton2Press = () => {
        console.log('Button 2 Pressed');
        navigation.navigate('About')
        // Add your logic for Button 2 press here
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headertext}>COMBAT</Text>
            </View>
            <View>
                <Image style={styles.imgstyle} source={require('../assest/Images/px.jpg')} />
                <Text style={styles.text2}>Welcome to Computer Based Assessment Tool(COMBAT) for the  diagnosis of Primary Headache disorders</Text>
            </View>
            <View style={styles.viewall}>
                <Text>Enter Patient ID</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Please Enter Patient ID"
                    keyboardType="numeric"
                />

            </View>
            <View style={styles.btnView}>
                <TouchableOpacity style={styles.button} onPress={handleButton1Press}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleButton2Press}>
                    <Text style={styles.buttonText}>ABOUT APP</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
    viewall: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: wp(4)

    },
    input: {
        height: hp(4),
        width: wp(60),
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: wp(2)
    },
    btnView: {
        marginTop: hp(28)
    },
        button: {
            backgroundColor: '#d66858',
            padding: 10,
            margin: 5,
            borderRadius: wp(5),
        },
        buttonText: {
            color: 'white',
            fontSize: 16,
            textAlign: 'center'
        },
    imgstyle: {
        height: hp(20),
        width: wp(100)
    },
    header: {
        height: hp(6),
        width: wp(100),
        backgroundColor: '#d66858'
    },
    headertext: {
        fontSize: fz(2.5),
        marginLeft: 20,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 10
    },
    text2: {
        fontSize: fz(2.4),
        padding: 14,
        color: 'blue',
        fontWeight:'bold',
        // justifyContent:'center',
        // textAlign:'center',
    }
});

//make this component available to the app
export default Login;
