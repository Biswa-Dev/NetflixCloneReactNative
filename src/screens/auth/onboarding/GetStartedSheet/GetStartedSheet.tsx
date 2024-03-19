import {
  View,
  Text,
  Modal,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import styles from './GetStartedSheetStyles';

import PrimaryButton from '../../../../components/RectangularButton/PrimaryButton/PrimaryButton';

type GetStartedSheetProps = {
  isGetStartedSheetVisible: boolean;
  handleCloseGetStartedSheet: () => void;
};

const GetStartedSheet = ({
  isGetStartedSheetVisible,
  handleCloseGetStartedSheet,
}: GetStartedSheetProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isGetStartedSheetVisible}
      presentationStyle="overFullScreen"
      onRequestClose={handleCloseGetStartedSheet}>
      <View style={styles.modalContainer}>
        <View style={styles.headerBar}>
          <TouchableOpacity
            style={styles.closeBtn}
            onPress={handleCloseGetStartedSheet}>
            <Image
              source={require('../../../../assets/img/icons/crossIconGrey.png')}
              style={styles.crossIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.modalForm}>
          <Text style={styles.formHeader}>Ready to watch?</Text>
          <Text style={styles.formSubHeader}>
            Enter your email to create or sign in to your account.
          </Text>
          <View style={styles.emailInputBox}>
            <Text style={styles.emailInputBoxTitle}>Email</Text>
            <TextInput
              style={styles.emailInputField}
              autoFocus={true}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.btnContainer}>
            <PrimaryButton
              title="GET STARTED"
              onPressFunc={() => {
                console.log('GET STARTED');
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GetStartedSheet;
