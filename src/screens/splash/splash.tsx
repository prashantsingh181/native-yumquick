import { assets } from '@/assets';
import { Image, View } from 'react-native';
import { styles } from './splash.styles';
import { useAuth } from '@/context/auth-context';
import { useEffect, useState } from 'react';
import { StackActions, useNavigation } from '@react-navigation/native';
import { ROUTES } from '@/enums/routes';

export const SplashScreen = () => {
  const { isLoggedIn, isAuthLoading } = useAuth();
  const [timerDone, setTimerDone] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      setTimerDone(true);
    }, 3000);
  }, []);

  useEffect(() => {
    if (!isAuthLoading && timerDone) {
      if (isLoggedIn) {
        navigation.dispatch(StackActions.replace(ROUTES.HOME));
      } else {
        navigation.dispatch(StackActions.replace(ROUTES.WELCOME));
      }
    }
  }, [isLoggedIn, isAuthLoading, timerDone, navigation]);

  return (
    <View style={styles.container}>
      <Image source={assets.logos.orange} style={styles.logo} />
    </View>
  );
};
