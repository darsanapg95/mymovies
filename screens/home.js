import * as React from 'react';
import { View, TouchableOpacity, StyleSheet,Text,ImageBackground, StatusBar} from 'react-native';

export default function home(props) {
  return(
    <View>
      <ImageBackground source={require('../assets/movie.png')}/>
    </View>
  )
}