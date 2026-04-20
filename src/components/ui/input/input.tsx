import { TextInput, View, Text } from 'react-native';
import { InputProps } from './input.types';
import { styles } from './input.styles';

export const Input = ({ error, label, ...props }: InputProps) => {
  return (
    <View>
      {!!label && <Text style={styles.label}>{label}</Text>}
      <TextInput style={styles.input} {...props} />
      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};
