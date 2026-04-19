import { STORAGE_KEYS } from '@/enums/storage-keys';
import { useStorage } from '@/hooks/use-storage';
import { createContext, useContext } from 'react';
import { AuthContextType } from './auth-context.types';

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { isValueLoaded, value: user } = useStorage(STORAGE_KEYS.AUTH, null);
  const isLoggedIn = !!user;
  const isAuthLoading = !isValueLoaded;
  console.log(
    'AuthProvider: isLoggedIn=',
    isLoggedIn,
    'isAuthLoading=',
    isAuthLoading,
  );
  return (
    <AuthContext value={{ isLoggedIn, isAuthLoading }}>{children}</AuthContext>
  );
};
