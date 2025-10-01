// src/i18n/translations.ts

export const translations = {
  pt: {
    packages: {
      title: 'Título',
      description: 'Descrição',
      location: 'Localização',
      fullDescription: 'Descrição Completa',
      included: 'Incluído',
      duration: 'Duração',
      price: 'Preço',
      bookNow: 'Reserve Agora',
      backToPackages: 'Voltar aos Pacotes',
      dayFull: 'Dia inteiro',
      halfDay: 'Meio dia',
      underConsultation: 'Sob consulta',
    }
  },
  en: {
    packages: {
      title: 'Title',
      description: 'Description',
      location: 'Location',
      fullDescription: 'Full Description',
      included: 'Included',
      duration: 'Duration',
      price: 'Price',
      bookNow: 'Book Now',
      backToPackages: 'Back to Packages',
      dayFull: 'Full day',
      halfDay: 'Half day',
      underConsultation: 'Under consultation',
    }
  },
  es: {
    packages: {
      title: 'Título',
      description: 'Descripción',
      location: 'Ubicación',
      fullDescription: 'Descripción Completa',
      included: 'Incluido',
      duration: 'Duración',
      price: 'Precio',
      bookNow: 'Reservar Ahora',
      backToPackages: 'Volver a Paquetes',
      dayFull: 'Día completo',
      halfDay: 'Medio día',
      underConsultation: 'Bajo consulta',
    }
  }
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.pt.packages;

export function t(lang: Language, key: string) {
  const keys = key.split('.');
  let value: any = translations[lang];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}