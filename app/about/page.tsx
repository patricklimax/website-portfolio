import Avatar from '@/components/avatar';
import ContactCard from '@/components/contact';
import { ExperienceItem, experiences } from '@/components/experience';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { educations } from '@/data/educations';
import { services } from '@/data/services';
import { ChevronsRightIcon, MoveLeftIcon, MoveRightIcon } from 'lucide-react';
import Link from 'next/link';

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
              Cursos e Especializações
            </CardTitle>

            <div className='h-full flex flex-col gap-2 overflow-y-auto [&::-webkit-scrollbar]:hidden'>
              {
                educations.map(educ => (
                  <>
                    <div
                      className='w-full font-light text-xs flex flex-col gap-1'
                      key={educ.certificationCode}>
                      <p className='text-sm text-primary font-bold'>
                        {educ.name} -
                        <span className='text-muted-foreground'> {educ.workload}</span>
                      </p>
                      <p>
                        Conteúdo: 
                        <span className='text-muted-foreground'> {educ.description}</span>
                      </p>

                      <p>
                        Instituição: 
                        <span className='text-muted-foreground'> {educ.institution}</span>
                      </p>

                      <p>
                        Acesse em: 
                        <span className='text-muted-foreground'> {educ.urlVerification}</span>
                      </p>
                      <p>
                        Código de Verificação: 
                        <span className='text-muted-foreground'> {educ.certificationCode}</span>
                      </p>
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