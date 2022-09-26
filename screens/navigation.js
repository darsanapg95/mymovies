import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './loginscreen';
import mymovies from '../screens/mymovies';
import Details from './details';
import home from './home';
import Signup from './signup';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function Root() {
  return (
    <Drawer.Navigator initialRouteName="Login" options={{headerShown: false}}>
        <Drawer.Screen name="home" component={home} />
        <Drawer.Screen name="mymovies" component={mymovies} />
        <Drawer.Screen name="Details" component={Details} />  

      </Drawer.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Root"
          component={Root}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}