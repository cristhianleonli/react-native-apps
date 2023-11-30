import { View } from 'react-native';

const HStack = ({ style, children, ...delegated }) => {
    return (
        <View style={[{ flexDirection: 'row' }, style]} {...delegated}>
            {children}
        </View>
    );
}

export default HStack
