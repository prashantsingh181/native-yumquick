import { AuthProvider, useAuth } from '@/context/auth-context';
import { AppNavigator } from './src//navigation/app-navigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { useEffect, useState } from 'react';
import { SplashScreen } from '@/screens/splash';

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </SafeAreaProvider>
  );
}

function AppContent() {
  const { isAuthLoading } = useAuth();
  const [timerDone, setTimerDone] = useState(false);
  const shouldShowSplash = !timerDone || isAuthLoading;

  useEffect(() => {
    setTimeout(() => {
      setTimerDone(true);
    }, 3000);
  }, []);

  return (
    <>
      {shouldShowSplash ? <SplashScreen /> : <AppNavigator />}
      <StatusBar barStyle="dark-content" />
    </>
  );
}
