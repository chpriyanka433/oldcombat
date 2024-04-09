//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    responsiveHeight as hp,
    responsiveWidth as wp,
    responsiveFontSize as fz
} from "react-native-responsive-dimensions";
import { useNavigation } from '@react-navigation/native';

// create a component
const AboutUs = () => {
    const navigation = useNavigation();
    const btnfun =()=>{
        navigation.navigate('Login')
    }
    return (
        <SafeAreaView style={styles.container}>
             <View style={styles.header}>
                <Text style={styles.headertext}>COMBAT</Text>
            </View>
            <View >
                <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center'}}>About</Text>
                <View style={styles.para1}>
                    <Text style={{fontSize:16}}>COMBAT(Computer Based Assessment Tool) is the Android
                        App-based Decision Support System that can be used for
                        the diagnosis of primary headache disorders with an
                        online questionaire and automated analysis algorithm.
                    </Text>
                   

                </View>
               
                <View style={{padding:10}}>
                    <Text style={{fontSize:22,fontWeight:'bold'}}>
                        Method
                    </Text>
                    <Text style={{fontSize:14}}>1. Creating a branching-logic, web-based questionnaire to obtain
                        standardized headache history. The questionnaire makes use of branching logic
                        to minimize test duration and the presentation of irrelevant questions.            
                               
                    </Text>
                    <Text style={{fontSize:14}}>2. Responses will be analyzed with an automated algorithm to classify
                        headache based on international Classification of Headache Disorders, 3rd edition  (ICHD-3)
                        criteria Testing will be done in multiple levels and output of headache level classify headache
                        type/sub-type.
                    </Text>
                    <Text style={{fontSize:14}}>
                        3. For testing , The generated result can be compared to prior diagnostic headache classification by a neurologist 
                        following a direct interview.
                    </Text>
                </View>
                <View><Text></Text></View>
                <View style={{justifyContent:'center',alignItems:'center'}}> 
                    <Text style={styles.lttext}>Jointly Developed By:</Text>
                    <Text style={styles.lttext}> Indian Institute of Technology  Delhi and</Text>
                    <Text style={styles.lttext}> GB Pant Institute of Postgradute Medical Education</Text>
                    <Text style={styles.lttext}>and Research, Delhi</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.button} 
                    onPress={btnfun}
                    >

                        <Text style={styles.buttonText}>Back</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#cfeafa',
    },
    button: {
        backgroundColor: '#d66858',
        padding: 10,
        margin: 5,
        borderRadius: wp(5),
        marginTop:hp(12)
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
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
    para1: {
        fontSize: 20,
        padding: 20
    },
    lttext:{
        fontSize:14,
        fontWeight:'bold',
        fontFamily:'italic'
    }
});

//make this component available to the app
export default AboutUs;
