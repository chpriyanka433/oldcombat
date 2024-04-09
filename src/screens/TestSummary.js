//import liraries
import React, { Component, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import {
    responsiveHeight as hp,
    responsiveWidth as wp,
    responsiveFontSize as fz
} from "react-native-responsive-dimensions";


// create a component
const TestSummary = () => {
    const [id, setId] = useState('');
    const navigation = useNavigation();
    const tableHead = ['Level', 'Level Status', 'Result'];
    const tableData = [
      ['1', 'Completed', 'Pass'],
      ['2', 'InProgress', 'Pending'],
      ['3', 'NotStarted', 'Fail'],
      // Add more rows as needed
    ];

    const goBack = () => {
        navigation.navigate('Home');
    }
    const goHome = () => {
        navigation.navigate('Home')
    }
    const printReport = () => {
        navigation.navigate('Home')
    }
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.header}>
                    <Text style={styles.headertext}>COMBAT</Text>
                </View>
                <Text style={{ fontSize: 20, color: 'blue', fontWeight: 'bold', alignSelf: 'center', padding: 20 }}>Test Result/Summary</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Patient ID:         </Text>
                    <TextInput
                        style={styles.input}
                        value={id}
                        onChangeText={(text) => setId(text)}
                        placeholder="Patient ID"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Test Start Date: </Text>
                    <TextInput
                        style={styles.input}
                        value={id}
                        onChangeText={(text) => setId(text)}
                        placeholder="28-02-2024"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Test Status:       </Text>
                    <TextInput
                        style={styles.input}
                        value={id}
                        onChangeText={(text) => setId(text)}
                        placeholder="Incomplete"
                    />
                </View>
                <View style={styles.line}></View>

                <View style={{height:hp(26),width:wp(80),marginTop:hp(2),marginBottom:hp(8),
                    backgroundColor:'#9dabeb',alignSelf:'center'}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',padding:15,backgroundColor:'#1e3cc7'}}>
                            <Text style={{color:'#ffffff',fontWeight:'bold'}}>Level</Text>
                            <Text style={{color:'#ffffff',fontWeight:'bold'}} >Level Status</Text>
                            <Text style={{color:'#ffffff',fontWeight:'bold'}}>Result</Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
                        <Text>L-1.0</Text>
                        <Text>Incomplete</Text>
                        <Text>-</Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
                        <Text>L-2.0</Text>
                        <Text>-</Text>
                        <Text>-</Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
                        <Text>L-3.1</Text>
                        <Text>-</Text>
                        <Text>-</Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
                        <Text>L-3.2</Text>
                        <Text>-</Text>
                        <Text>-</Text>
                        </View>

                </View>

<View>

</View>

                <View style={styles.hbnButton}>
                    <TouchableOpacity style={styles.nextButton} onPress={goHome}>
                        <Text style={{ color: '#ffffff', fontSize: 18, fontWeight: 'bold' }}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.printButton} >
                        <Text style={{ color: '#ffffff', fontSize: 18, fontWeight: 'bold' }}>Print Report</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.nextButton} onPress={goBack}>
                        <Text style={{ color: '#ffffff', fontSize: 18, fontWeight: 'bold' }}>Back</Text>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
        </View>
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
    inputContainer: {

        // flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        alignSelf: 'center'
        // marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#d66858',
        borderRadius: 8,
        padding: 8,
        fontSize: 16,
        width: wp(50),
        height: hp(3),
        alignSelf: 'center'
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
    line: {
        height: 1,
        width: '100%',
        backgroundColor: 'gray',
        marginTop: 10,
        marginBottom: 10
    },
    hbnButton: {

        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between'
    },
    nextButton: {
        backgroundColor: '#d66858',
        padding: 12,
        borderRadius: hp(4),
        alignItems: 'center',
        width: wp(28),
        height: hp(6),

    },
    printButton: {
        backgroundColor: '#d66858',
        padding: 12,
        borderRadius: hp(4),
        alignItems: 'center',
        width: wp(38),
        height: hp(6),
    },
    text: { margin: 6 },
});

//make this component available to the app
export default TestSummary;
