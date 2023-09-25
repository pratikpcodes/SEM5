import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './Screens/Splash';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import Home from './Screens/Home';
const Stack = createNativeStackNavigator();
const AppNavig = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options ={{headerShown:false}}name="Splash" component={Splash} />
        <Stack.Screen options ={{headerShown:false}}name="Login" component={Login} /> 
        <Stack.Screen options ={{headerShown:false}}name="SignUp" component={SignUp} />
        <Stack.Screen options ={{headerShown:false}}name="Home" component={Home} />

        {/* name=component to avoid eroor */}



      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavig;
