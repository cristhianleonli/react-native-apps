import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeNavigation from './HomeNavigation'
import LoginScreen from '../screens/LoginScreen'
import OnBoarding from '../screens/OnBoarding'

const AppNavigation = ({ initialRoute }) => {
    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={initialRoute}>
                <Stack.Screen name="OnBoarding" component={OnBoarding} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={HomeNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation
