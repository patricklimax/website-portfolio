import Avatar from '@/components/avatar';
import ContactCard from '@/components/contact';
import { ExperienceItem, experiences } from '@/components/experience';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ChevronsRightIcon, MoveLeftIcon, MoveRightIcon } from 'lucide-react';
import Link from 'next/link';

interface Service {
  name: string,
  description: string,
  moreInfo: string
}

const services: Service[] = [
  {
    name: 'Desenvolvimento de Websites Personalizados',
    description: 'Criação de sites sob medida para atender às necessidades específicas do cliente, como sites institucionais, portfólios, blogs, e landing pages.',
    moreInfo: ': Design responsivo, integração com CMS (WordPress, Joomla), otimização para SEO, e configuração de formulários de contato.'
  },
  {
    name: 'Desenvolvimento de Aplicações Web',
    description: 'Construção de aplicações web interativas e dinâmicas, como sistemas de gerenciamento, plataformas de e-commerce, ou ferramentas SaaS.',
    moreInfo: 'Desenvolvimento de front-end e back-end, integração com APIs, e implementação de funcionalidades avançadas.'
  },
  {
    name: 'Otimização para Motores de Busca (SEO)',
    description: 'Melhora a visibilidade de um site nos motores de busca para aumentar o tráfego orgânico.',
    moreInfo: 'Pesquisa de palavras-chave, otimização de conteúdo, melhorias na estrutura do site, otimização de velocidade, e link building.'
  },
  {
    name: 'Desenvolvimento de E-commerce',
    description: '•	Descrição: Criação e configuração de lojas virtuais, proporcionando uma plataforma completa para vendas online.',
    moreInfo: 'Integração com sistemas de pagamento, configuração de carrinho de compras, gerenciamento de inventário, e personalização da experiência do usuário.'
  },
  {
    name: 'Integração de APIs e Sistemas de Terceiros',
    description: 'Integra sites e aplicações com APIs e serviços externos para adicionar funcionalidades como pagamentos, mapas, redes sociais, e muito mais.',
    moreInfo: 'Configuração e personalização de APIs, integração com CRMs, sistemas de pagamento como PayPal e Stripe, e automação de processos.'
  },
  {
    name: 'Design e Desenvolvimento de Interfaces de Usuário (UI/UX)',
    description: 'Criação de interfaces intuitivas e agradáveis, focadas na experiência do usuário.',
    moreInfo: 'Pesquisa de UX, design de wireframes e protótipos, testes de usabilidade, e implementação de designs acessíveis e responsivos.'
  },
  {
    name: 'Desenvolvimento Single Page Applications - SPAs',
    description: 'Criação de sites ou aplicações que funcionam em uma única página, oferecendo uma experiência de navegação mais rápida e fluida.',
    moreInfo: 'Uso de frameworks como React, integração com APIs, e otimização para desempenho e carregamento rápido.'
  },
  {
    name: 'Consultoria em Desenvolvimento Web',
    description: 'Oferece conselhos e estratégias para melhorar a presença online de uma empresa ou para a implementação de novas tecnologias.',
    moreInfo: 'Avaliação de sites existentes, recomendações de melhorias, orientação sobre tecnologias emergentes, e planejamento de projetos web.'
  },
  {
    name: 'Desenvolvimento de Sistemas Internos e Intranets',
    description: 'Criação de sistemas personalizados para uso interno em empresas, como intranets, dashboards, e ferramentas de gerenciamento de projetos.',
    moreInfo: 'Autenticação de usuários, controle de acesso, integração com bancos de dados internos, e desenvolvimento de ferramentas específicas para processos empresariais.'
  },
  {
    name: 'Manutenção e Suporte Técnico',
    description: 'Oferece suporte contínuo para sites e aplicações existentes, garantindo que estejam seguros, atualizados e funcionando corretamente.',
    moreInfo: 'Correção de bugs, atualizações de software, monitoramento de segurança, backups regulares, e otimização de desempenho.'
  },
]

interface Education {
  name: string;
  workload: string;
  description: string;
  institution: string,
  urlVerification: string,
  certificationCode: string
}

const educations: Education[] = [
  {
    name: 'Curso Devlinks',
    workload: '5h40',
    description: 'fundamentos da programação web, HTML, CSS, Javascript, Git e Github.',
    institution: 'Rocketseat',
    urlVerification: 'certificado.rocketseat.com.br',
    certificationCode: 'a84e10f5-7953-4ec1-8ed4-e6a5db252992'
  },
  {
    name: 'Trilha Conectar',
    workload: '2h23',
    description: 'fundamentos da programação, funcionamento de computadores, internet e mais.',
    institution: 'Rocketseat',
    urlVerification: 'certificado.rocketseat.com.br',
    certificationCode: '2257b9ee-8f43-4249-aa0a-1b7f58717835'
  },
  {
    name: 'Trilha Fundamentar',
    workload: '27h46',
    description: 'HTML, CSS, JavaScript, NodeJS, SQL e mais.',
    institution: 'Rocketseat',
    urlVerification: 'certificado.rocketseat.com.br',
    certificationCode: 'ab73450f-f121-4d9a-8c04-68d3ab187a97'
  },
  {
    name: 'Trilha Especializar',
    workload: '11h11',
    institution: 'Rocketseat',
    description: 'HTML, CSS avançado, fundamentos de APIs, ReactJS, Typescript, SQL e Github para times',
    urlVerification: 'certificado.rocketseat.com.br',
    certificationCode: 'c286bb2f-0a92-45a7-bec3-34844cb71cc0'
  },
]



const AboutPage = () => {
  return (
    <section className='mx-auto max-w-5xl'>
      <Link href={'/'} className='flex mb-8'>
        <Button className='bg-primary hover:bg-primary/85 '>
          <MoveLeftIcon />
          <span className='ml-2 text-base font-bold'>Home</span>
        </Button>
      </Link>

      <div className='w-full grid grid-cols-1 gap-4 md:grid-cols-2'>
        <Card>
          <CardContent className='justify-center p-0 py-3'>
            <Avatar />
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div className='flex flex-col items-center justify-center text-lg font-semibold'>
              <p>Olá,</p>
              <div className='flex items-center gap-1'>
                <p className='-my-2'>Eu sou</p>
                <p className='text-primary'>Patrick</p>
              </div>
            </div>

            <div className='font-light text-sm text-center space-y-4'>
              <p>
                Desenvolvedor Front-end apaixonado por criar soluções digitais completas e eficientes. Com experiência no front-end e melhorando cada dia no no back-end, me especializo em transformar ideias em produtos funcionais e escaláveis. Minha jornada no desenvolvimento web me levou a conhecer diversas tecnologias e frameworks, sempre com foco em entregar um código limpo, robusto e de alta performance.
              </p>
              <p>
                Tenho um forte compromisso com a qualidade e a usabilidade, e estou constantemente buscando aprimorar minhas habilidades e acompanhar as últimas tendências do setor. Seja trabalhando em projetos independentes ou colaborando em equipes multidisciplinares, meu objetivo é sempre entregar valor através da tecnologia.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle className='text-lg font-medium text-start w-full'>
              Serviços que faço
            </CardTitle>
            <ul className='w-full font-light text-sm flex flex-col gap-2'>
              {
                services.map(service => (
                  <li key={service.name} className='flex w-full justify-start items-center'>
                    <ChevronsRightIcon className='stroke-1 text-primary' />
                    <p>{service.name}</p>
                  </li>
                ))
              }
            </ul>

            <div className='w-full flex items-center justify-between text-muted-foreground'>
              <p className='text-sm'>Todos os serviços</p>
              <Link href={'/services'} className='cursor-pointer group/item text-primary'>
                <MoveRightIcon
                  size={38}
                  className='stroke-1 transition-all duration-500 group/edit group-hover/item:text-foreground group/edit group-hover/item:translate-x-2' />
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className='h-[450px]'>
          <CardContent>
            <CardTitle className='text-lg font-medium text-start w-full'>
              Educação
            </CardTitle>

            <div className='h-full flex flex-col gap-2 overflow-y-auto [&::-webkit-scrollbar]:hidden'>
              {
                educations.map(educ => (
                  <>
                    <div
                      className='w-full font-light text-xs flex flex-col gap-1'
                      key={educ.certificationCode}>
                      <p className='text-sm text-primary font-semibold'>
                        {educ.name} -
                        <span className='text-muted-foreground'> {educ.workload}</span>
                      </p>
                      <p>Conteúdo: <span className='text-muted-foreground'>{educ.description}</span> </p>
                      <p>Instituição: <span className='text-muted-foreground'>{educ.institution}</span></p>
                      <p>Acesse em: <span className='text-muted-foreground'>{educ.urlVerification}</span></p>
                      <p>Código de Verificação: <span className='text-muted-foreground'>{educ.certificationCode}</span></p>
                    </div>

                    <div className='py-4'>
                      <Separator />
                    </div>
                  </>
                ))
              }
            </div>
          </CardContent>
        </Card>

        <div>
          <ContactCard />
        </div>

        <div>
          <Card className='h-full'>
            <CardContent
              className='grid grid-cols-2 md:grid-cols-4'>
              {experiences.map((experience) => (
                <ExperienceItem
                  key={experience.description}
                  quantity={experience.quantity}
                  description={experience.description} />
              ))}
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
}

export default AboutPage;