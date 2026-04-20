import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { AuthLayoutProps } from './auth-layout.types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './auth-layout.styles';
import { assets } from '@/assets';
import { useNavigation } from '@react-navigation/native';

export const AuthLayout = ({
  children,
  heading,
  containerStyles,
  onBackPress,
}: AuthLayoutProps) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const navigateBack = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={[styles.layoutContainer, { paddingTop: insets.top }]}>
      <View style={styles.layoutHeadingContainer}>
        <TouchableOpacity onPress={navigateBack} style={styles.backBtn}>
          <Image source={assets.icons.rightChevron} />
        </TouchableOpacity>
        <Text style={styles.layoutHeading}>{heading}</Text>
      </View>
      <View
        style={[
          styles.contentContainer,
          { paddingBottom: insets.bottom },
          containerStyles,
        ]}
      >
        <ScrollView style={styles.content}>{children}</ScrollView>
      </View>
    </View>
  );
};
