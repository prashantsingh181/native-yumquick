import { fontFamily } from '@/assets/fonts';
import { colors } from '@/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  label: {
    color: colors.textDark,
    fontSize: 20,
    fontFamily: fontFamily.medium,
    marginBottom: 10,
  },
  input: {
    padding: 15,
    backgroundColor: colors.yellow2,
    fontSize: 20,
    fontFamily: fontFamily.regular,
    color: colors.textDark,
    borderRadius: 20,
  },
  error: {
    color: colors.error,
    fontSize: 14,
    fontFamily: fontFamily.regular,
  },
});
