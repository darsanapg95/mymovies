import * as React from 'react';
import { View, TouchableOpacity, StyleSheet,Text,ImageBackground, StatusBar} from 'react-native';
// import {horizontalScale,verticalScale} from './utils/scale'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function home(props) {
  const nav = useNavigation();
  return (
    <View>
      {/* <View style={styles.container}>
    <ImageBackground source={require('../assets/note.png')} resizeMode="cover" style={styles.image}>
    </ImageBackground>
  </View> */}
      <SafeAreaView>
        <StatusBar backgroundColor={'black'}></StatusBar>
      </SafeAreaView>
      <View>   
        <TouchableOpacity style={styles.button}  onPress={() => nav.navigate('main')}>
   <Text style={styles.text}>start</Text>
    </TouchableOpacity>
    </View>
</View>
  );
}
const styles = StyleSheet.create({
  button: {
    // width: horizontalScale(180),
    // height: verticalScale(55),
    borderRadius: 10,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:250,
    marginLeft:130
  },
  text: {
    color: 'black',
    // fontSize: verticalScale(36),
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  // text: {
  //   color: "white",
  //   fontSize: 42,
  //   lineHeight: 84,
  //   fontWeight: "bold",
  //   textAlign: "center",
  //   backgroundColor: "#000000c0"
  // }
});