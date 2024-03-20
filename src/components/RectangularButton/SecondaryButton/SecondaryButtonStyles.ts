import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";

const styles = StyleSheet.create({
    secondaryBtn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: colors.dark.snow,
        borderRadius: 8,
        color: colors.dark.white,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.dark.white,
    }
});

export default styles;