// src/data/mapLocations.js

export const mapLocations = {
  'cataratas-brasil-+-parque-da-aves': [
    {
      name: 'Cataratas do Iguaçu - Lado Brasil',
      lat: -25.61357986306162,
      lng: -54.47784108604584,
      type: 'attraction',
      description: 'Parque Nacional do Iguaçu - Lado Brasileiro'
    },
    {
      name: 'Parque das Aves',
      lat: -25.61371482632476,
      lng: -54.481204625231875,
      type: 'attraction',
      description: 'Maior parque de aves da América Latina'
    },
    {
      name: 'Macuco Safari',
      lat: -25.65029554523917,
      lng: -54.43412007543563,
      type: 'adventure',
      description: 'Passeio de barco nas Cataratas'
    },
    {
      name: 'Restaurante Porto Canoas',
      lat:  -25.69239077603995, 
      lng:  -54.43287678938324,
      type: 'attraction',
      description: 'Almoce com uma vista incrível para o Rio Iguaçu'
    }

  ],

  'cataratas-argentina': [
    {
      name: 'Parque Nacional Iguazú - Argentina',
      lat: -25.694965130552884,
      lng: -54.43690197381743,
      type: 'attraction',
      description: 'Lado argentino das Cataratas do Iguaçu'
    }
  ],

  'macuco-safari': [
    {
      name: 'Macuco Safari',
      lat: -25.65029554523917,
      lng: -54.43412007543563,
      type: 'adventure',
      description: 'Passeio de barco nas Cataratas'
    }
  ],

  'compras-cultura': [
    {
      name: 'Ciudad del Este - Zona Comercial',
      lat: -25.498031910908242,
      lng: -54.66240338635118,
      type: 'shopping',
      description: '3ª maior zona franca do mundo'
    }
  ],
  'cassino-argentina': [
      {
      name: 'Casino Iguazú',
      lat: -25.60168760588072,
      lng: -54.55344643101972,
      type: 'city',
      description: 'Um dos maiores da américa Latina'
    },
  ],

  'cataratas-argentina-+-city-tour-argentina': [
    {
      name: 'Marco das Três Fronteiras - Argentina',
      lat: -25.594635793702096, 
      lng: -54.58979205970208,
      type: 'landmark',
      description: 'Ponto turístico icônico'
    },
     {
      name: 'Duty Free',
      lat: -25.59916959918272, 
      lng: -54.563552865772785,
      type: 'city',
      description: '$$$$$$$$$$$'
    },
    {
      name: 'Centro de Puerto Iguazú',
      lat: -25.5974,
      lng: -54.5781,
      type: 'city',
      description: 'Centro comercial e turístico'
    },
    {
      name: 'Feirinha Gastronômica',
      lat: -25.59381939644155, 
      lng: -54.57379591770972,
      type: 'city',
      description: 'Compra de alfajor, vinhos argentinos, doce de leite'
    },
    {
      name: 'La Aripuca',
      lat: -25.618746021591235, 
      lng: -54.55838710362609,
      type: 'attraction',
      description: 'Um local que un e consciência ambiental e cultura local'
    },
  ],

  'kattamaramII': [
    {
      name: 'Porto Kattamaram',
      lat: -25.431980288767267,
      lng: -54.54530055605823,
      type: 'port',
      description: 'Embarque do passeio de catamarã'
    }
  ],

  'city-tour-paraguai': [
    {
      name: 'Saltos del Monday',
      lat: -25.5191,
      lng: -54.6392,
      type: 'waterfall',
      description: 'Cataratas do Paraguai'
    },
    {
      name: 'Igreja San Blas',
      lat: -25.5095,
      lng: -54.6116,
      type: 'church',
      description: 'Catedral de Ciudad del Este'
    },
    {
      name: 'Lago de La República',
      lat: -25.5123,
      lng: -54.6089,
      type: 'park',
      description: 'Parque urbano com lago'
    },
    {
      name: 'Centro Comercial',
      lat: -25.5095,
      lng: -54.6116,
      type: 'city',
      description: 'Área comercial da cidade'
    }
  ],

  'city-tour-foz': [
    {
      name: 'Usina Hidrelétrica de Itaipu',
      lat: -25.4372,
      lng: -54.5887,
      type: 'attraction',
      description: 'Segunda maior usina hidrelétrica do mundo'
    },
    {
      name: 'Refúgio Biológico Bela Vista',
      lat: -25.4203,
      lng: -54.6089,
      type: 'park',
      description: 'Refúgio de animais de Itaipu'
    },
    {
      name: 'Marco das Três Fronteiras - Brasil',
      lat: -25.5863,
      lng: -54.5883,
      type: 'landmark',
      description: 'Vista para Argentina e Paraguai'
    },
    {
      name: 'Mesquita Omar Ibn Al-Khattab',
      lat: -25.5234,
      lng: -54.5620,
      type: 'landmark',
      description: 'Segunda maior mesquita da América Latina'
    },
    {
      name: 'Templo Budista Chen Tien',
      lat: -25.4756,
      lng: -54.5234,
      type: 'landmark',
      description: 'Templo budista com arquitetura chinesa'
    }
  ]
};

export const markerTypes = {
  attraction: {
    label: 'Atração',
    color: '#22c55e',
    icon: '🎯'
  },
  highlight: {
    label: 'Destaque',
    color: '#ef4444',
    icon: '⭐'
  },
  landmark: {
    label: 'Marco',
    color: '#3b82f6',
    icon: '📍'
  },
  adventure: {
    label: 'Aventura',
    color: '#f59e0b',
    icon: '🚤'
  },
  shopping: {
    label: 'Compras',
    color: '#8b5cf6',
    icon: '🛍️'
  },
  entertainment: {
    label: 'Entretenimento',
    color: '#ec4899',
    icon: '🎰'
  },
  port: {
    label: 'Porto',
    color: '#06b6d4',
    icon: '⚓'
  },
  waterfall: {
    label: 'Cachoeira',
    color: '#14b8a6',
    icon: '💧'
  },
  church: {
    label: 'Igreja',
    color: '#6366f1',
    icon: '⛪'
  },
  park: {
    label: 'Parque',
    color: '#84cc16',
    icon: '🌳'
  },
  city: {
    label: 'Centro',
    color: '#64748b',
    icon: '🏛️'
  }
};

export const getLocationsBySlug = (slug) => {
  return mapLocations[slug] || [];
};

export const getAllLocations = () => {
  return Object.values(mapLocations).flat();
};

export const getMapCenter = (slug) => {
  const locations = getLocationsBySlug(slug);
  
  if (locations.length === 0) {
    return { lat: -25.5469, lng: -54.5882 }; 
  }
  
  const avgLat = locations.reduce((sum, point) => sum + point.lat, 0) / locations.length;
  const avgLng = locations.reduce((sum, point) => sum + point.lng, 0) / locations.length;
  
  return { lat: avgLat, lng: avgLng };
};