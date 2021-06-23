import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles =  StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    user: {
        flexDirection: 'row',
    },
    greeting: {
        fontFamily: theme.fonts.tittle500,
        fontSize: 24,
        color: theme.colors.heading,
        marginRight: 5,
    },
    userName: {
        fontFamily: theme.fonts.tittle700,
        fontSize: 24,
        color: theme.colors.heading,
    },
    message: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight
    }
});