// Import necessary React and React Native components
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, StyleSheet, Dimensions,Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    responsiveHeight as hp,
    responsiveWidth as wp,
    responsiveFontSize as fz
} from "react-native-responsive-dimensions";
import { SafeAreaView } from 'react-native-safe-area-context';

// Get the width of the screen
const { width } = Dimensions.get('window');
// const navigation = useNavigation();

// Define your home page component
const HomePage = ({navigation}) => {
  // const navigation = useNavigation();
  const personal = ()=>{
    navigation.navigate('personal')
  }
  const testhistory = ()=>{
    navigation.navigate('testhistory')
  }
  const newtest = ()=>{
    navigation.navigate('newtest')
  }
  const recenttest = ()=>{
    navigation.navigate('recenttest')
  }
  const logout =()=>{
    navigation.navigate('Login')
  }
  return (
    // <SafeAreaView>
    <View style={styles.container}>
       
         <View style={styles.header}>
                <Text style={styles.headertext}>COMBAT</Text>
                <Text style={styles.headertext}>..vvvv.</Text>
            </View>
      {/* Header with a photo */}
      {/* <Text>Home Page</Text> */}
      <Image
        source={require('../assest/Images/px.jpg')}
        style={styles.headerImage}
        resizeMode="cover"
      />
      <View style={styles.boxesContainer}> 
       <TouchableOpacity  style={styles.box}
        onPress={personal}
       >
       <Image 
          source={require('../assest/Images/profile1.jpeg')}
          style={styles.img}
          />
        <Text style={styles.boxtext}>Personal Details</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.box}
        onPress={testhistory}
       >
       <Image 
          source={require('../assest/Images/cr.jpeg')}
          style={styles.img}
          />
        <Text style={styles.boxtext}>Test History</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.box}
        onPress={newtest}
       >
       <Image 
          source={require('../assest/Images/plus.jpeg')}
          style={styles.img}
          />
        <Text style={styles.boxtext}>New Test</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.box}
        onPress={recenttest}
       >
       <Image 
          source={require('../assest/Images/plus1.jpeg')}
          style={styles.img}
          />
        <Text style={styles.boxtext}>Recent Test</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.box}
        onPress={logout}
       >
       <Image 
          source={require('../assest/Images/off.jpeg')}
          style={styles.img}
          />
        <Text style={styles.boxtext}>Logout</Text>
      </TouchableOpacity>
      </View>
    
    </View>
    // </SafeAreaView>
  );
};

// Stylesheet for your components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:hp(5)
    // backgroundColor:'red'
  },
  headerImage: {
    width: wp(100),
    height: hp(20), // You can adjust the height as needed
  },
  img:{
width:wp(10),
height:hp(5),
alignSelf:'center'

  },
  boxesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
    // backgroundColor:'blue'
  },
  box: {
    width: wp(40), // Each box takes up 48% of the width with a bit of margin
    height: hp(18),
    backgroundColor: '#ffffff',
    marginBottom: 16,
    justifyContent:'center',
    alignItems:'center',
  
    borderRadius:wp(6)
  },
  boxtext:{
padding:12,
fontSize:16,
color:'blue',
fontWeight:'bold',
marginTop:hp(2)
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
});

export default HomePage;
