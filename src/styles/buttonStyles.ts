import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { fontFamily } from '@/assets/fonts';

export const buttonStyles = StyleSheet.create({
  base: {
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: fontFamily.medium,
    borderRadius: 1024,
  },
  primary: {
    backgroundColor: colors.orange,
    color: colors.textLight,
  },
  secondary: {
    backgroundColor: colors.yellow,
    color: colors.orange,
  },
  inverted: {
    backgroundColor: colors.orange2,
    color: colors.orange,
  },

  textSm: { fontSize: 17 },
  textMd: { fontSize: 20 },
  textLg: { fontSize: 24 },

  sm: {
    paddingVertical: 8,
    paddingHorizontal: 50,
  },
  md: {
    paddingVertical: 10,
    paddingHorizontal: 60,
  },
  lg: {
    paddingVertical: 14,
    paddingHorizontal: 70,
  },
  fullWidth: {
    width: '100%',
  }
});
