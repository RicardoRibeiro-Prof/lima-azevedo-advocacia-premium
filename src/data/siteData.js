import {
  Building2,
  BriefcaseBusiness,
  HeartHandshake,
  Landmark,
  Scale,
  ShieldCheck,
} from 'lucide-react'

export const contactInfo = {
  phone: '(89) 99999-0000',
  whatsapp: '5589999990000',
  email: 'contato@limaeazevedo.adv.br',
  address: 'Av. Professor João Menezes, 320, Centro, São Raimundo Nonato–PI',
  hours: 'Segunda a sexta, das 8h às 18h',
  mapUrl: 'https://www.google.com/maps?q=S%C3%A3o%20Raimundo%20Nonato%20PI&output=embed',
}

export const practiceAreas = [
  {
    slug: 'direito-civil',
    title: 'Direito Civil',
    eyebrow: 'Relações privadas',
    description: 'Orientação em contratos, obrigações, responsabilidade civil, cobranças e questões patrimoniais.',
    icon: Scale,
    items: ['Contratos e obrigações', 'Cobranças e negociações', 'Responsabilidade civil', 'Posse e propriedade'],
  },
  {
    slug: 'direito-de-familia',
    title: 'Direito de Família',
    eyebrow: 'Cuidado e acolhimento',
    description: 'Atendimento sensível em divórcio, guarda, alimentos, inventário, união estável e partilha.',
    icon: HeartHandshake,
    items: ['Divórcio e dissolução', 'Guarda e convivência', 'Pensão alimentícia', 'Inventário e partilha'],
  },
  {
    slug: 'direito-previdenciario',
    title: 'Direito Previdenciário',
    eyebrow: 'Proteção social',
    description: 'Análise documental e orientação sobre benefícios previdenciários e assistenciais.',
    icon: Landmark,
    items: ['Aposentadorias', 'Benefícios por incapacidade', 'Pensão por morte', 'Benefício assistencial'],
  },
  {
    slug: 'direito-trabalhista',
    title: 'Direito Trabalhista',
    eyebrow: 'Relações de trabalho',
    description: 'Assessoria para trabalhadores e empresas com foco em prevenção, equilíbrio e segurança jurídica.',
    icon: BriefcaseBusiness,
    items: ['Contratos de trabalho', 'Rescisões e verbas', 'Orientação preventiva', 'Direitos e deveres'],
  },
  {
    slug: 'direito-empresarial',
    title: 'Direito Empresarial',
    eyebrow: 'Decisões seguras',
    description: 'Apoio jurídico para negócios, contratos, cobranças, organização documental e prevenção de riscos.',
    icon: Building2,
    items: ['Contratos empresariais', 'Relações comerciais', 'Cobranças', 'Análise de riscos'],
  },
  {
    slug: 'direito-do-consumidor',
    title: 'Direito do Consumidor',
    eyebrow: 'Equilíbrio nas relações',
    description: 'Orientação em cobranças indevidas, produtos, serviços, negativação e relações bancárias.',
    icon: ShieldCheck,
    items: ['Cobranças indevidas', 'Produtos e serviços', 'Negativação', 'Relações bancárias'],
  },
]

export const lawyers = [
  {
    name: 'Dra. Helena Lima',
    oab: 'OAB/PI 00.000',
    role: 'Advogada sócia',
    bio: 'Atuação orientada pela escuta, pela análise cuidadosa dos fatos e pela comunicação clara em cada etapa do atendimento.',
    areas: ['Direito Civil', 'Direito de Família', 'Direito do Consumidor'],
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'Dr. Caio Azevedo',
    oab: 'OAB/PI 00.000',
    role: 'Advogado sócio',
    bio: 'Assessoria jurídica responsável para pessoas e empresas, com foco em prevenção, estratégia e segurança nas decisões.',
    areas: ['Direito Empresarial', 'Direito Trabalhista', 'Direito Previdenciário'],
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=85',
  },
]

export const faqs = [
  {
    question: 'Como funciona o primeiro atendimento?',
    answer: 'O primeiro contato serve para compreender a situação, identificar os documentos iniciais e explicar como o atendimento poderá prosseguir. Cada caso é analisado individualmente.',
  },
  {
    question: 'O escritório realiza atendimento on-line?',
    answer: 'Sim. O atendimento pode ser presencial em São Raimundo Nonato ou realizado on-line, conforme a necessidade e a viabilidade do caso.',
  },
  {
    question: 'Quais documentos devo apresentar?',
    answer: 'Os documentos variam conforme a situação. Em geral, é útil ter documentos pessoais, contratos, comprovantes, mensagens, decisões ou outros registros relacionados ao assunto.',
  },
  {
    question: 'O envio de uma mensagem representa contratação?',
    answer: 'Não. O envio da mensagem inicia apenas um contato. A contratação depende da análise do caso, da definição do escopo e da formalização adequada.',
  },
  {
    question: 'Como são informados os honorários?',
    answer: 'Os honorários são apresentados após a compreensão da demanda, considerando a natureza, a complexidade e o trabalho necessário, sempre com transparência.',
  },
]
