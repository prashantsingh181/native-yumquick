import { fontFamily } from '@/assets/fonts';
import { buttonStyles } from '@/styles/buttonStyles';
import { colors } from '@/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.yellow,
  },
  safeContainer: {
    flex: 1,
    position: 'relative',
  },

  background: {
    flex: 1,
  },
  skipButton: {
    flexDirection: 'row',
    gap: 7,
    alignItems: 'center',
    marginLeft: 'auto',
    marginTop: 20,
    marginRight: 35,
  },
  skipText: {
    fontSize: 15,
    fontFamily: fontFamily.medium,
    color: colors.orange,
  },
  contentContainer: {
    paddingVertical: 24,
    paddingHorizontal: 60,
    backgroundColor: colors.bgLight,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  contentHeading: {
    marginTop: 20,
    fontSize: 24,
    fontFamily: fontFamily.black,
    color: colors.orange,
  },
  contentText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: fontFamily.medium,
    color: colors.textDark,
  },
  stepperWrapper: {
    marginTop: 30,
  },
  nextButton: {
    ...buttonStyles.base,
    ...buttonStyles.primary,
    ...buttonStyles.textMd,
    ...buttonStyles.md,
    marginTop: 30,
    marginBottom: 24,
  },
});
