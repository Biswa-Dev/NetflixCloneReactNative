import React, {useCallback, useState} from 'react';
import {Alert, Linking} from 'react-native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {AuthRouteRootStack} from '../Authtypes';

const privacyUrl = 'https://google.com';

const useOnboardingHook = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<
    AuthRouteRootStack,
    'Onboarding',
    undefined
  >;
}) => {
  const [isGetStartedSheetVisible, setIsGetStartedSheetVisible] =
    useState<boolean>(false);

  const handlePrivacyPress = useCallback(async () => {
    await Linking.openURL(privacyUrl);
  }, [privacyUrl]);

  const handleLogInPress = () => {
    navigation.navigate('Signin');
  };

  const handleFaqsPress = () => {};

  const handleHelpPress = () => {};

  const handleGetStartedPress = () => {
    setIsGetStartedSheetVisible(true);
  };

  const handleCloseGetStartedSheet = () => {
    setIsGetStartedSheetVisible(false);
  };

  return {
    isGetStartedSheetVisible,
    handlePrivacyPress,
    handleLogInPress,
    handleFaqsPress,
    handleHelpPress,
    handleGetStartedPress,
    handleCloseGetStartedSheet,
  };
};

export default useOnboardingHook;
