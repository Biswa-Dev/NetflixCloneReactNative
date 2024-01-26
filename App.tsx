import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  StatusBarStyle,
  StatusBarAnimation,
} from 'react-native';
import {useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {colors} from './src/constants/colors';
import AuthComponent from './src/screens/auth/AuthComponent';
import HomeComponent from './src/screens/home/HomeComponent';

function App(): React.JSX.Element {
  const isDarkMode: boolean = useColorScheme() === 'dark';
  const [isUserSignedIn, setIsUserSignedIn] = useState<boolean>(false);

  return (
    <>
      <View style={styles.appMainContainer}>
        <StatusBar
          animated={true}
          backgroundColor={colors.dark.secondary}
          barStyle={'dark-content'}
          showHideTransition={'fade'}
        />
        <NavigationContainer>
          {isUserSignedIn ? <HomeComponent /> : <AuthComponent />}
        </NavigationContainer>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appMainContainer: {
    flex: 1,
    backgroundColor: colors.dark.secondary, 
  },
});

export default App;
