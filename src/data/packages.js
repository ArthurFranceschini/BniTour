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
import CassinoArg from '../assets/image/Cards/Argentina/CassinoArg.webp';

export const packages = [
  {
    slug: 'cataratas-brasil-+-parque-da-aves',
    title: 'Cataratas Brasil + Parque das Aves',
    description: 'Cataratas do Iguaçu e Parque das Aves. A Força da Natureza...',
    location: 'Foz do Iguaçu - Brasil',
    tag: 'foz_brasil',
    tagColor: 'green',
    image: ParqueImg,
    fullDescription: 'Viva um dia completo em Foz do Iguaçu: encante-se com o Parque das Aves, explore as impressionantes Cataratas, almoce às margens do Rio Iguaçu e finalize com a emoção do Macuco Safari.',
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
    fullDescription: 'Explore as Cataratas Argentinas em um passeio exclusivo onde voce vai poder conhecer as tres trilhas das Cataratas. Circuito superior, circuito inferior e Garganta do Diabo.',
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
    slug: 'cassino-argentina',
    title: 'Cassino Argentina',
    description: 'Um dos mais prestigiados da América Latina',
    location: 'Puerto Iguazú - Argentina',
    tag: 'puerto_argentina',
    tagColor: 'blue',
    image: CassinoArg,
    fullDescription: 'Anexo ao Hotel Iguazu, o Casino Iguazú é um dos mais prestigiados da América Latina. Oferece jogos, bar completo e prêmios na moeda de sua escolha. Diversão e luxo em um só lugar!',
    included: [
      'Transporte ida e volta',
    ],
    duration: 'Lorem ipsum',
    price: 'Lorem ipsum',
    hasMap: true,
  },
  {
    slug: 'macuco-safari',
    title: 'Macuco Safari',
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
      'Guia especializado',
      'Acesso exclusivo ao parque nacional',
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
    slug: 'cataratas-argentina-+-city-tour-argentina',
    title: ' Cataratas Argentina + City Tour Argentina',
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
    slug: 'kattamaramII',
    title: 'Kattamaram II',
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
    description: 'Transfer, Itaipu, Marco das três fronteiras e muito mais...',
    location: 'Foz do Iguaçu - Brasil',
    tag: 'foz_brasil',
    tagColor: 'green',
    image: CityTourFozImg,
    fullDescription: 'Conheça os principais atrativos de Foz do Iguaçu em um tour completo pela cidade. Visite a gigantesca Usina de Itaipu, o icônico Marco das Três Fronteiras e outros pontos turísticos imperdíveis.',
    included: [
      'Transporte com ar-condicionado',
      'Visita à Usina de Itaipu',
      'Marco das Três Fronteiras',
      'Paradas fotográficas',
      'Guia especializado'
    ],
    duration: 'Dia inteiro',
    price: 'Sob consulta',
    hasMap: true,
  },
];