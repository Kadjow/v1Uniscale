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
    eyebrow: 'Processos claros. Tecnologia com propósito.',
    title: 'Processos caóticos? Escale sua operação com inteligência.',
    description:
      'A Uniscale organiza processos, conecta sistemas e aplica tecnologia onde ela realmente sustenta crescimento: na rotina, nos dados e nas decisões da operação.',
    primaryAction: { label: 'Iniciar transformação', href: '#contato' },
    secondaryAction: { label: 'Conhecer soluções', href: '#solucoes' },
    operationPanel: {
      label: 'Fluxo Uniscale',
      title: 'Do caos operacional à operação conectada',
      status: 'Operação em clareza',
      indicators: [
        { label: 'Entrada', value: 'Processos manuais, sistemas isolados e retrabalho' },
        { label: 'Camada Uniscale', value: 'Diagnóstico, automação, integração e inteligência' },
        { label: 'Saída', value: 'Dados claros, previsibilidade e controle para escalar' },
      ],
      flows: [
        {
          label: 'Diagnóstico',
          description: 'Entendemos o fluxo real, os gargalos e as dependências que travam a operação.',
        },
        {
          label: 'Organização',
          description: 'Estruturamos processos antes de transformar tecnologia em solução.',
        },
        {
          label: 'Automação',
          description: 'Reduzimos tarefas repetitivas e criamos rotinas mais rastreáveis.',
        },
        {
          label: 'Integração',
          description: 'Conectamos sistemas e dados para a operação enxergar o mesmo contexto.',
        },
      ],
    },
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
        title: 'Automação de processos',
        description:
          'Transformamos tarefas manuais em fluxos automáticos com regra, rastreabilidade e menos dependência de esforço repetitivo.',
      },
      {
        title: 'Integração de sistemas',
        description:
          'Conectamos ferramentas para que dados circulem com consistência e a operação pare de trabalhar em ilhas.',
      },
      {
        title: 'Inteligência artificial',
        description:
          'Aplicamos IA com objetivo claro: organizar informação, apoiar análises, acelerar respostas ou executar tarefas específicas.',
      },
      {
        title: 'Desenvolvimento de sistemas',
        description:
          'Criamos sistemas sob medida para fluxos que precisam de controle, visibilidade e evolução contínua.',
      },
      {
        title: 'Low-code / No-code',
        description:
          'Estruturamos soluções ágeis quando velocidade, validação e autonomia operacional são parte essencial do projeto.',
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
    eyebrow: 'Nossos clientes já avançaram',
    title: 'Empresas que já avançaram com processos mais claros e tecnologia aplicada.',
    description:
      'Resultados construídos com automação, integração e sistemas pensados para a realidade de cada operação.',
    highlights: [
      {
        title: 'Depoimentos reais',
        description:
          'A seção usa os cards de depoimentos publicados no site atual da Uniscale, preservando a validação existente.',
      },
      {
        title: 'Parceiros reais',
        description:
          'Os logos foram extraídos dos assets públicos do site atual para manter a prova social conectada à marca.',
      },
      {
        title: 'Estrutura escalável',
        description:
          'O layout já está preparado para receber novos cases, logos e relatos validados, sem inventar métricas.',
      },
    ],
    testimonials: [
      { src: 'assets/images/proof/testimonial-1.png', alt: 'Depoimento real publicado no site da Uniscale' },
      { src: 'assets/images/proof/testimonial-2.png', alt: 'Depoimento real publicado no site da Uniscale' },
      { src: 'assets/images/proof/testimonial-3.png', alt: 'Depoimento real publicado no site da Uniscale' },
      { src: 'assets/images/proof/testimonial-4.png', alt: 'Depoimento real publicado no site da Uniscale' },
    ],
    partnersLabel: 'Veja as empresas que já ajudamos:',
    partners: [
      { src: 'assets/images/proof/partner-braff.png', alt: 'Logo de parceiro publicado no site da Uniscale' },
      { src: 'assets/images/proof/partner-comuniq.png', alt: 'Logo de parceiro publicado no site da Uniscale' },
      { src: 'assets/images/proof/partner-une-eventos.png', alt: 'Logo de parceiro publicado no site da Uniscale' },
      { src: 'assets/images/proof/partner-uniguacu-hub.png', alt: 'Logo de parceiro publicado no site da Uniscale' },
      { src: 'assets/images/proof/partner-william-ortega.png', alt: 'Logo de parceiro publicado no site da Uniscale' },
    ],
    note:
      'Prova social construída apenas com assets reais do site atual da Uniscale. Sem clientes, cases, marcas ou métricas inventadas.',
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
      { label: 'Termos e Políticas', href: '#' },
      { label: 'Central de Ajuda', href: '#' },
    ],
  },
};
