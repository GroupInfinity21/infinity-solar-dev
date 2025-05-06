'use client';

import { useEffect, useState } from 'react';
import React from 'react';
import { useTranslation } from 'react-i18next'; 
import '../../../i18n'


export default function LanguageSwitcher() {

  const [isClient, setIsClient] = useState(false);
  const { i18n } = useTranslation(); 
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const currentLanguage = i18n.language; 
  const switchTo = currentLanguage === 'pt-BR' ? 'en-US' : 'pt-BR';

  const handleLanguageSwitch = () => {
    i18n.changeLanguage(switchTo); 
  };

  return (
    <button
      onClick={handleLanguageSwitch}
      className="button-primary fixed top-4 right-4 z-50 px-4 py-2 rounded-md text-white bg-black/60 hover:bg-black transition text-sm font-semibold"
    >
      {switchTo.toUpperCase()}
    </button>
  );
}
