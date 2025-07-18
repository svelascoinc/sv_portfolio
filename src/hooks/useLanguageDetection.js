import { useState, useEffect, useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { LANGUAGE_DETECTION_API } from '../utils/constants';
import { detectLanguageFromLocation } from '../utils/languageDetection';

export const useLanguageDetection = () => {
  const [language, setLanguage] = useLocalStorage('portfolio-language', 'es');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Only detect language on first visit (if not already stored)
    if (language) return;

    const detectLanguage = async () => {
      setIsLoading(true);
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout

        const response = await fetch(LANGUAGE_DETECTION_API, {
          signal: controller.signal,
          headers: {
            'Accept': 'application/json',
          }
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const detectedLanguage = detectLanguageFromLocation(data.countryCode, data.continentCode);
        setLanguage(detectedLanguage);
      } catch (error) {
        if (error.name === 'AbortError') {
          console.warn('Language detection request timed out');
        } else {
          console.warn('Failed to detect language, using default:', error);
        }
        setLanguage('es'); // Fallback
      } finally {
        setIsLoading(false);
      }
    };

    detectLanguage();
  }, [language, setLanguage]);

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  }, [setLanguage]);

  return { language, toggleLanguage, isLanguageLoading: isLoading };
};
