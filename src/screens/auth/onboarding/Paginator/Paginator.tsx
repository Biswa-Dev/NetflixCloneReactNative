import {View, Animated, useWindowDimensions} from 'react-native';
import React from 'react';
import {OnboardingData} from '../OnboaringTypes';
import styles from './PaginatorStyles';
import {colors} from '../../../../constants/colors';

const Paginator = ({
  data,
  scrollX,
}: {
  data: OnboardingData;
  scrollX: Animated.Value;
}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={styles.paginatorContainer}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });
        const color = scrollX.interpolate({
          inputRange,
          outputRange: [
            colors.dark.activeText,
            colors.dark.primary,
            colors.dark.activeText,
          ],
          extrapolate: 'clamp',
        });
        
        return (
          <Animated.View
            style={[styles.dot, {width: dotWidth, backgroundColor: color}]}
            key={i.toString()}></Animated.View>
        );
      })}
    </View>
  );
};

export default Paginator;
