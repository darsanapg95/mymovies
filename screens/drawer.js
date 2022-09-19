import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import mymovies from './mymovies';
import Details from './details';


const Drawer = createDrawerNavigator();

export default function drawer() {
  return (
      <Drawer.Navigator initialRouteName="home" options={{headerShown: false}}>
        <Drawer.Screen name="mymovies" component={mymovies} />
        <Drawer.Screen name="Details" component={Details} />    
      </Drawer.Navigator>
  );
}