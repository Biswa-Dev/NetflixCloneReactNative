import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthRouteRootStack} from './Authtypes';
import OnboardingScreen from './onboarding/OnboardingScreen';
import SignInScreen from './signin/SignInScreen';

const AuthStackNavigator = createNativeStackNavigator<AuthRouteRootStack>();

const AuthComponent = () => {
  return (
    <>
      <AuthStackNavigator.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Onboarding">
        <AuthStackNavigator.Screen
          name="Onboarding"
          component={OnboardingScreen}
        />
        <AuthStackNavigator.Screen name="Signin" component={SignInScreen} />
      </AuthStackNavigator.Navigator>
    </>
  );
};

export default AuthComponent;
