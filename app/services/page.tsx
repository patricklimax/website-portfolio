import ContactCard from '@/components/contact';
import { ExperienceItem, experiences } from '@/components/experience';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { IconVectorBezier } from '@tabler/icons-react';
import { MoveLeftIcon } from 'lucide-react';
import Link from 'next/link';
import { ElementType } from 'react';

interface Service {
  name: string,
  description: string,
  moreInfo: string,
  icon: ElementType,
  color: string
}

const services: Service[] = [
  {
    color: 'border-[#FF6900] text-[#FF6900]',
    icon: IconVectorBezier,
    name: 'Desenvolvimento de Websites Personalizados',
    description: 'Criação de sites sob medida para atender às necessidades específicas do cliente, como sites institucionais, portfólios, blogs, e landing pages.',
    moreInfo: 'Design responsivo, integração com CMS (WordPress, Joomla), otimização para SEO, e configuração de formulários de contato.'
  },
  {
    color: 'border-[#9747FF] text-[#9747FF]',
    icon: IconVectorBezier,
    name: 'Desenvolvimento de Aplicações Web',
    description: 'Construção de aplicações web interativas e dinâmicas, como sistemas de gerenciamento, plataformas de e-commerce, ou ferramentas SaaS.',
    moreInfo: 'Desenvolvimento de front-end e back-end, integração com APIs, e implementação de funcionalidades avançadas.'
  },
  {
    color: 'border-[#CDFF00] text-[#CDFF00]',
    icon: IconVectorBezier,
    name: 'Otimização para Motores de Busca (SEO)',
    description: 'Melhora a visibilidade de um site nos motores de busca para aumentar o tráfego orgânico.',
    moreInfo: 'Pesquisa de palavras-chave, otimização de conteúdo, melhorias na estrutura do site, otimização de velocidade, e link building.'
  },
  {
    color: 'border-[#FFCE32] text-[#FFCE32]',
    icon: IconVectorBezier,
    name: 'Desenvolvimento de E-commerce',
    description: 'Criação e configuração de lojas virtuais, proporcionando uma plataforma completa para vendas online.',
    moreInfo: 'Integração com sistemas de pagamento, configuração de carrinho de compras, gerenciamento de inventário, e personalização da experiência do usuário.'
  },
  {
    color: 'border-[#FF6900] text-[#FF6900]',
    icon: IconVectorBezier,
    name: 'Integração de APIs e Sistemas de Terceiros',
    description: 'Integra sites e aplicações com APIs e serviços externos para adicionar funcionalidades como pagamentos, mapas, redes sociais, e muito mais.',
    moreInfo: 'Configuração e personalização de APIs, integração com CRMs, sistemas de pagamento como PayPal e Stripe, e automação de processos.'
  },
  {
    color: 'border-[#9747FF] text-[#9747FF]',
    icon: IconVectorBezier,
    name: 'Design e Desenvolvimento de Interfaces de Usuário (UI/UX)',
    description: 'Criação de interfaces intuitivas e agradáveis, focadas na experiência do usuário.',
    moreInfo: 'Pesquisa de UX, design de wireframes e protótipos, testes de usabilidade, e implementação de designs acessíveis e responsivos.'
  },
  {
    color: 'border-[#CDFF00] text-[#CDFF00]',
    icon: IconVectorBezier,
    name: 'Desenvolvimento Single Page Applications - SPAs',
    description: 'Criação de sites ou aplicações que funcionam em uma única página, oferecendo uma experiência de navegação mais rápida e fluida.',
    moreInfo: 'Uso de frameworks como React, integração com APIs, e otimização para desempenho e carregamento rápido.'
  },
  {
    color: 'border-[#FF6900] text-[#FF6900]',
    icon: IconVectorBezier,
    name: 'Consultoria em Desenvolvimento Web',
    description: 'Oferece conselhos e estratégias para melhorar a presença online de uma empresa ou para a implementação de novas tecnologias.',
    moreInfo: 'Avaliação de sites existentes, recomendações de melhorias, orientação sobre tecnologias emergentes, e planejamento de projetos web.'
  },
  {
    color: 'border-[#548214] text-[#548214]',
    icon: IconVectorBezier,
    name: 'Desenvolvimento de Sistemas Internos e Intranets',
    description: 'Criação de sistemas personalizados para uso interno em empresas, como intranets, dashboards, e ferramentas de gerenciamento de projetos.',
    moreInfo: 'Autenticação de usuários, controle de acesso, integração com bancos de dados internos, e desenvolvimento de ferramentas específicas para processos empresariais.'
  },
  {
    color: 'border-[#CDFF00] text-[#CDFF00]',
    icon: IconVectorBezier,
    name: 'Manutenção e Suporte Técnico',
    description: 'Oferece suporte contínuo para sites e aplicações existentes, garantindo que estejam seguros, atualizados e funcionando corretamente.',
    moreInfo: 'Correção de bugs, atualizações de software, monitoramento de segurança, backups regulares, e otimização de desempenho.'
  },
]

const ServicesPage = () => {
  return (
    <section className='mx-auto max-w-5xl'>
      <Link href={'/'} className='flex mb-8'>
        <Button className='bg-primary hover:bg-primary/85 '>
          <MoveLeftIcon />
          <span className='ml-2 text-base font-bold'>Home</span>
        </Button>
      </Link>

      <div className='w-full grid grid-cols-1 gap-4 md:grid-cols-2'>
        {
          services.map(service => {
            const ServiceIcon = service.icon;
            const ColorIcon = service.color;
            return (
              <Card key={service.name}>
                <CardContent>
                  <div className='w-full flex items-center gap-4'>
                    <CardTitle className='flex-3 text-lg font-medium text-center w-full flex flex-col text-primary'>
                      {service.name}
                    </CardTitle>

                    <div className='flex-1 flex items-center justify-center'>
                      <span className={`rounded-full border place-items-start w-fit p-3 ${ColorIcon}`}>
                        <ServiceIcon size={50} className={`stroke-1`} />
                      </span>
                    </div>
                  </div>

                  <div className='text-sm font-light flex flex-col items-center gap-2'>
                    <p className=''>
                      {service.description}
                    </p>
                    <p className='text-muted-foreground'>
                      {service.moreInfo}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )
          })
        }

        <div>
          <Card className='h-full'>
            <CardContent
              className='grid grid-cols-2 md:grid-cols-4 '>
              {experiences.map((experience) => (
                <ExperienceItem
                  key={experience.description}
                  quantity={experience.quantity}
                  description={experience.description} />
              ))}
            </CardContent>
          </Card>
        </div>

        <div>
          <ContactCard />
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;