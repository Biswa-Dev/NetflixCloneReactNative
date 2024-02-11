import {StyleSheet} from 'react-native';
import {colors} from '../../../../constants/colors';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: 40,
    paddingHorizontal: 25,
    backgroundColor: colors.dark.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  headerBar: {
    width: '100%',
    height: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  closeBtn: {
    width: 15,
    height: 15,
  },
  crossIcon: {
    width: 15,
    height: 15,
  },
  modalForm: {
    paddingTop: 40,
  },
  formHeader: {
    paddingBottom: 20,
    fontSize: 24,
    fontWeight: '500',
    color: colors.dark.smokyBlack,
  },
  formSubHeader: {
    paddingBottom: 20,
    fontSize: 16,
    color: colors.dark.graniteGrey,
  },
  emailInputBox: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.dark.vividMalachite,
    borderRadius: 4,
  },
  emailInputBoxTitle: {
    fontSize: 12,
    color: colors.dark.graniteGrey,
  },
  emailInputField: {
    padding: 0,
    color: colors.dark.black,
  },
  emailError: {},
  btnContainer: {
    width: '100%',
    height: 50,
    marginTop: 25,
  },
});

export default styles;
