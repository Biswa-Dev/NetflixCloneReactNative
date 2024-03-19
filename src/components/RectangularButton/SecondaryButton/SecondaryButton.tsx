import {TouchableHighlight, Text} from 'react-native';
import React from 'react';

import styles from './SecondaryButtonStyles';
import {SecondaryButtonProps} from './SecondaryButtonTypes';

const SecondaryButton = ({title, onPressFunc}: SecondaryButtonProps) => {
  return (
    <TouchableHighlight
      style={styles.secondaryBtn}
      underlayColor={'#ff4040'}
      activeOpacity={1}
      onPress={onPressFunc}>
      <Text style={styles.title}>{title}</Text>
    </TouchableHighlight>
  );
};

export default SecondaryButton;
