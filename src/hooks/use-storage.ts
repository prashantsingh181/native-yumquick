import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useStorage = <T>(key: string, defaultValue: T) => {
  const [value, setValue] = useState<T>(defaultValue);
  const [isValueLoaded, setIsValueLoaded] = useState(false);

  useEffect(() => {
    const loadValue = async () => {
      try {
        const storedValue = await AsyncStorage.getItem(key);
        if (storedValue) {
          setValue(
            typeof storedValue === 'string'
              ? JSON.parse(storedValue)
              : storedValue,
          );
        }
      } catch (error) {
        console.error(`Error loading value for key "${key}":`, error);
      } finally {
        setIsValueLoaded(true);
      }
    };
    loadValue();
  }, [key]);

  useEffect(() => {
    AsyncStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return { value, setValue, isValueLoaded };
};
