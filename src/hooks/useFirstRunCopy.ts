import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNFS from 'react-native-fs';

const FIRST_RUN_KEY = 'first_run_completed';

export const useFirstRunCopy = () => {
  const [isFirstRun, setIsFirstRun] = useState<boolean | null>(null);
  const [copying, setCopying] = useState(false);

  const checkFirstRun = async () => {
    try {
      const hasRunBefore = await AsyncStorage.getItem(FIRST_RUN_KEY);
      setIsFirstRun(!hasRunBefore);
    } catch (error) {
      console.error('Error checking first run:', error);
      setIsFirstRun(false);
    }
  };

  const copyBundledPdfs = async () => {
    setCopying(true);
    try {
      // Implementation will be added here
      // This will copy bundled PDFs from assets to app documents
      
      await AsyncStorage.setItem(FIRST_RUN_KEY, 'true');
      setIsFirstRun(false);
    } catch (error) {
      console.error('Error copying bundled PDFs:', error);
    } finally {
      setCopying(false);
    }
  };

  useEffect(() => {
    checkFirstRun();
  }, []);

  return {
    isFirstRun,
    copying,
    copyBundledPdfs,
  };
};
