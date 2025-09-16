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

interface GlobalTranslatorInstance {
  init(): Promise<void>;
  setLanguage(lang: string): void;
  translateAll(): void;
  saveLanguage(lang: string): void;
  loadSavedLanguage(): void;
  dispatchLanguageChangeEvent(lang: string): void;
  getCurrentLanguage(): string;
}

interface LanguageChangeDetail {
  newLanguage: string;
  oldLanguage: string;
}

declare global {
  interface Window {
    LanguageSwitcher?: new (config?: LanguageSwitcherConfig) => LanguageSwitcherInstance;
    headerLangSwitcher?: LanguageSwitcherInstance;
    globalTranslator?: GlobalTranslatorInstance;
  }

  interface DocumentEventMap {
    'languageChanged': CustomEvent<LanguageChangeDetail>;
  }
}

export {};