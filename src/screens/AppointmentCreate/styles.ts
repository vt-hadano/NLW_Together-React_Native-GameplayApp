import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    label: {
        fontFamily: theme.fonts.tittle700,
        fontSize: 18,
        color: theme.colors.heading
    },
    form: {
        flex: 1,
        paddingHorizontal: 24,
        marginTop: 32,
    },
    select: {
        flexDirection: "row",
        width: '100%',
        height: 68,
        borderColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: "center",
        paddingRight: 25,
        overflow: "hidden"
    },
    selectBody: {
        flex: 1,
        alignItems: "center"
    },
    image: {
        width: 64,
        height: 68,
        backgroundColor: theme.colors.secondary40,
        borderColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8,

    },
    field: {
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30,
    },
    column: {
        flexDirection: "row",
        alignItems: "center"
    },
    divider: {
        marginRight: 4,
        fontSize: 15,
        fontFamily: theme.fonts.text500,
        color: theme.colors.heading
    },
    characterLimit: {
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        color: theme.colors.highlight
    },
    footer: {
        marginVertical: 20,
        marginBottom: 56
    }
});