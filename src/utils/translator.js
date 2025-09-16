import translations from '../translations.js';

class GlobalTranslator {
    constructor() {
        this.currentLanguage = 'pt';
        this.translations = translations;
    }

    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLanguage = lang;
            this.translateAll();
            this.saveLanguage(lang);
            this.dispatchLanguageChangeEvent(lang);
        }
    }

    translateAll() {
        console.log('�� Traduzindo tudo para:', this.currentLanguage);
        
        const elements = document.querySelectorAll('[data-translate]');
        console.log('📝 Total de elementos encontrados:', elements.length);
        
        elements.forEach((element, index) => {
            const key = element.getAttribute('data-translate');
            
            if (key) {
                const translation = this.translations[this.currentLanguage]?.[key];
                
                console.log(`[${index}] ${key}: ${translation}`);
                
                if (translation) {
                    if (key.startsWith('header.')) {
                        element.textContent = translation;
                    } else {
                        element.innerHTML = translation;
                    }
                }
            }
        });
    }

    saveLanguage(lang) {
        localStorage.setItem('preferred-language', lang);
    }

    loadSavedLanguage() {
        const saved = localStorage.getItem('preferred-language');
        if (saved && this.translations[saved]) {
            this.currentLanguage = saved;
        }
    }

    dispatchLanguageChangeEvent(lang) {
        const event = new CustomEvent('languageChanged', {
            detail: { newLanguage: lang }
        });
        document.dispatchEvent(event);
    }

    getCurrentLanguage() {
        return this.currentLanguage;
    }
}

const globalTranslator = new GlobalTranslator();
window.globalTranslator = globalTranslator;



export default globalTranslator;