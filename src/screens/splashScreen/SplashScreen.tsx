import {View, Text} from 'react-native';
import React from 'react';
import styles from './SplashScreenStyles';
import NetflixLogo from '../../assets/img/netflixLogo.svg';

const SplashScreen: React.FC = () => {
  return (
    <View style={styles.splashScreenContainer}>
      <NetflixLogo />
    </View>
  );
};

export default SplashScreen;
