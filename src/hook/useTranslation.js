// src/hooks/useTranslation.js
import { t, getCurrentLanguage, languages } from '../i18n/translations';

export const useTranslation = () => {
  const language = getCurrentLanguage();
  
  const translate = (key) => {
    return t(key);
  };
  
  const getLanguages = () => {
    return languages;
  };
  
  // Для удобства, чтобы можно было писать t('key') вместо translate('key')
  const tFunction = translate;
  
  return { 
    translate, 
    language,
    getLanguages,
    t: tFunction // alias для удобства
  };
};