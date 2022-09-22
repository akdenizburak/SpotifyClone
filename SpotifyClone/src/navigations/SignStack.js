import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import BottomTab from './BottomTab'

const Stack = createNativeStackNavigator();

export default SignStack=()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="SignIn" component={SignInPage} />
        <Stack.Screen name="SignUp" component={SignUpPage} />
        <Stack.Screen name="Bottom" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};