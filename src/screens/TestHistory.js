
//import liraries
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import {
    responsiveHeight as hp,
    responsiveWidth as wp,
    responsiveFontSize as fz
} from "react-native-responsive-dimensions";
import AsyncStorage from '@react-native-async-storage/async-storage';

// create a component
const TestHistory = () => {
    const navigation = useNavigation();
    const [id, setId] = useState('');
    const [pid,setpid] = useState('');

    AsyncStorage.getItem('PId').then((valid) => {
      // console.warn("PID value is",valid)
      setpid(valid)
    });

    const goBack =()=>{
        navigation.navigate('Home');
      }
      const goHome  =()=>{
        navigation.navigate('Home')
      }
    return (
        <View style={styles.container}>
            <SafeAreaView>
        <View style={styles.header}>
                <Text style={styles.headertext}>COMBAT</Text>
            </View>
            <Text style={{fontSize:20,color:'blue',fontWeight:'bold',alignSelf:'center',padding:20}}>Test History</Text>
            <View style={styles.inputContainer}>
        <Text style={styles.label}>Patient ID:    </Text>
        <TextInput
          style={styles.input}
          value={pid}
          // onChangeText={(text) => setId(text)}
          placeholder="Patient ID"
        />
      </View>
      <View style={styles.hbnButton}> 
      <TouchableOpacity style={styles.nextButton} onPress={goHome}>
        <Text style={{color:'#ffffff',fontSize:18,fontWeight:'bold'}}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.nextButton} onPress={goBack}>
        <Text style={{color:'#ffffff',fontSize:18,fontWeight:'bold'}}>Back</Text>
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
    inputContainer: {
       
        // flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
         marginBottom: 16,
      },
      label: {
        fontSize: 16,
        alignSelf:'center'
        // marginBottom: 8,
      },
      input: {
        borderWidth: 1,
        borderColor: '#d66858',
        borderRadius: 8,
        padding: 8,
        fontSize: 16,
        width:wp(50),
        height:hp(3),
        alignSelf:'center'
      },
      hbnButton:{

        flexDirection:'row',
        padding:10,
        justifyContent:'space-around',
        marginTop:hp(50)
       
          },
          nextButton: {
            backgroundColor: '#d66858',
            padding: 16,
            borderRadius: hp(4),
            alignItems: 'center',
            width:wp(44),
            height:hp(6),
            
          },
});

//make this component available to the app
export default TestHistory;
