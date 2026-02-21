import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '../utils/translations';

const LanguageContext = createContext({
    language: 'pt',
    setLanguage: () => {},
    t: (key) => key // Safe default
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt');

  // Debug log
  useEffect(() => {
    console.log('LanguageContext Provider mounted. Current language:', language);
  }, [language]);

  const t = (path) => {
    if (!translations || !translations[language]) {
        console.warn(`Translations not found for language: ${language}`);
        return path;
    }

    const keys = path.split('.');
    let current = translations[language];
    
    for (const key of keys) {
      if (current === undefined || current === null) {
         console.warn(`Translation path broken at ${key} for ${path}`);
         return path;
      }
      if (current[key] === undefined) {
        console.warn(`Translation missing for key: ${path} in language: ${language}`);
        return path;
      }
      current = current[key];
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
