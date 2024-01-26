import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthRouteRootStack } from './Authtypes';
import OnboardingScreen from './onboarding/OnboardingScreen';

const AuthStackNavigator = createNativeStackNavigator<AuthRouteRootStack>();

const AuthComponent = () => {
  return (
    <>
      <AuthStackNavigator.Navigator>
        <AuthStackNavigator.Screen name='Onboarding' component={OnboardingScreen} />
      </AuthStackNavigator.Navigator>
    </>
  )
}

export default AuthComponent;