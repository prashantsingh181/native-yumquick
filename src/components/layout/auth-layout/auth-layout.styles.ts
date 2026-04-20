import { fontFamily } from '@/assets/fonts';
import { colors } from '@/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  layoutContainer: {
    flex: 1,
    backgroundColor: colors.yellow,
  },
  layoutHeadingContainer: {
    marginTop: 44,
    marginBottom: 60,
    position: 'relative',
    alignItems: 'center',
  },
  backBtn: {
    position: 'absolute',
    left: 35,
    top: '50%',
    transform: [{ translateY: '-50%' }, { rotate: '180deg' }],
  },
  layoutHeading: {
    fontSize: 28,
    fontFamily: fontFamily.bold,
    color: colors.textLight,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: colors.bgLight,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingTop: 34,
    paddingHorizontal: 36,
  },
  content: {marginBottom: 34}
});
