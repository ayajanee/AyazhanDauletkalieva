import React from 'react';

export const languages = [
  { displayName: "English", lang: "en-US" },
  { displayName: "Pусский", lang: "ru-RU" }
];

export const LanguageContext = React.createContext([languages[0].lang, () => {}]);