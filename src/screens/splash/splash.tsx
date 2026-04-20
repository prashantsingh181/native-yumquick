import { assets } from '@/assets';
import { Image, View } from 'react-native';
import { styles } from './splash.styles';

export const SplashScreen = () => {

  return (
    <View style={styles.container}>
      <Image source={assets.logos.orange} style={styles.logo} />
    </View>
  );
};
