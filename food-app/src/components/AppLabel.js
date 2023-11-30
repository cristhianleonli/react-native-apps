import { StyleSheet, Text } from 'react-native';

export const Body1 = ({ style, children }) => {
    return <Text style={[styles.body1, style]}>{children}</Text>
}

export const Button = ({ style, children }) => {
    return <Text style={[styles.button, style]}>{children}</Text>
}

const styles = StyleSheet.create({
    body1: {
        fontSize: 14,
        fontWeight: '400'
    },
    button: {
        fontSize: 18,
        fontWeight: '600'
    }
})

export default { Body1, Button }