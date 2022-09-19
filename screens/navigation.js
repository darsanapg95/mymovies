import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import mymovies from '../screens/mymovies';
import Details from './details';

const Stack = createNativeStackNavigator();
export default function Navigation() {
return(
<NavigationContainer>
<Stack.Navigator initialRouteName="Home">
{/* <Stack.Screen name="drawer" component={drawer} options={{headerShown:false}}/>   */}
<Stack.Screen name="Mymovies" component={mymovies}/>
<Stack.Screen name="Details" component={Details}/>
</Stack.Navigator>
</NavigationContainer>
)
}