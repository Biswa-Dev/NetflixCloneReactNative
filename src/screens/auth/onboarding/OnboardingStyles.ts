import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: colors.dark.secondary,
    position: 'relative',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    height: 35,
    position: 'absolute',
    top: 10,
    left: 50,
    transform: [{translateX: -30}],
    zIndex: 5,
  },
  nLogo: {
    flex: 1,
    height: '100%',
  },
  headerNavs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '50%',
    height: '100%',
  },
  navText: {
    color: colors.dark.activeText,
    fontWeight: 'bold',
  },
  menuOptionText: {
    color: colors.dark.secondary,
    padding: 5,
    fontWeight: '600',
  },
  onboardingRenderItemContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  onboardingBg: {
    flex: 1,
    width: '10%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  onboardingTextContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 10,
    width: Dimensions.get('screen').width,
    height: '100%',
    paddingBottom: 180,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  onboardingTitle: {
    fontSize: 48,
    fontWeight: '900',
    color: colors.dark.activeText,
    textAlign: 'center',
    lineHeight: 50,
  },
  onboardingSubtitle: {
    fontSize: 20,
    color: colors.dark.inActiveText,
    textAlign: 'center',
  },
  footer: {
    flex: 1,
    width: '90%',
    height: 50,
    position: 'absolute',
    bottom: 30,
    left: 50,
    transform: [{translateX: -30}],
    zIndex: 5,
  },
});

export default styles;
