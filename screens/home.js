import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { horizontalScale,verticalScale } from '../utils/scale';

const home = () => {
  const nav = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../assets/img.jpeg')}>
          <View style={styles.container}>
          <Text style={styles.title}>
            MY MOVIES
          </Text>
          </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.button}  onPress={() => nav.navigate('mymovies')}>
            <Text style={styles.text}>START</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 45,
    padding: 15,
    color: 'white',
    fontWeight: 'bold',    
    textAlign: 'center', 
    marginBottom:30   
  },
  contentCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    padding: 10,
  },
  button: {
    width: horizontalScale(180),
    height: verticalScale(55),
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:10,
    marginLeft:130
  },
  text: {
    color: 'black',
    fontSize: verticalScale(36),
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
});