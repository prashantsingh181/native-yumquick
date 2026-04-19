import { colors } from '@/styles/colors';
import { Dimensions, StyleSheet } from 'react-native';

const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.yellow,
    paddingTop: height * 0.35,
  },
  logo: {
    height: height * 0.3,
    marginHorizontal: 'auto',
    resizeMode: 'contain',
  },
});
