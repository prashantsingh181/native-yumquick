import { useAuth } from '@/context/auth-context';
import { Text, TouchableHighlight, View } from 'react-native';

export const HomeScreen = () => {
  const { setUser } = useAuth();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'plum',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Hello, World!</Text>
      <TouchableHighlight onPress={() => setUser(null)}>
        <Text>Logout</Text>
      </TouchableHighlight>
    </View>
  );
};
