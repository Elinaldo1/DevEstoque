import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "@screens/auth/LoginScreen";


export type AuthStackParamList = {

    Login: undefined;
}

export type AuthScreenProps <RouteName extends keyof AuthStackParamList> = NativeStackScreenProps<AuthStackParamList, RouteName>

const {Navigator, Screen} = createNativeStackNavigator<AuthStackParamList>();

export function AuthRoutes() {
    return(
        <Navigator initialRouteName="Login" screenOptions={
            {
                headerShown: false
            }
        } >
            <Screen name="Login" component={LoginScreen} />
        </Navigator>
    )
}
