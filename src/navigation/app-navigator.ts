import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '@/enums/routes';
import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import { HomeScreen } from '@/screens/home';
import { LoginScreen } from '@/screens/auth/login';
import { WelcomeScreen } from '@/screens/auth/welcome/welcome';
import { OnboardingScreen } from '@/screens/auth/onboarding';
import { SignupScreen } from '@/screens/auth/signup/signup';
import { useAuth } from '@/context/auth-context';

const useIsSignedIn = () => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn;
};
const useIsSignedOut = () => {
  const { isLoggedIn } = useAuth();
  return !isLoggedIn;
};

const AppStackNavigator = createNativeStackNavigator({
  screenOptions: {
    headerShown: false,
  },
  screens: {
    // auth screens
    [ROUTES.WELCOME]: { if: useIsSignedOut, screen: WelcomeScreen },
    [ROUTES.ONBOARDING]: { if: useIsSignedOut, screen: OnboardingScreen },
    [ROUTES.LOGIN]: { if: useIsSignedOut, screen: LoginScreen },
    [ROUTES.SIGNUP]: { if: useIsSignedOut, screen: SignupScreen },

    // authenticated screens
    [ROUTES.HOME]: { if: useIsSignedIn, screen: HomeScreen },
  },
});

export const AppNavigator = createStaticNavigation(AppStackNavigator);

export type AppNavigatorParamList = StaticParamList<typeof AppStackNavigator>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppNavigatorParamList {}
  }
}
