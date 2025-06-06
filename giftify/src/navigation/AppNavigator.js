import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import RegisterScreen from '../screens/RegisterScreen';

// Create stack navigator
const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            headerShown: false // This hides the default header
          }}
        />
        <Stack.Screen 
          name="RegisterScreen" 
          component={RegisterScreen} 
          options={{
            headerShown: false // This hides the default header
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}