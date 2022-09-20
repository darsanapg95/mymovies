import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import mymovies from '../screens/mymovies';
import Details from './details';
import home from './home';
import drawer from './drawer';

const Stack = createNativeStackNavigator();
export default function Navigation() {
return(
<NavigationContainer>
<Stack.Navigator initialRouteName="drawer">
<Stack.Screen
          name="drawer"
          component={drawer}
          options={{
            headerShown: false,
          }}
        />
{/* <Stack.Screen name="drawer" component={drawer} />  */}
</Stack.Navigator>
</NavigationContainer>
)
}