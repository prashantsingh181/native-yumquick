import { colors } from '@/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  stepperContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  step: {
    height: 4,
    width: 20,
    backgroundColor: colors.yellow2,
    borderRadius: 2,
  },
  activeStep: {
    backgroundColor: colors.orange,
  },
});
