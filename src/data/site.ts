export const site = {
  name: 'Gennisis Meirelis Advogados',
  lawyer: 'Dr. Gennisis Meirelis',
  oab: 'OAB/PR 119.281',
  phone: '5541997023919',
  phoneDisplay: '(41) 99702-3919',
  email: 'gennisismeirelisadvogados@gmail.com',
  instagram: 'https://instagram.com/meirelis_',
  address: {
    street: 'Av. Betonex, 286 — Sala 03',
    district: 'Guarituba',
    city: 'Piraquara',
    state: 'PR',
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Av.+Betonex,+286,+Guarituba,+Piraquara+PR',
  // Google Ads: o ID já está no site atual; o rótulo de conversão vem do painel do Google Ads
  // (Metas > Conversões > "Contato WhatsApp" > Configuração da tag).
  adsId: 'AW-17015871471',
  adsConversionLabel: '',
  rating: { value: '5,0', count: 6 },
};

export const wa = (text: string) =>
  `https://wa.me/${site.phone}?text=${encodeURIComponent(text)}`;

export const tel = `tel:+${site.phone}`;

export const msgGeral = 'Olá, Dr. Gennisis. Preciso de ajuda urgente.';

export const cidades = ['Piraquara', 'Curitiba', 'São José dos Pinhais', 'Pinhais', 'Colombo', 'Fazenda Rio Grande', 'Araucária', 'Quatro Barras'];

// Dados de escritório usados no schema de todas as páginas
export const legalServiceSchema = (knowsAbout: string[]) => ({
  '@context': 'https://schema.org',
  '@type': ['LegalService', 'Attorney'],
  '@id': 'https://www.meirelisadv.com.br/#escritorio',
  name: site.name,
  url: 'https://www.meirelisadv.com.br/',
  telephone: '+' + site.phone,
  email: site.email,
  image: 'https://www.meirelisadv.com.br/og.jpg',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    addressCountry: 'BR',
  },
  areaServed: [...cidades, 'Região Metropolitana de Curitiba'],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  knowsAbout,
  sameAs: [site.instagram],
});

export const faqSchema = (faq: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});
