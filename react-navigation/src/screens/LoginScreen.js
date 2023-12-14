import { useNavigation } from "@react-navigation/native"
import { View, Text, Button } from "react-native"

const LoginScreen = () => {
    const navigation = useNavigation()
    return <View>
        <Text>Landing</Text>
        <Button
            // reset the navigation tree, to prevent users to go back
            onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Home' }] })}
            title='Sign In'
        />
    </View>
}


export default LoginScreen
