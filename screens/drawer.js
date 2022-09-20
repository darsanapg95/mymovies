import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import mymovies from './mymovies';
import Details from './details';
import home from './home';
import Login from './loginscreen';
import Signup from './signup';


const Drawer = createDrawerNavigator();

export default function drawer() {
  return (
      <Drawer.Navigator initialRouteName="Login" options={{headerShown: false}}>
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="home" component={home} />
        <Drawer.Screen name="mymovies" component={mymovies} />
        <Drawer.Screen name="Details" component={Details} />  
        <Drawer.Screen name="Signup" component={Signup} />

      </Drawer.Navigator>
  );
}