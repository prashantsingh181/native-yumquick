import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '@/enums/routes';
import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import { SplashScreen } from '@/screens/splash';
import { HomeScreen } from '@/screens/home';
import { LoginScreen } from '@/screens/auth/login';
import { WelcomeScreen } from '@/screens/auth/welcome/welcome';
import { OnboardingScreen } from '@/screens/auth/onboarding';
import { SignupScreen } from '@/screens/auth/signup/signup';

const AppStackNavigator = createNativeStackNavigator({
  initialRouteName: ROUTES.SPLASH_SCREEN,
  screenOptions: {
    headerShown: false,
  },
  screens: {
    [ROUTES.SPLASH_SCREEN]: SplashScreen,
    [ROUTES.HOME]: HomeScreen,
    [ROUTES.LOGIN]: LoginScreen,
    [ROUTES.WELCOME]: WelcomeScreen,
    [ROUTES.ONBOARDING]: OnboardingScreen,
    [ROUTES.SIGNUP]: SignupScreen,
  },
});

export const AppNavigator = createStaticNavigation(AppStackNavigator);

export type AppNavigatorParamList = StaticParamList<typeof AppStackNavigator>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppNavigatorParamList {}
  }
}
