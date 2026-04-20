import { fontFamily } from '@/assets/fonts';
import { buttonStyles } from '@/styles/buttonStyles';
import { colors } from '@/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  inputFieldsContainer: {
    gap: 20,
  },
  signupBtn: {
    ...buttonStyles.base,
    ...buttonStyles.primary,
    ...buttonStyles.lg,
    ...buttonStyles.textLg,
    textAlign: 'center',
    marginTop: 60,
  },
  loginText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: fontFamily.regular,
  },
  loginLink: {
    color: colors.orange,
    fontSize: 14,
    fontFamily: fontFamily.regular,
  },
});
