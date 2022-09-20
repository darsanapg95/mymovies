import { View, ScrollView,Text,Image,StyleSheet} from "react-native";
import { StatusBar } from "react-native";

export default function Details(movie) {
  return (
    <>
        <View>
        <Text style={styles.title}>Descrption of Movies:</Text>
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
const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    padding: 15,
    color: 'black',
    fontWeight: 'bold',    
    textAlign: 'center', 
    marginBottom:30   
  },
});