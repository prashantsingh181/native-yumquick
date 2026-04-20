import { View } from 'react-native';
import { StepperProps } from './stepper.types';
import { styles } from './stepper.styles';

export const Stepper = ({ totalSteps, currentStep }: StepperProps) => {
  return (
    <View style={styles.stepperContainer}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <View
          style={[
            styles.step,
            index + 1 === currentStep ? styles.activeStep : null,
          ]}
          key={index}
        />
      ))}
    </View>
  );
};
