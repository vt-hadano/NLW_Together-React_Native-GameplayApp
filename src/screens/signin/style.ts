import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 360,
        width: '100%',
    },
    content: {
        marginTop: -40,
        paddingHorizontal: 50,
    },
    tittle: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16,
        fontFamily: theme.fonts.tittle700,
        lineHeight: 40,
    },
    subTittle: {
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 32,
        fontFamily: theme.fonts.tittle500,
        lineHeight: 25,
    }
})