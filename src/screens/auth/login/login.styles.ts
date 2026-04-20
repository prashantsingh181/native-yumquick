import { fontFamily } from '@/assets/fonts';
import { buttonStyles } from '@/styles/buttonStyles';
import { colors } from '@/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: fontFamily.semiBold,
    color: colors.textDark,
    marginBottom: 50,
  },
  inputFieldsContainer: {
    gap: 20,
  },
  loginBtn: {
    ...buttonStyles.base,
    ...buttonStyles.primary,
    ...buttonStyles.lg,
    ...buttonStyles.textLg,
    textAlign: 'center',
    marginTop: 60,
  },
  signUpText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: fontFamily.regular,
  },
  signUpLink: {
    color: colors.orange,
    fontSize: 14,
    fontFamily: fontFamily.regular,
  },
});
