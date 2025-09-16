interface LanguageSwitcherConfig {
  defaultLanguage?: string;
  storageKey?: string;
  onLanguageChange?: (newLang: string, oldLang: string) => void;
}

interface LanguageSwitcherInstance {
  changeLanguage: (lang: string) => void;
  getCurrentLanguage: () => string;
  getCurrentLanguageInfo: () => any;
  updateContent: () => void;
}

interface LanguageChangeDetail {
  newLanguage: string;
  oldLanguage: string;
}

declare global {
  interface Window {
    LanguageSwitcher?: new (config?: LanguageSwitcherConfig) => LanguageSwitcherInstance;
    headerLangSwitcher?: LanguageSwitcherInstance;
  }

  interface DocumentEventMap {
    'languageChanged': CustomEvent<LanguageChangeDetail>;
  }
}

export {};