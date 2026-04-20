import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './onboarding.styles';
import { assets } from '@/assets';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { useState } from 'react';
import { onboardingStepsData } from './onboarding.constants';
import { StackActions, useNavigation } from '@react-navigation/native';
import { ROUTES } from '@/enums/routes';
import { Stepper } from '@/components/ui/stepper';

export const OnboardingScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [currentStep, setCurrentStep] = useState(1);
  const stepData = onboardingStepsData.find(step => step.id === currentStep);
  const isLastStep = currentStep === onboardingStepsData.length;
  const handleSkipClick = () => {
    navigation.dispatch(StackActions.replace(ROUTES.SIGNUP));
  };
  const handleNextClick = () => {
    if (isLastStep) {
      navigation.dispatch(StackActions.replace(ROUTES.SIGNUP));
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeContainer} edges={['top']}>
        <ImageBackground
          style={styles.background}
          source={stepData?.background}
        >
          {!isLastStep && (
            <TouchableOpacity
              style={styles.skipButton}
              onPress={handleSkipClick}
            >
              <Text style={styles.skipText}>Skip</Text>
              <Image source={assets.icons.rightChevron} />
            </TouchableOpacity>
          )}

          <ScrollView
            contentContainerStyle={[
              styles.contentContainer,
              { paddingBottom: insets.bottom },
            ]}
          >
            <Image source={stepData?.icon} />
            <Text style={styles.contentHeading}>{stepData?.heading}</Text>
            <Text style={styles.contentText}>{stepData?.text}</Text>
            <View style={styles.stepperWrapper}>
              <Stepper
                totalSteps={onboardingStepsData.length}
                currentStep={currentStep}
              />
            </View>
            <TouchableOpacity onPress={handleNextClick}>
              <Text style={styles.nextButton}>Next</Text>
            </TouchableOpacity>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    </View>
  );
};
