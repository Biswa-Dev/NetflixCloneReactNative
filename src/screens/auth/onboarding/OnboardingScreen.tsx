import {
  View,
  Text,
  FlatList,
  Animated,
  TouchableHighlight,
  Image,
} from 'react-native';
import React, {useRef, useState} from 'react';

import NLogo from '../../../assets/img/nLogo.svg';

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import Paginator from './Paginator/Paginator';
import PrimaryButton from '../../../components/RectangularButton/PrimaryButton';
import styles from './OnboardingStyles';

import {onboardingData} from './OnboardingData';
import {OnboardingItem} from './OnboaringTypes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthRouteRootStack} from '../Authtypes';
import useOnboardingHook from './OnboardingHook';
import GetStartedSheet from './GetStartedSheet/GetStartedSheet';

type Props = NativeStackScreenProps<
  AuthRouteRootStack,
  'Onboarding',
  undefined
>;

const OnboardingScreen = ({navigation}: Props) => {
  const {
    isGetStartedSheetVisible,
    handlePrivacyPress,
    handleLogInPress,
    handleFaqsPress,
    handleHelpPress,
    handleGetStartedPress,
    handleCloseGetStartedSheet,
  } = useOnboardingHook({navigation});

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: any}) => {
      setCurrentIndex(viewableItems[0].index);
    },
  ).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const OnboardingRenderItem = (props: {item: OnboardingItem}) => {
    const {item} = props;
    return (
      <View style={styles.onboardingRenderItemContainer}>
        <item.image style={styles.onboardingBg} />
        <View style={styles.onboardingTextContainer}>
          <Text style={styles.onboardingTitle}>{item.title}</Text>
          <Text style={styles.onboardingSubtitle}>{item.subTitle}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={[styles.container]}>
      <View style={styles.header}>
        <NLogo style={styles.nLogo} />
        <View style={styles.headerNavs}>
          <Text style={styles.navText} onPress={handlePrivacyPress}>
            PRIVACY
          </Text>
          <Text style={styles.navText} onPress={handleLogInPress}>
            LOG IN
          </Text>
          <Menu>
            <MenuTrigger customStyles={menuTrigger}>
              <Image
                source={require('../../../assets/img/icons/verticalThreeDot.png')}
                style={{width: 20, height: 22}}
              />
            </MenuTrigger>
            <MenuOptions customStyles={{optionText: styles.menuOptionText}}>
              <MenuOption onSelect={handleFaqsPress}>
                <Text style={styles.menuOptionText}>FAQs</Text>
              </MenuOption>
              <MenuOption onSelect={handleHelpPress}>
                <Text style={styles.menuOptionText}>HELP</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>
      </View>
      <FlatList
        data={onboardingData}
        renderItem={({item}) => <OnboardingRenderItem item={item} />}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
      <Paginator data={onboardingData} scrollX={scrollX} />
      <View style={styles.footer}>
        <PrimaryButton
          title="Get Started"
          onPressFunc={handleGetStartedPress}
        />
      </View>
      <GetStartedSheet 
        isGetStartedSheetVisible={isGetStartedSheetVisible}
        handleCloseGetStartedSheet={handleCloseGetStartedSheet}
      />
    </View>
  );
};

const menuTrigger = {
  triggerText: {
    color: 'white',
  },
  triggerWrapper: {
    padding: 5,
  },
  triggerTouchable: {
    activeOpacity: 70,
  },
  TriggerTouchableComponent: TouchableHighlight,
};

export default OnboardingScreen;
