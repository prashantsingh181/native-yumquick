import { AuthProvider } from '@/context/auth-context';
import { AppNavigator } from './src//navigation/app-navigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <AppNavigator />
        <StatusBar barStyle="dark-content" />
      </AuthProvider>
    </SafeAreaProvider>
  );
}
