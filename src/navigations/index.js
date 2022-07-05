import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Detail from '../screens/detail';
import Home from '../screens/home';
import {navigationNames} from './navigationNames';

const Stack = createNativeStackNavigator();

export default Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={navigationNames.home} component={Home} />
        <Stack.Screen name={navigationNames.detail} component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
