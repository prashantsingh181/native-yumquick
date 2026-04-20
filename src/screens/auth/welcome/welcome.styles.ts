import { fontFamily } from '@/assets/fonts';
import { buttonStyles } from '@/styles/buttonStyles';
import { colors } from '@/styles/colors';
import { Dimensions, StyleSheet } from 'react-native';

const height = Dimensions.get('window').height;
const logoHeight = height * 0.3;
let logoWidth = logoHeight;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.orange,
    paddingTop: height * 0.35,
    paddingHorizontal: 20,
  },
  logo: {
    height: logoHeight,
    marginHorizontal: 'auto',
    resizeMode: 'contain',
  },
  detailsContainer: {
    width: logoWidth,
    marginHorizontal: 'auto',
  },
  tagLine: {
    fontFamily: fontFamily.medium,
    fontSize: 16,
    color: colors.textLight,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 43,
  },
  loginLink: {
    ...buttonStyles.base,
    ...buttonStyles.secondary,
    ...buttonStyles.lg,
    ...buttonStyles.textLg,
    textAlign: 'center',
  },
  signUpLink: {
    ...buttonStyles.base,
    ...buttonStyles.secondary,
    ...buttonStyles.lg,
    ...buttonStyles.textLg,
    backgroundColor: colors.yellow2,
    textAlign: 'center',
    marginTop: 6,
  },
});
