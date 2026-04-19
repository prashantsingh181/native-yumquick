import { assets } from '@/assets';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './welcome.styles';
import { ROUTES } from '@/enums/routes';
import { useNavigation } from '@react-navigation/native';

export const WelcomeScreen = () => {
  const navigation = useNavigation();
  const handleLoginClick = () => {
    navigation.navigate(ROUTES.LOGIN);
  };
  const handleSignupClick = () => {
    navigation.navigate(ROUTES.ONBOARDING);
  };

  return (
    <View style={styles.container}>
      <Image source={assets.logos.yellow} style={styles.logo} />
      <View style={styles.detailsContainer}>
        <Text style={styles.tagLine}>
          From kitchen to you, quicker than cravings.
        </Text>
        <TouchableOpacity onPress={handleLoginClick}>
          <Text style={styles.loginLink}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignupClick}>
          <Text style={styles.signUpLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
