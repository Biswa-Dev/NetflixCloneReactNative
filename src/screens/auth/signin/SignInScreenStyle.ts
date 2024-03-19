import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: colors.dark.secondary,
    position: 'relative',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    paddingHorizontal: 10,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  backArrow: {},
  netflixLogo: {},
  emailForm: {
    padding: 20,
  },
  inputBox: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 12,
    backgroundColor: colors.dark.graniteGrey,
  },
  inputBoxTitle: {
    fontSize: 12,
    padding: 0,
    color: colors.dark.white,
  },
  inputField: {
    alignItems: 'flex-start',
    paddingBottom: 10,
    marginTop: 0,
    fontSize: 16,
  },
  nextBtnContainer: {
    width: '100%',
    height: 55,
    marginTop: 20,
  },
  infoTextContainer: {
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  infoText: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.dark.inActiveText,
    textAlign: 'center',
  },
  importantLinks: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    flexDirection: 'column',
    gap: 20,
    alignItems: 'center'
  },
  linkText: {
    color: colors.dark.activeText,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  footer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  footerText: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.dark.graniteGrey,
    textAlign: 'center',
  }
});

export default styles;
