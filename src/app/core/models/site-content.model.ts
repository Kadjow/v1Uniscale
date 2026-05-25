export interface SiteContent {
  header: HeaderContent;
  hero: HeroContent;
  operationProblems: SectionWithCards;
  strategicSolutions: SectionWithCards;
  implementationMethod: MethodSectionContent;
  businessDifferentials: SectionWithCards;
  businessProof: BusinessProofContent;
  contact: ContactContent;
  footer: FooterContent;
}

export interface HeaderContent {
  logoAlt: string;
  navigation: NavigationLink[];
  menuOpenLabel: string;
  menuCloseLabel: string;
}

export interface NavigationLink {
  label: string;
  href: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: ActionLink;
  secondaryAction: ActionLink;
}

export interface ActionLink {
  label: string;
  href: string;
}

export interface SectionWithCards {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  cards: TextCardContent[];
}

export interface TextCardContent {
  title: string;
  description: string;
}

export interface MethodSectionContent {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  steps: MethodStepContent[];
}

export interface MethodStepContent {
  marker: string;
  title: string;
  description: string;
}

export interface BusinessProofContent {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  highlights: TextCardContent[];
  testimonials: ImageContent[];
  partnersLabel: string;
  partners: ImageContent[];
  note: string;
}

export interface ImageContent {
  src: string;
  alt: string;
}

export interface ContactContent {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  fields: ContactFieldContent[];
  consentLabel: string;
  submitLabel: string;
  visualStatus: string;
  futureIntegrationNote: string;
}

export interface ContactFieldContent {
  id: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea';
  placeholder: string;
}

export interface FooterContent {
  logoAlt: string;
  description: string;
  solutionTitle: string;
  solutions: string[];
  contactTitle: string;
  email: string;
  phone: string;
  copyright: string;
  links: NavigationLink[];
}
