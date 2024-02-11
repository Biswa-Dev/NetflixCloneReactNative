import {StyleSheet} from 'react-native';
import { colors } from '../../../../constants/colors';

const styles = StyleSheet.create({
    paginatorContainer: {
        flexDirection: 'row', 
        height: 64,
        position: 'absolute',
        bottom: 60,
        left: '50%',
        transform: [{translateX: -50}]
    },
    dot: {
        height: 10,
        borderRadius: 5,
        backgroundColor: colors.dark.activeText,
        marginHorizontal: 8,
    }
});

export default styles;
