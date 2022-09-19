import { View, ScrollView,Text,Image} from "react-native";
import { StatusBar } from "react-native";

export default function Details(movie) {
  return (
    <>
        <View>
            <Text>hi</Text>
          <StatusBar barStyle="dark-content" />
      <Image
          style={{
            width: '100%',
            height: 250,
            margin: 10,
            borderRadius: 10,
          }}
          resizeMode ="cover"
          source={require('../assets/movie.png')}
        />
             
        </View>
      
    </>
  );
}