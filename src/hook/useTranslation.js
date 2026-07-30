import { useState, useEffect } from 'react';
import { t, getCurrentLanguage, languages } from '../i18n/translations';

export const useTranslation = () => {
  const [lang, setLang] = useState(getCurrentLanguage());

  useEffect(() => {
    const handleLangChange = () => {
      setLang(getCurrentLanguage());
    };
    window.addEventListener('languageChange', handleLangChange);
    return () => window.removeEventListener('languageChange', handleLangChange);
  }, []);

  const translate = (key) => t(key);

  return { 
    translate, 
    language: lang,
    getLanguages: () => languages,
    t: translate
  };
};