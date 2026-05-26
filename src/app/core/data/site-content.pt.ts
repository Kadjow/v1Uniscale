import { SiteContent } from '../models/site-content.model';

export const siteContentPt: SiteContent = {
  header: {
    logoAlt: 'Uniscale',
    menuOpenLabel: 'Abrir navegação',
    menuCloseLabel: 'Fechar navegação',
    navigation: [
      { label: 'Abordagem', href: '#diferenciais' },
      { label: 'Desafios', href: '#problemas' },
      { label: 'Soluções', href: '#solucoes' },
      { label: 'Método', href: '#metodo' },
      { label: 'Contato', href: '#contato' },
    ],
  },
  hero: {
    eyebrow: 'Operação clara para crescer com controle',
    title: 'Organize o caos operacional antes de escalar.',
    description:
      'A Uniscale transforma processos soltos, sistemas isolados e dados dispersos em uma operação conectada, automatizada e pronta para crescer com clareza.',
    primaryAction: { label: 'Mapear minha operação', href: '#contato' },
    secondaryAction: { label: 'Ver como organizamos', href: '#solucoes' },
  },
  operationProblems: {
    id: 'problemas',
    eyebrow: 'Você se identifica?',
    title: 'Quando a operação cresce sem estrutura, o caos vira custo.',
    description:
      'Esses sinais aparecem quando processos, pessoas e sistemas deixam de trabalhar no mesmo ritmo. A boa notícia é que cada ponto pode ser redesenhado com método.',
    cards: [
      {
        title: 'Escalar sem perder controle',
        description:
          'A empresa cresce, mas a gestão passa a depender de conferências manuais, exceções e decisões tomadas no improviso.',
      },
      {
        title: 'Retrabalho em processos manuais',
        description:
          'Rotinas repetitivas consomem tempo do time, aumentam risco de erro e deixam melhorias importantes sempre para depois.',
      },
      {
        title: 'Sistemas que não se conversam',
        description:
          'Informações ficam presas em ferramentas diferentes, criando silos e obrigando a equipe a reconstruir contexto todos os dias.',
      },
      {
        title: 'Baixa visibilidade operacional',
        description:
          'Sem uma leitura clara do fluxo, fica difícil saber onde estão gargalos, prioridades e oportunidades de eficiência.',
      },
      {
        title: 'Decisões sem dados confiáveis',
        description:
          'Indicadores chegam atrasados, incompletos ou inconsistentes, reduzindo confiança na tomada de decisão.',
      },
    ],
  },
  strategicSolutions: {
    id: 'solucoes',
    eyebrow: 'Como transformamos',
    title: 'Soluções desenhadas para a realidade da sua operação.',
    description:
      'Antes de implementar tecnologia, entendemos a operação, organizamos processos e desenhamos soluções que realmente sustentam crescimento.',
    cards: [
      {
        tag: 'Operação',
        title: 'Automação de processos',
        description:
          'Transformamos tarefas manuais em fluxos automáticos com regra, rastreabilidade e menos esforço repetitivo.',
      },
      {
        tag: 'Dados',
        title: 'Integração de sistemas',
        description:
          'Conectamos ferramentas para que informações circulem com consistência e a operação deixe de trabalhar em ilhas.',
      },
      {
        tag: 'Inteligência',
        title: 'Inteligência artificial',
        description:
          'Aplicamos IA onde ela realmente melhora análise, atendimento, automação ou tomada de decisão.',
      },
      {
        tag: 'Produto',
        title: 'Desenvolvimento de sistemas',
        description:
          'Criamos sistemas sob medida para fluxos que precisam de controle, visibilidade e evolução contínua.',
      },
      {
        tag: 'Velocidade',
        title: 'Low-code / No-code',
        description:
          'Estruturamos soluções ágeis para validar processos, reduzir complexidade e acelerar entregas.',
      },
    ],
  },
  implementationMethod: {
    id: 'metodo',
    eyebrow: 'Método Uniscale',
    title: 'Tecnologia é ferramenta. O objetivo é uma operação melhor.',
    description:
      'A Uniscale começa entendendo o negócio, organiza o caminho e só então implementa a solução técnica certa para gerar eficiência, previsibilidade e crescimento sustentável.',
    steps: [
      {
        marker: '01',
        title: 'Entender a operação',
        description:
          'Mapeamos processos, responsabilidades, gargalos e sistemas para separar sintoma de causa.',
      },
      {
        marker: '02',
        title: 'Organizar processos',
        description:
          'Desenhamos fluxos mais claros, reduzimos ruído e definimos onde a tecnologia deve entrar.',
      },
      {
        marker: '03',
        title: 'Implementar com contexto',
        description:
          'Automatizamos, integramos ou desenvolvemos soluções conectadas à rotina real da equipe.',
      },
      {
        marker: '04',
        title: 'Evoluir com dados',
        description:
          'Acompanhamos sinais da operação para ajustar, ampliar e sustentar o crescimento com controle.',
      },
    ],
  },
  businessDifferentials: {
    id: 'diferenciais',
    eyebrow: 'Nossa abordagem',
    title: 'A Uniscale une visão operacional e execução técnica.',
    description:
      'O resultado não é tecnologia isolada. É uma base operacional mais simples de usar, mais fácil de medir e preparada para crescer.',
    cards: [
      {
        title: 'Diagnóstico antes da ferramenta',
        description:
          'Cada projeto começa pela leitura da operação para que a solução resolva o problema certo.',
      },
      {
        title: 'Sistemas conectados ao processo',
        description:
          'Automação, integração e software entram como extensão do fluxo, não como mais uma camada de complexidade.',
      },
      {
        title: 'Crescimento com continuidade',
        description:
          'As entregas são pensadas para evoluir junto com a empresa, sem prender a operação em improvisos.',
      },
    ],
  },
  businessProof: {
    id: 'prova',
    eyebrow: 'Validação real',
    title: 'Empresas já avançaram com processos mais claros e tecnologia aplicada.',
    description:
      'Relatos e parceiros publicados pela Uniscale mostram uma atuação focada em organizar operações antes de aplicar tecnologia.',
    testimonials: [
      { src: 'assets/images/proof/testimonial-1.png', alt: 'Depoimento de Rafael Correia sobre a Uniscale' },
      { src: 'assets/images/proof/testimonial-2.png', alt: 'Depoimento de Roberto Régis sobre a Uniscale' },
      { src: 'assets/images/proof/testimonial-3.png', alt: 'Depoimento de Gustavo Costa sobre a Uniscale' },
      { src: 'assets/images/proof/testimonial-4.png', alt: 'Depoimento de Willian Ortega sobre a Uniscale' },
    ],
    partnersLabel: 'Empresas e parceiros',
    partnersDescription: 'Marcas presentes nos projetos e materiais atuais da Uniscale.',
    partners: [
      { src: 'assets/images/proof/partner-braff.png', alt: 'Logo BRAFF Brasil de Fisiculturismo e Fitness' },
      { src: 'assets/images/proof/partner-comuniq.png', alt: 'Logo Comuniq AG' },
      { src: 'assets/images/proof/partner-une-eventos.png', alt: 'Logo UNE Eventos' },
      { src: 'assets/images/proof/partner-uniguacu-hub.png', alt: 'Logo Grupo Uniguaçu Hub' },
      { src: 'assets/images/proof/partner-william-ortega.png', alt: 'Logo Instituto Willian Ortega' },
    ],
  },
  contact: {
    id: 'contato',
    eyebrow: 'Contato',
    title: 'Vamos organizar o próximo nível da sua operação?',
    description:
      'Conte onde a operação mais trava hoje. A Uniscale avalia o cenário e indica caminhos possíveis para conectar processos, sistemas e automações.',
    fields: [
      { id: 'name', label: 'Nome completo', type: 'text', placeholder: 'Seu nome' },
      { id: 'email', label: 'E-mail', type: 'email', placeholder: 'voce@empresa.com.br' },
      { id: 'phone', label: 'Telefone', type: 'tel', placeholder: '(00) 00000-0000' },
      { id: 'company', label: 'Empresa', type: 'text', placeholder: 'Nome da empresa' },
      { id: 'role', label: 'Cargo', type: 'text', placeholder: 'Sua função' },
      {
        id: 'challenge',
        label: 'Principal desafio hoje',
        type: 'textarea',
        placeholder: 'Conte brevemente onde a operação mais trava',
      },
    ],
    consentLabel: 'Aceito receber contato da Uniscale sobre esta solicitação.',
    submitLabel: 'Enviar interesse estratégico',
    visualStatus: 'Formulário demonstrativo',
    futureIntegrationNote:
      'Ponto preparado para integração futura com WhatsApp, e-mail, API ou CRM, sem envio real nesta V1.',
  },
  footer: {
    logoAlt: 'Uniscale',
    description:
      'Tecnologia estratégica para automatizar processos, integrar sistemas e dar mais inteligência à operação.',
    solutionTitle: 'Soluções',
    solutions: [
      'Desenvolvimento de software',
      'Automação de processos',
      'Integração de sistemas',
      'Soluções com inteligência artificial',
      'Desenvolvimento low-code / no-code',
    ],
    contactTitle: 'Contato',
    email: 'contato@uniscale.tec.br',
    phone: '(45) 3197-7459',
    copyright: 'UNISCALE - 2026 © Todos os direitos reservados',
    links: [
      { label: 'Termos e Políticas' },
      { label: 'Central de Ajuda' },
    ],
  },
};
