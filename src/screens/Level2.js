// QuestionnaireScreen.js
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as fz
} from "react-native-responsive-dimensions";

const questions = [
  'Que. Do you have recurrent headaches?                                                         प्रशन-  क्या आपको बार-बार सिरदर्द होता है?',
  'Que. Did your headaches start after the age of 50 years?                                 प्रशन- क्या आपका सिरदर्द 50 साल की उम्र के बाद शुरू हुआ? ',
  'Que. Does your headache become continuous or near continuous and progressed or worsened over a period of time sinceits onset?    प्रशन- क्या आपका सिरदर्द लगातार या लगभग निरंतर बना रहता है और शुरुआत के बाद से समय के साथ बढ़ता या बिगड़ता जाता है?',
  'Que. Do you have vomiting before start of headache?                                                  प्रशन- क्या आपको सिरदर्द शुरू होने से पहले उल्टी होती है?',
  'Que. Do you have headaches ONLY  during the night or your headache awaken you only during night or do you have headaches ONLY upon getting up in the morning?                                                            प्रशन- क्या आपको केवल रात के समय ही सिरदर्द होता है या आपका सिरदर्द आपको केवल रात के समय ही जगाता है या क्या आपको केवल सुबह उठने पर ही सिरदर्द होता है?',
  'Que. Does your headache get precipitated ONLY by cough/sneezing/straining/sexual activity/postural change? प्रशन- क्या आपका सिरदर्द केवल खांसी/छींकने/तनाव/यौन गतिविधि/मुद्रा में बदलाव के कारण होता है?',
  'Que. Have you noted any recent change in the CHARACTER(different from previous headache)?   प्रशन- क्या आपने चरित्र में कोई हालिया बदलाव देखा है (पिछले सिरदर्द से अलग)?',
  'Que. Do you ALWAYS have a side-locked headache with or without cranial autonomic symptoms such as redness,tearing,nasal stuffiness or watering from the nose on the same side of headache? प्रशन- क्या आपको हमेशा एक तरफ से बंद सिरदर्द होता है, जिसमें लालिमा, फटन, नाक बंद होना या सिरदर्द के एक ही तरफ नाक से पानी आना जैसे कपालीय स्वायत्त लक्षणों के साथ या उनके बिना भी दर्द होता है?',
  'Que. Does your headache become better ALWAYS upon assuming supine position or worsen when sitting or standing up? प्रशन-क्या आपका सिरदर्द हमेशा पीठ के बल लेटने पर बेहतर हो जाता है या बैठने या खड़े होने पर बदतर हो जाता है?',
  'Que. Does your vision become foggy or blurred for short duration of time with or without headaches? प्रशन- क्या सिरदर्द के साथ या बिना सिरदर्द के थोड़े समय के लिए आपकी दृष्टि धूमिल या धुंधली हो जाती है?',
  'Que. Do you have pulsatile ringing sensations in the ears with or without headaches?      प्रशन- क्या आपको सिरदर्द के साथ या उसके बिना भी कानों में धड़कन जैसी सनसनाहट महसूस होती है?',
  'Que. Have you gained significant weight in the last 6 months - 1 year along with worsening of headaches(more then 5% in 6-12 months)? प्रशन- क्या पिछले 6 महीनों - 1 वर्ष में आपका वज़न काफी बढ़ गया है और साथ ही सिरदर्द भी बढ़ गया है (6-12 महीनों में 5% से अधिक)?',
  'Que. Did you have fever or any other medical illnesses with the onset of headache?    प्रशन- क्या आपको सिरदर्द की शुरुआत के साथ बुखार या कोई अन्य चिकित्सीय बीमारी थी?',
  'Que. Have you ever been diagnosed with cancer or any disease that lowers body immunity?  प्रशन- क्या आपको कभी कैंसर या किसी ऐसी बीमारी का पता चला है जो शरीर की प्रतिरोधक क्षमता को कम कर देती है?',
  'Que. Do you ONLY have headaches at the back of the neck triggered by neck movement?        प्रशन- क्या आपको केवल गर्दन हिलाने से ही गर्दन के पिछले हिस्से में सिरदर्द होता है?',
  'Que. Have your headache frequency significantly increased to more than 15 days(suggesting recent transformtion)?  प्रशन- क्या आपके सिरदर्द की आवृत्ति 15 दिनों से अधिक तक बढ़ गई है (हालिया परिवर्तन का संकेत)?',
  'Que. Have you undertaken relevant investgation for the current headache?               प्रशन-  क्या आपने वर्तमान सिरदर्द के लिए प्रासंगिक जांच की है?',
  'Que. if investigation are abnormal, are they correlating with the headache phenotype?       प्रशन- यदि जांच असामान्य है, तो क्या वे सिरदर्द फेनोटाइप से संबंधित हैं?  ',
  'Que. Do you have any following abnormal clinical findings? 1. Abnormal Fundus  2. Cranial nerve deficits 2. Cranial nerve deficits 3. Motor deficits 4. Sensory deficits  5.Ataxia  6. Neck rigidity  7. Babinski reflex 8. High blood presure correlating with headache onset, or exacerbation(BP) 9. Scalp tenderness with temporal artery abnormality on palpation 10. Headache/Neck pain elicited by neck movements and deep palpation of vertebral joints of cervical spine  प्रशन- क्या आपके पास निम्नलिखित कोई असामान्य नैदानिक ​​निष्कर्ष हैं? 1. असामान्य फंडस 2. कपाल तंत्रिका की कमी  3. मोटर की कमी  4. संवेदी कमी 5.गतिभंग 6. गर्दन में अकड़न 7. बबिंस्की रिफ्लेक्स   8. सिरदर्द की शुरुआत या तीव्रता (बीपी) के साथ सहसंबंधित उच्च रक्तचाप   9. टटोलने पर टेम्पोरल धमनी की असामान्यता के साथ खोपड़ी की कोमलता 10. गर्दन के हिलने-डुलने और ग्रीवा रीढ़ के कशेरुक जोड़ों के गहरे स्पर्श से होने वाला सिरदर्द/गर्दन दर्द'
  
  
 
 
  
  
  


  
  
  
  
  
 
 
 
  
  
  
];

const Level2 = () => {
  const navigation = useNavigation();
  const [id, setId] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const total=questions.length
 const totalQuestion = total
  const handleAnswer = (answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = answer;
    setAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    if (answers[currentQuestion] === null) {
      Alert.alert('Please select an answer before moving to the next question.');
    } else {
      if(currentQuestion<totalQuestion-1){
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      }
      else{
        Alert.alert('Level 2 Questions Complete')
        navigation.navigate('level3')
      }
      
    }
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
            value={id}
            onChangeText={(text) => setId(text)}
            placeholder="Patient ID"
          />
        </View>
        <TouchableOpacity style={styles.summaryButton} onPress={testSummary}>
          <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>TEST SUMMARY</Text>
        </TouchableOpacity>
        <View style={styles.line}></View>
        <View style={{ backgroundColor: '#2843de', height: hp(4), width: wp(35), alignSelf: 'center', padding: 8, alignItems: 'center', marginTop: 10, marginBottom: 10, borderRadius: 5 }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#ffffff' }}>Level- 2.0</Text>
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
    padding: 0,
    fontSize: 16,
    width: wp(50),
    height: hp(3),
    alignSelf: 'center'
  },
});

export default Level2;
