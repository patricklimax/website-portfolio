import { Service } from '@/interfaces/service-item';
import { IconApiApp, IconBuildingStore, IconDeviceImacCog, IconDevicesCog, IconDeviceTablet, IconLayoutCollage, IconMessageCode, IconSeo, IconVectorBezier, IconWorldWww } from '@tabler/icons-react';

export const services: Service[] = [
  {
    color: 'border-[#9747FF] text-[#9747FF]',
    icon: IconWorldWww,
    name: 'Desenvolvimento Web',
    description:
      'Construção de aplicações web interativas e dinâmicas, como sistemas de gerenciamento, plataformas de e-commerce, ou ferramentas SaaS.',
    moreInfo:
      'Desenvolvimento de front-end e back-end, integração com APIs, e implementação de funcionalidades avançadas.',
  },
  {
    color: 'border-[#CDFF00] text-[#CDFF00]',
    icon: IconDeviceImacCog,
    name: 'Sistemas Internos',
    description:
      'Criação de sistemas personalizados para uso interno em empresas, como intranets, dashboards, e ferramentas de gerenciamento de projetos.',
    moreInfo:
      'Autenticação de usuários, controle de acesso, integração com bancos de dados internos, e desenvolvimento de ferramentas específicas para processos empresariais.',
  },
  {
    color: 'border-[#FF6900] text-[#FF6900]',
    icon: IconLayoutCollage,
    name: 'Websites Personalizados',
    description:
      'Criação de sites sob medida para atender às necessidades específicas do cliente, como sites institucionais, portfólios, blogs, e landing pages.',
    moreInfo:
      'Design responsivo, integração com CMS (WordPress, Joomla), otimização para SEO, e configuração de formulários de contato.',
  },
  {
    color: 'border-[#FFCE32] text-[#FFCE32]',
    icon: IconVectorBezier,
    name: 'Interfaces de Usuário',
    description:
      'Criação de interfaces intuitivas e agradáveis, focadas na experiência do usuário.',
    moreInfo:
      'Pesquisa de UX, design de wireframes e protótipos, testes de usabilidade, e implementação de designs acessíveis e responsivos.',
  },
  {
    color: 'border-[#1679AB] text-[#1679AB]',
    icon: IconBuildingStore,
    name: 'Desenvolvimento de E-commerce',
    description:
      'Criação e configuração de lojas virtuais, proporcionando uma plataforma completa para vendas online.',
    moreInfo:
      'Integração com sistemas de pagamento, configuração de carrinho de compras, gerenciamento de inventário, e personalização da experiência do usuário.',
  },
  {
    color: 'border-[#FF5580] text-[#FF5580]',
    icon: IconSeo,
    name: 'Otimização para Motores de Busca (SEO)',
    description:
      'Melhora a visibilidade de um site nos motores de busca para aumentar o tráfego orgânico.',
    moreInfo:
      'Pesquisa de palavras-chave, otimização de conteúdo, melhorias na estrutura do site, otimização de velocidade, e link building.',
  },
  {
    color: 'border-[#B7B597] text-[#B7B597]',
    icon: IconApiApp,
    name: 'Integração de APIs e Sistemas de Terceiros',
    description:
      'Integra sites e aplicações com APIs e serviços externos para adicionar funcionalidades como pagamentos, mapas, redes sociais, e muito mais.',
    moreInfo:
      'Configuração e personalização de APIs, integração com CRMs, sistemas de pagamento como PayPal e Stripe, e automação de processos.',
  },
  {
    color: 'border-[#FFCE32] text-[#FFCE32]',
    icon: IconDeviceTablet,
    name: 'Desenvolvimento Single Page Applications - SPAs',
    description:
      'Criação de sites ou aplicações que funcionam em uma única página, oferecendo uma experiência de navegação mais rápida e fluida.',
    moreInfo:
      'Uso de frameworks como React, integração com APIs, e otimização para desempenho e carregamento rápido.',
  },
  {
    color: 'border-[#FF6900] text-[#FF6900]',
    icon: IconMessageCode,
    name: 'Consultoria em Desenvolvimento Web',
    description:
      'Oferece conselhos e estratégias para melhorar a presença online de uma empresa ou para a implementação de novas tecnologias.',
    moreInfo:
      'Avaliação de sites existentes, recomendações de melhorias, orientação sobre tecnologias emergentes, e planejamento de projetos web.',
  },
  {
    color: 'border-[#CDFF00] text-[#CDFF00]',
    icon: IconDevicesCog,
    name: 'Manutenção e Suporte Técnico',
    description:
      'Oferece suporte contínuo para sites e aplicações existentes, garantindo que estejam seguros, atualizados e funcionando corretamente.',
    moreInfo:
      'Correção de bugs, atualizações de software, monitoramento de segurança, backups regulares, e otimização de desempenho.',
  },
];
