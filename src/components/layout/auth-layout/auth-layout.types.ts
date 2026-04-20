import { StyleProp, ViewStyle } from "react-native";

export interface AuthLayoutProps {
  children: React.ReactNode;
  heading: string;
  containerStyles?: StyleProp<ViewStyle>
  onBackPress?: () => void;
}
