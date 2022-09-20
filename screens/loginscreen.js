import React from 'react';
import {View, Text, Touchable, TouchableOpacity,ImageBackground,Button,TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import home from './home';
import Btn from '../component/button';
import Signup from './signup';



const Login = props => {
  
  return (
    <ImageBackground source={require('../assets/image.jpeg')} resizeMode='cover' style={{flex:1}}>
<View style={{alignItems: 'center', width: 460}}>
        <Text
          style={{
            color: 'black',
            fontSize: 34,
            fontWeight: 'bold',
            marginVertical: 20,
          }}>
         YOU CAN LOGIN HERE,
        </Text>
          <TextInput
            placeholder="Email / Username"
            keyboardType={'email-address'}
            style={{
                borderRadius: 100,
                paddingHorizontal: 20,
                width: '58%',
                backgroundColor: 'rgb(220,220, 220)',
                marginVertical: 10,
              }}/>
          <TextInput placeholder="Password" secureTextEntry={true}  style={{
        borderRadius: 100,
        paddingHorizontal: 20,
        width: '58%',
        backgroundColor: 'rgb(220,220, 220)',
        marginVertical: 10,
      }} />
          <View
            style={{
              alignItems: 'flex-end',
              width: '78%',
              paddingRight: 16,
              marginBottom: 100,
            }}>
          </View>
          <Btn
            textColor="white"
            bgColor='black'
            btnLabel="Login"
            Press={() => {
              props.navigation.navigate('home');
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              paddingBottom: 10,
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold',color:'white'}}>
              Don't have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Signup')}>
              <Text
                style={{fontWeight: 'bold',color:'white', fontSize: 16}}>
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
  );
};

export default Login;