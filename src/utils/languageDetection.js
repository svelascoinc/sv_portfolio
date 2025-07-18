export const detectLanguageFromLocation = (countryCode, continentCode) => {
    const northAmerica = ['US', 'CA'];
    const europe = 'EU';
    const southAmerica = 'SA';
  
    if ((northAmerica.includes(countryCode) || continentCode === europe) && countryCode !== 'ES') {
      return 'en';
    }
    if (continentCode === southAmerica || countryCode === 'ES') {
      return 'es';
    }
    return 'es'; // Default fallback
  };
  