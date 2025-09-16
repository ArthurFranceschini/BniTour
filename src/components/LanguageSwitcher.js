const languages = {
    pt: {
        name: 'Português',
        flag: '🇧��',
        code: 'pt-BR'
    },
    en: {
        name: 'English',
        flag: '🇺🇸',
        code: 'en-US'
    },
    es: {
        name: 'Español',
        flag: '🇪🇸',
        code: 'es-ES'
    }
};

const translations = {
    pt: {
        cta: "CTA",
        home: "Início",
        tours: "Passeios",
        about: "Sobre",
        testimonials: "Depoimentos",
        blog: "Blog"
    },
    en: {
        cta: "CTA",
        home: "Home",
        tours: "Tours",
        about: "About",
        testimonials: "Testimonials",
        blog: "Blog"
    },
    es: {
        cta: "CTA",
        home: "Inicio",
        tours: "Tours",
        about: "Acerca de",
        testimonials: "Testimonios",
        blog: "Blog"
    }
};

class LanguageSwitcher {
    constructor(options = {}) {
        this.currentLanguage = options.defaultLanguage || 'pt';
        this.storageKey = options.storageKey || 'preferred-language';
        this.onLanguageChange = options.onLanguageChange || null;
        
        this.init();
    }

    init() {
        this.loadSavedLanguage();
        this.detectBrowserLanguage();
        this.updateContent();
        this.updatePageLanguage();
        this.bindDropdownEvents();
        this.updateDropdownDisplay();
    }

    loadSavedLanguage() {
        const saved = localStorage.getItem(this.storageKey);
        if (saved && languages[saved]) {
            this.currentLanguage = saved;
        }
    }

    detectBrowserLanguage() {
        if (localStorage.getItem(this.storageKey)) return;
        
        const browserLang = navigator.language.toLowerCase();
        const langCode = browserLang.split('-')[0];
        
        if (languages[langCode]) {
            this.currentLanguage = langCode;
        }
    }

    bindDropdownEvents() {
        const dropdownBtn = document.getElementById('language-dropdown-btn');
        const dropdown = document.getElementById('language-dropdown');
        const langOptions = document.querySelectorAll('.lang-option');

        if (dropdownBtn && dropdown) {
            dropdownBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                dropdown.classList.toggle('hidden');
                
                const arrow = dropdownBtn.querySelector('.dropdown-arrow');
                if (arrow) {
                    arrow.style.transform = dropdown.classList.contains('hidden') 
                        ? 'rotate(0deg)' 
                        : 'rotate(180deg)';
                }
            });

            document.addEventListener('click', (e) => {
                if (!dropdownBtn.contains(e.target) && !dropdown.contains(e.target)) {
                    dropdown.classList.add('hidden');
                    const arrow = dropdownBtn.querySelector('.dropdown-arrow');
                    if (arrow) {
                        arrow.style.transform = 'rotate(0deg)';
                    }
                }
            });
        }

        langOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const lang = option.dataset.lang;
                this.changeLanguage(lang);
                dropdown.classList.add('hidden');
                
                const arrow = dropdownBtn.querySelector('.dropdown-arrow');
                if (arrow) {
                    arrow.style.transform = 'rotate(0deg)';
                }
            });
        });
    }

    changeLanguage(langCode) {
        if (!languages[langCode] || langCode === this.currentLanguage) return;

        const oldLang = this.currentLanguage;
        this.currentLanguage = langCode;

        this.saveLanguagePreference();
        this.updateContent();
        this.updatePageLanguage();
        this.updateDropdownDisplay();
        this.updateActiveOption();

        if (this.onLanguageChange) {
            this.onLanguageChange(langCode, oldLang);
        }

        this.dispatchLanguageChangeEvent(langCode, oldLang);
    }

    saveLanguagePreference() {
        localStorage.setItem(this.storageKey, this.currentLanguage);
    }

    updateDropdownDisplay() {
        const currentFlag = document.getElementById('current-flag');
        const currentLang = document.getElementById('current-lang');
        
        if (currentFlag && currentLang) {
            const langInfo = languages[this.currentLanguage];
            currentFlag.textContent = langInfo.flag;
            currentLang.textContent = this.currentLanguage.toUpperCase();
        }
    }

    updateActiveOption() {
        document.querySelectorAll('.lang-option').forEach(option => {
            option.classList.remove('active');
            if (option.dataset.lang === this.currentLanguage) {
                option.classList.add('active');
            }
        });
    }

    updateContent() {
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(element => {
            const key = element.dataset.i18n;
            const translation = this.getTranslation(key);
            
            if (translation) {
                if (element.dataset.i18nAttr) {
                    element.setAttribute(element.dataset.i18nAttr, translation);
                } else {
                    element.textContent = translation;
                }
            }
        });
    }

    updatePageLanguage() {
        document.documentElement.lang = languages[this.currentLanguage].code;
    }

    getTranslation(key) {
        return translations[this.currentLanguage][key] || key;
    }

    dispatchLanguageChangeEvent(newLang, oldLang) {
        const event = new CustomEvent('languageChanged', {
            detail: { newLanguage: newLang, oldLanguage: oldLang }
        });
        document.dispatchEvent(event);
    }

    getCurrentLanguage() {
        return this.currentLanguage;
    }

    getCurrentLanguageInfo() {
        return languages[this.currentLanguage];
    }
}

window.LanguageSwitcher = LanguageSwitcher;

document.addEventListener('DOMContentLoaded', () => {
    if (window.LanguageSwitcher && !window.headerLangSwitcher) {
        window.headerLangSwitcher = new window.LanguageSwitcher({
            defaultLanguage: 'pt',
            storageKey: 'preferred-language',
            onLanguageChange: (newLang, oldLang) => {
                console.log(`Idioma alterado: ${oldLang} → ${newLang}`);
            }
        });
    }
});