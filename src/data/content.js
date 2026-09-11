/**
 * Monica Almeida Arquitetura & Light Design
 * Dados centralizados para fácil edição e manutenção.
 */

export const siteConfig = {
  brandName: "Monica Almeida",
  brandSubtitle: "Arquitetura & Light Design",
  fullName: "Monica Almeida Arquitetura",
  professionalName: "Monica Almeida",
  role: "Arquiteta e Light Designer",
  location: "Belém, Pará",
  locationShort: "Belém, PA",
  experience: "Mais de 15 anos de experiência",
  tagline: "Crio espaços com alma, luz e afeto.",
  
  // Contatos
  phoneDisplay: "+55 21 95960-0633",
  whatsappNumber: "5521959600633",
  whatsappMessage: "Olá, Monica! Conheci seu trabalho pelo site e gostaria de conversar sobre um projeto.",
  whatsappUrl: "https://wa.me/5521959600633?text=Ol%C3%A1%2C%20Monica%21%20Conheci%20seu%20trabalho%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto",
  
  instagramHandle: "@monicaalmeidaarquitetura",
  instagramUrl: "https://www.instagram.com/monicaalmeidaarquitetura/",

  currentYear: new Date().getFullYear(),
};

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Conceito", href: "#conceito" },
  { label: "Atendimento", href: "#atendimento" },
  { label: "Contato", href: "#contato" },
];

export const heroContent = {
  title: "Espaços com alma, luz e afeto.",
  subtitle: "Projetos de arquitetura, interiores e iluminação pensados para cada espaço e para quem irá vivê-lo.",
  primaryCtaText: "Conversar pelo WhatsApp",
  secondaryCtaText: "Ver projetos",
  bgImage: "/images/hero-architecture.jpg",
};

export const aboutContent = {
  tagline: "Sobre",
  title: "Arquitetura que traduz histórias",
  paragraphs: [
    "Sou arquiteta e light designer com mais de 15 anos de experiência, dedicada a unir luz, estética e funcionalidade em cada projeto.",
    "Após quatro anos no Rio de Janeiro ampliando minha visão criativa, estou de volta a Belém, minha cidade natal, com um olhar atento e sensível aos detalhes.",
    "Desenvolvo ambientes acolhedores e autênticos, criados para expressar identidade e fazer sentido para quem os vive."
  ],
  signatureName: "Monica Almeida",
  signatureRole: "Arquiteta e Light Designer",
  architecturalDetailImage: "/images/about-detail.jpg",
  architecturalDetailAlt: "Composição arquitetônica com marcenaria ripada, iluminação linear e pedra natural",
};

export const servicesContent = {
  tagline: "Serviços",
  title: "Soluções para arquitetura, interiores e iluminação",
  items: [
    {
      id: "arquitetura",
      title: "Arquitetura",
      description: "Projetos que unem estética, funcionalidade e identidade para criar espaços coerentes com cada necessidade.",
      image: "/images/service-architecture.jpg",
    },
    {
      id: "interiores",
      title: "Design de interiores",
      description: "Composições que valorizam materiais, mobiliário, texturas e detalhes, transformando ambientes em experiências acolhedoras.",
      image: "/images/service-interiors.jpg",
    },
    {
      id: "light-design",
      title: "Light design",
      description: "Planejamento da iluminação como parte essencial da arquitetura, valorizando formas, atmosferas e sensações.",
      image: "/images/service-lighting.jpg",
    }
  ],
  ctaHeading: "Tem um projeto em mente?",
  ctaButtonText: "Conversar no WhatsApp",
};

export const portfolioCategories = [
  { id: "todos", label: "Todos" },
  { id: "residencial", label: "Residencial" },
  { id: "apartamentos", label: "Apartamentos" },
  { id: "comercial", label: "Comercial" },
  { id: "escritorios", label: "Escritórios" },
  { id: "iluminacao", label: "Iluminação" },
];

export const portfolioContent = {
  tagline: "Portfólio",
  title: "Possibilidades para cada espaço",
  subtitle: "Projetos autorais pensados com equilíbrio entre iluminação, marcenaria e materialidade.",
};

export const portfolioProjects = [
  {
    id: 1,
    title: "Living com marcenaria e luz indireta",
    category: "residencial",
    categoryLabel: "Residencial • Iluminação",
    description: "Ambiente de estar integrado com painel ripado em carvalho escuro, iluminação linear superior e lareira embutida.",
    image: "/images/project-living.jpg",
    alt: "Estar contemporâneo com painéis de madeira ripada e iluminação indireta",
    featured: true,
  },
  {
    id: 2,
    title: "Cozinha e ilha em quartzito",
    category: "apartamentos",
    categoryLabel: "Apartamentos • Interiores",
    description: "Ilha monolítica em quartzito natural com marcenaria minimalista e iluminação de bancada integrada.",
    image: "/images/project-kitchen.jpg",
    alt: "Cozinha contemporânea com bancada em pedra natural e iluminação acolhedora",
    featured: false,
  },
  {
    id: 3,
    title: "Suíte master com cabeceira ripada",
    category: "residencial",
    categoryLabel: "Residencial • Interiores",
    description: "Painel acústico em madeira clara com sanca de luz suave, cabeceira estofada em linho e paleta serena.",
    image: "/images/project-bedroom.jpg",
    alt: "Quarto de casal com cabeceira estofada, painel ripado e luz quente",
    featured: false,
  },
  {
    id: 4,
    title: "Home office executivo e biblioteca",
    category: "escritorios",
    categoryLabel: "Escritórios • Marcenaria",
    description: "Estante sob medida em nogueira com nichos iluminados, mesa executiva e piso em espinha de peixe.",
    image: "/images/project-office.jpg",
    alt: "Escritório residencial elegante com estante de madeira iluminada",
    featured: false,
  },
  {
    id: 5,
    title: "Lounge e showroom contemporâneo",
    category: "comercial",
    categoryLabel: "Comercial • Showrooms",
    description: "Espaço comercial refinado com curvas suaves em travertino, colunas ripadas e iluminação cênica de destaque.",
    image: "/images/project-commercial.jpg",
    alt: "Showroom comercial contemporâneo com balcão de pedra e iluminação sutil",
    featured: true,
  },
  {
    id: 6,
    title: "Planejamento luminotécnico integrado",
    category: "iluminacao",
    categoryLabel: "Iluminação • Arquitetura",
    description: "Composição de iluminação com destaque para parede de pedra natural, pendentes minimalistas e luz de piso.",
    image: "/images/service-lighting.jpg",
    alt: "Projeto de light design com luz cênica em parede de pedra rústica",
    featured: false,
  },
  {
    id: 7,
    title: "Composição e marcenaria de detalhe",
    category: "apartamentos",
    categoryLabel: "Apartamentos • Marcenaria",
    description: "Encontro refinado de materiais nobres com painéis ripados, nichos embutidos e iluminação linear oculta.",
    image: "/images/about-detail.jpg",
    alt: "Detalhes de marcenaria e acabamentos nobres com iluminação sutil",
    featured: false,
  },
  {
    id: 8,
    title: "Arquitetura e volumetria contemporânea",
    category: "residencial",
    categoryLabel: "Residencial • Arquitetura",
    description: "Concepção volumétrica com amplas aberturas, integração com a paisagem e aproveitamento pleno da luz natural.",
    image: "/images/service-architecture.jpg",
    alt: "Fachada arquitetônica moderna com grandes planos de vidro e iluminação suave",
    featured: false,
  },
  {
    id: 9,
    title: "Design de interiores e texturas naturais",
    category: "apartamentos",
    categoryLabel: "Apartamentos • Interiores",
    description: "Harmonia entre pedras nobres, tecidos naturais e marcenaria artesanal para uma atmosfera acolhedora e atemporal.",
    image: "/images/service-interiors.jpg",
    alt: "Ambiente de estar refinado com paleta neutra e texturas nobres",
    featured: false,
  }
];

export const conceptContent = {
  quote: "Cada espaço pode acolher, inspirar e contar uma história.",
  description: "A arquitetura nasce da escuta. Cada escolha, da distribuição dos ambientes à iluminação, é pensada para unir personalidade, conforto e funcionalidade.",
  ctaText: "Conversar sobre seu projeto",
  bgImage: "/images/project-living.jpg",
};

export const processContent = {
  tagline: "Atendimento",
  title: "Do primeiro contato ao projeto",
  steps: [
    {
      number: "01",
      title: "Primeiro contato",
      description: "Você compartilha suas ideias, necessidades e o tipo de ambiente que deseja transformar.",
    },
    {
      number: "02",
      title: "Entendimento do projeto",
      description: "As informações iniciais ajudam a compreender objetivos, estilo e possibilidades.",
    },
    {
      number: "03",
      title: "Próximos passos",
      description: "Após a conversa, são alinhadas as condições adequadas para o desenvolvimento do projeto.",
    }
  ],
  disclaimer: "As etapas e condições podem variar de acordo com cada projeto.",
};

export const finalCtaContent = {
  tagline: "",
  title: "Vamos conversar sobre seu projeto?",
  description: "Entre em contato para conversar sobre suas ideias e descobrir possibilidades para o seu espaço.",
  buttonText: "Falar com Monica no WhatsApp",
};
