// packages.js

import CataratasImg from '../assets/image/Cards/Brasil/Cataratas.jpg';
import ParqueImg from '../assets/image/Cards/Brasil/Parque das Aves.jpg';
import MacucoImg from '../assets/image/Cards/Brasil/Macuco.webp';
import ComprasImg from '../assets/image/Cards/Paraguai/Compras.jpg';
import CataratasArgImg from '../assets/image/Cards/Argentina/CataratasArg.webp';
import CityTourArgImg from '../assets/image/Cards/Argentina/CityTourArg.webp';
import KatamaramImg from '../assets/image/Cards/Brasil/Katamaram 2.webp';
import SaltosDelMondayImg from '../assets/image/Cards/Paraguai/SaltosDelMonday.webp';
import CityTourFozImg from '../assets/image/Cards/Brasil/Marco das Três Fonteiras.webp';

export const packages = [
  {
    slug: 'joias-naturais',
    title: 'Joias Naturais',
    description: 'Cataratas do Iguaçu e Parque das Aves. A Força da Natureza...',
    location: 'Foz do Iguaçu - Brasil',
    tag: 'foz_brasil',
    tagColor: 'green',
    image: ParqueImg,
    fullDescription: 'Mergulhe na exuberância natural de Foz do Iguaçu com um tour completo pelas Cataratas do Iguaçu e pelo Parque das Aves. Contemple a força impressionante das quedas d\'água e conheça centenas de espécies de aves em seu habitat natural.',
    included: [
      'Transporte de ida e volta',
      'Ingresso para as Cataratas do Iguaçu',
      'Ingresso para o Parque das Aves',
      'Guia turístico bilíngue',
      'Seguro de viagem'
    ],
    duration: 'Dia inteiro',
    price: 'Sob consulta',
    hasMap: true,
  },
  {
    slug: 'cataratas-argentina',
    title: 'Cataratas Argentina',
    description: 'Marcos das três fronteiras, jantar, vinhoteca, cassino e muito mais...',
    location: 'Puerto Iguazú - Argentina',
    tag: 'puerto_argentina',
    tagColor: 'blue',
    image: CataratasArgImg,
    fullDescription: 'Explore o lado argentino das Cataratas do Iguaçu com acesso exclusivo à Garganta do Diabo. Uma experiência completa que inclui passeios culturais, gastronomia e entretenimento em Puerto Iguazú.',
    included: [
      'Transporte internacional',
      'Ingresso para o Parque Nacional Iguazú',
      'Passeio pela Garganta do Diabo',
      'Marco das Três Fronteiras',
      'Opções de jantar e entretenimento',
      'Guia especializado'
    ],
    duration: 'Dia inteiro',
    price: 'Sob consulta',
    hasMap: true,
  },
  {
    slug: 'aventura-emocao',
    title: 'Aventura e Emoção',
    description: 'Para os amantes da aventura. Que tal um passeio de barco nas Cataratas?',
    location: 'Foz do Iguaçu - Brasil',
    tag: 'foz_brasil',
    tagColor: 'green',
    image: MacucoImg,
    fullDescription: 'Para quem busca adrenalina! Embarque no Macuco Safari, uma experiência inesquecível de barco que leva você até bem perto das quedas d\'água. Prepare-se para se molhar e viver emoções intensas!',
    included: [
      'Transporte até o parque',
      'Passeio de barco Macuco Safari',
      'Equipamentos de segurança',
      'Capa de chuva',
      'Guia especializado',
      'Seguro de aventura'
    ],
    duration: 'Meio dia',
    price: 'Sob consulta',
    hasMap: true,
  },
  {
    slug: 'compras-cultura',
    title: 'Compras e Cultura',
    description: 'Explore e compre em Ciudad del Este. Sem preocupações...',
    location: 'Ciudad del Este - Paraguai',
    tag: 'ciudad_paraguai',
    tagColor: 'red',
    image: ComprasImg,
    fullDescription: 'Descubra as melhores ofertas de Ciudad del Este com segurança e tranquilidade. Nosso tour de compras oferece transporte seguro, orientação sobre os melhores locais e auxílio com a documentação necessária.',
    included: [
      'Transporte internacional seguro',
      'Guia especializado em compras',
      'Orientação sobre documentação',
      'Tempo livre para compras',
      'Visita aos principais centros comerciais',
      'Seguro de viagem'
    ],
    duration: 'Meio dia ou dia inteiro',
    price: 'Sob consulta',
    hasMap: true,
  },
  {
    slug: 'city-tour-argentina',
    title: 'City Tour Argentina',
    description: 'Marcos das três fronteiras, jantar, vinhoteca, cassino e muito mais...',
    location: 'Puerto Iguazú - Argentina',
    tag: 'puerto_argentina',
    tagColor: 'blue',
    image: CityTourArgImg,
    fullDescription: 'Conheça os principais pontos turísticos de Puerto Iguazú em um city tour completo. Visite o Marco das Três Fronteiras, aprecie vinhos argentinos, experimente a gastronomia local e divirta-se nos cassinos.',
    included: [
      'Transporte durante todo o passeio',
      'Visita ao Marco das Três Fronteiras',
      'Tour por vinícolas (degustação inclusa)',
      'Paradas em pontos turísticos',
      'Tempo livre para cassino e compras',
      'Guia turístico'
    ],
    duration: 'Dia inteiro',
    price: 'Sob consulta',
    hasMap: true,
  },
  {
    slug: 'cruzeiro-por-do-sol',
    title: 'Cruzeiro ao Pôr do Sol',
    description: 'Katamarã: Foz do Iguaçu Sob um Novo Olhar...',
    location: 'Foz do Iguaçu - Brasil',
    tag: 'foz_brasil',
    tagColor: 'green',
    image: KatamaramImg,
    fullDescription: 'Navegue pelas águas do Rio Iguaçu e contemple um pôr do sol espetacular a bordo de um confortável catamarã. Uma experiência romântica e relaxante que oferece vistas únicas da região das três fronteiras.',
    included: [
      'Transporte até o porto',
      'Passeio de catamarã',
      'Welcome drink',
      'Música ao vivo',
      'Vista do pôr do sol',
      'Guia a bordo'
    ],
    duration: '2-3 horas',
    price: 'Sob consulta',
    hasMap: true,
  },
  {
    slug: 'city-tour-paraguai',
    title: 'City Tour Paraguai',
    description: 'Lago de La República, Igreja San Lucas, Saltos Monday e muito mais...',
    location: 'Ciudad del Este - Paraguai',
    tag: 'ciudad_paraguai',
    tagColor: 'red',
    image: SaltosDelMondayImg,
    fullDescription: 'Descubra os encantos de Ciudad del Este além das compras! Visite os Saltos del Monday, conheça a bela Igreja San Lucas, relaxe no Lago de La República e explore a cultura paraguaia.',
    included: [
      'Transporte internacional',
      'Ingresso para os Saltos del Monday',
      'Visita à Igreja San Lucas',
      'Parada no Lago de La República',
      'Tour cultural pela cidade',
      'Guia bilíngue'
    ],
    duration: 'Dia inteiro',
    price: 'Sob consulta',
    hasMap: true,
  },
  {
    slug: 'city-tour-foz',
    title: 'City Tour Foz do Iguaçu',
    description: 'Transfer, Wonder Park, Itaipu, Marco das três fronteiras e muito mais...',
    location: 'Foz do Iguaçu - Brasil',
    tag: 'foz_brasil',
    tagColor: 'green',
    image: CityTourFozImg,
    fullDescription: 'Conheça os principais atrativos de Foz do Iguaçu em um tour completo pela cidade. Visite a gigantesca Usina de Itaipu, o Wonder Park, o icônico Marco das Três Fronteiras e outros pontos turísticos imperdíveis.',
    included: [
      'Transporte com ar-condicionado',
      'Visita à Usina de Itaipu',
      'Entrada no Wonder Park',
      'Marco das Três Fronteiras',
      'Paradas fotográficas',
      'Guia especializado'
    ],
    duration: 'Dia inteiro',
    price: 'Sob consulta',
    hasMap: true,
  },
];