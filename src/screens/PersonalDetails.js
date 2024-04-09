// PersonalDetailsScreen.js
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import {
    responsiveHeight as hp,
    responsiveWidth as wp,
    responsiveFontSize as fz
} from "react-native-responsive-dimensions";

const PersonalDetails = () => {
  const navigate =useNavigation();
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');

  const saveDetails = () => {
    // You can implement logic to save the details here
    console.log('Name:', name);
    console.log('DOB:', dob);
    console.log('Gender:', gender);
    console.log('Mobile Number:', mobileNumber);
    console.log('Email:', email);
    navigate.navigate('Home')
  };

  return (
    <View style={styles.container}>
        <View style={styles.header}>
                <Text style={styles.headertext}>COMBAT</Text>
            </View>
      <Text style={styles.header1}>Patient Details</Text>
<View style={{padding:10}}> 
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Enter your name"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Date of Birth:</Text>
        <TextInput
          style={styles.input}
          value={dob}
          onChangeText={(text) => setDob(text)}
          placeholder="Enter your date of birth"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Gender:</Text>
        <TextInput
          style={styles.input}
          value={gender}
          onChangeText={(text) => setGender(text)}
          placeholder="Enter your gender"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Mobile Number:</Text>
        <TextInput
          style={styles.input}
          value={mobileNumber}
          onChangeText={(text) => setMobileNumber(text)}
          placeholder="Enter your mobile number"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Enter your email"
          keyboardType="email-address"
        />
      </View>
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={saveDetails}>
        <Text style={styles.saveButtonText}>Save Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:40
    // padding: 16,
    // justifyContent: 'center',
  },
  header1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 8,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#d66858',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PersonalDetails;
