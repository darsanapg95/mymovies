import { View, Image, TouchableOpacity,Text } from "react-native";
import {useNavigation} from '@react-navigation/native';


export default function MovieCards({ movie }) {
  const nav = useNavigation();
  function onPress() {
    console.log('hlo');
    nav.navigate('Details');
  }
  
  return (
    <View >
      <TouchableOpacity onPress={onPress}>
      <Image
          style={{
            width: '100%',
            height: 250,
            margin: 10,
            borderRadius: 10,
          }}
          resizeMode ="cover"
          source={{ uri: movie.Poster }}
        />
         <Text style={{fontSize:20,fontWeight: 'bold',paddingLeft:10}}>{movie.Title}</Text>
        <Text style={{paddingLeft:10}}>{movie.Year}</Text>
        <Text style={{paddingLeft:10}}>{movie.Type}</Text>

      </TouchableOpacity>
       
       

    </View>
  );
}