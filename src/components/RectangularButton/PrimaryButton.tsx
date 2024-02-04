import { View, Text, TouchableHighlight } from 'react-native';
import React from 'react';
import { PrimaryButtonProps } from './PrimaryButtonTypes';
import styles from './PrimaryButtonStyles';

const PrimaryButton = ({title, onPressFunc}: PrimaryButtonProps) => {
  return (
    <TouchableHighlight style={styles.primaryBtn} underlayColor={'#ff4040'} activeOpacity={1} onPress={onPressFunc}>
      <Text style={styles.title}>{title}</Text>
    </TouchableHighlight>
  )
}

export default PrimaryButton;