// QuestionnaireScreen.js
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as fz
} from "react-native-responsive-dimensions";
import AsyncStorage from '@react-native-async-storage/async-storage';

const questions = [
  'Que. Are you seeking consultation for headache problem?                                          प्रशन-  क्या आप सिरदर्द की समस्या के लिए परामर्श ले रहे हैं?',
  'Que. Did you have headache for more than 15 days last month?                                 प्रशन- क्या आपको पिछले महीने 15 दिनों से अधिक समय तक सिरदर्द रहा? ',
  'Que. Are such headaches happening for more than 3 months?                                            प्रशन- क्या ऐसा सिरदर्द 3 महीने से ज्यादा समय से हो रहा है?',
  'Que. Do you prefer functional components over class components?                           प्रशन- क्या आपको सिरदर्द 50 साल की उम्र के बाद शुरू हुआ?',
];

const NewTest = () => {
  const navigation = useNavigation();
  const [id, setId] = useState('');
  const [pid,setpid] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const total=questions.length
 
  
  AsyncStorage.getItem('PId').then((valid) => {
    // console.warn("PID value is",valid)
    setpid(valid)
  });
  // console.warn(total)
 const totalQuestion = total
  const handleAnswer = (answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = answer;
    setAnswers(updatedAnswers);
   
  };
  

  const handleNextQuestion = () => {
    if (answers[currentQuestion]) {
// console.warn('anwerrrr',currentQuestion)
      if (currentQuestion<totalQuestion -1){
        // setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        setCurrentQuestion((currentQuestion)=> currentQuestion+1);
      }
      else{
        
Alert.alert('Level 1 Questions Complete')
navigation.navigate('level2')
      }
     
      
    } 
    else{
      Alert.alert('Please select an answer before moving to the next question.');
    }
    // else {
    //   setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    // }
  };
  const goBack = () => {
    navigation.navigate('Home');
  }
  const goHome = () => {
    navigation.navigate('Home')
  }
  const testSummary = () => {
    navigation.navigate('testsummary')
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.headertext}>COMBAT</Text>
        </View>
        <Text style={{ fontSize: 20, color: 'blue', fontWeight: 'bold', alignSelf: 'center', padding: 20 }}>Questionnaire</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Patient ID:    </Text>
          <TextInput
            style={styles.input}
            value={pid}
            // onChangeText={(text) => setId(text)}
            placeholder="Patient ID"
          />
        </View>
        <TouchableOpacity style={styles.summaryButton} onPress={testSummary}>
          <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>TEST SUMMARY</Text>
        </TouchableOpacity>
        <View style={styles.line}></View>
        <View style={{ backgroundColor: '#2843de', height: hp(4), width: wp(35), alignSelf: 'center', padding: 8, alignItems: 'center', marginTop: 10, marginBottom: 10, borderRadius: 5 }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#ffffff' }}>Level- 1.0</Text>
        </View>
        <View style={{ backgroundColor: '#2843de', height: hp(18), width: wp(92), marginLeft: 14, borderRadius: hp(1) }}>
          <Text style={styles.question}>{questions[currentQuestion]}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.answerButton, answers[currentQuestion] === 'Yes' && styles.selected]}
            onPress={() => handleAnswer('Yes')}
          >
            <Text>Yes</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.answerButton, answers[currentQuestion] === 'No' && styles.selected]}
            onPress={() => handleAnswer('No')}
          >
            <Text>No</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.hbnButton}>
          <TouchableOpacity style={styles.nextButton} onPress={goHome}>
            <Text style={{ color: '#ffffff', fontSize: 18, fontWeight: 'bold' }}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton} onPress={goBack}>
            <Text style={{ color: '#ffffff', fontSize: 18, fontWeight: 'bold' }}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton} onPress={handleNextQuestion}>
            <Text style={{ color: '#ffffff', fontSize: 18, fontWeight: 'bold' }}>Next</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // padding: 16,
  },
  question: {
    fontSize: 18,
    marginBottom: 20,
    // backgroundColor:'#2843de',
    padding: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 16,
    marginTop: 16
  },
  answerButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  selected: {
    backgroundColor: '#ed968a',
  },
  summaryButton: {
    backgroundColor: '#d66858',
    width: wp(40),
    height: hp(5),
    alignItems: 'center',
    padding: 12,
    borderRadius: hp(3),
    alignSelf: 'flex-end'
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
    padding: 16,
    borderRadius: hp(4),
    alignItems: 'center',
    width: wp(28),
    height: hp(6),

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
});

export default NewTest;
