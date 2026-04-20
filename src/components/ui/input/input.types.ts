import { ComponentProps } from 'react';
import { TextInput } from 'react-native';

export interface InputProps extends ComponentProps<typeof TextInput> {
  error?: string;
  label?: string;
}
