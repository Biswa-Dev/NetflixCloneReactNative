import {
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Text,
  TextInput,
} from 'react-native';
import React from 'react';

import BackArrow from '../../../assets/img/icons/arrowLeft.svg';
import NetflixLogo from '../../../assets/img/netflixLogo.svg';

import styles from './SignInScreenStyle';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthRouteRootStack} from '../Authtypes';
import SecondaryButton from '../../../components/RectangularButton/SecondaryButton/SecondaryButton';

type SignInNavigationProps = NativeStackScreenProps<
  AuthRouteRootStack,
  'Signin'
>;

const SignInScreen = ({navigation}: SignInNavigationProps) => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrow style={styles.backArrow} />
        </TouchableOpacity>
        <NetflixLogo style={styles.netflixLogo} width={125} height={32} />
      </View>
      <View style={styles.emailForm}>
        <View style={styles.inputBox}>
          <Text style={styles.inputBoxTitle}>Email or phonenumber</Text>
          <TextInput style={styles.inputField} autoFocus={true} />
        </View>
        <View style={styles.nextBtnContainer}>
          <SecondaryButton title="Next" onPressFunc={() => {}} />
        </View>
        <View style={styles.infoTextContainer}>
          <Text style={styles.infoText}>
            Eligible accounts may receive a sign-in code via SMS or email.
          </Text>
        </View>
      </View>
      <View style={styles.importantLinks}>
        <Text style={styles.linkText}>Forgot Email or Phone Number?</Text>
        <Text style={styles.linkText}>New to Netflix? Sign up now.</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Sign in is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;
