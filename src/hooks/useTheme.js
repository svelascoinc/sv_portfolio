import { useEffect, useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage('portfolio-theme', false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = useCallback(() => {
    setIsDarkMode(prev => !prev);
  }, [setIsDarkMode]);

  return { isDarkMode, toggleTheme };
};
