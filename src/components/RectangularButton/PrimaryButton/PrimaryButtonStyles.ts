import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';

const styles = StyleSheet.create({
    primaryBtn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: colors.dark.primary,
        borderWidth: 0,
    },
    title: {
        color: colors.dark.activeText,
        fontSize: 18,
        fontWeight: '600',
    }
});

export default styles;