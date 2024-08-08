import Avatar from '@/components/avatar';
import ContactCard from '@/components/contact';
import { ExperienceItem, experiences } from '@/components/experience';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { educations } from '@/data/educations';
import { services } from '@/data/services';
import { ChevronsRightIcon, MoveLeftIcon, MoveRightIcon } from 'lucide-react';
import Link from 'next/link';

const educationsOrder = educations.sort((educA, educB) => educA.id - educB.id).reverse();

const AboutPage = () => {
	return (
		<section className='mx-auto max-w-5xl'>
			<Link
				href={'/'}
				className='mb-8 flex'>
				<Button className='bg-primary hover:bg-primary/85'>
					<MoveLeftIcon />
					<span className='ml-2 text-base font-bold'>Home</span>
				</Button>
			</Link>

			<div className='grid w-full grid-cols-1 gap-4 md:grid-cols-2'>
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

						<div className='space-y-4 text-center text-sm font-light'>
							<p>
								Desenvolvedor Front-end apaixonado por criar soluções digitais completas e
								eficientes. Com experiência no front-end e melhorando cada dia no no back-end, me
								especializo em transformar ideias em produtos funcionais e escaláveis. Minha jornada
								no desenvolvimento web me levou a conhecer diversas tecnologias e frameworks, sempre
								com foco em entregar um código limpo, robusto e de alta performance.
							</p>

							<p>
								Tenho um forte compromisso com a qualidade e a usabilidade, e estou constantemente
								buscando aprimorar minhas habilidades e acompanhar as últimas tendências do setor.
								Seja trabalhando em projetos independentes ou colaborando em equipes
								multidisciplinares, meu objetivo é sempre entregar valor através da tecnologia.
							</p>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardContent>
						<CardTitle className='w-full text-start text-lg font-medium'>
							Serviços que faço
						</CardTitle>

						<ul className='flex w-full flex-col gap-2 text-sm font-light'>
							{services.map(service => (
								<li
									key={service.name}
									className='flex w-full items-center justify-start'>
									<ChevronsRightIcon className='stroke-1 text-primary' />
									<p>{service.name}</p>
								</li>
							))}
						</ul>

						<div className='flex w-full items-center justify-between text-muted-foreground'>
							<p className='text-sm'>Todos os serviços</p>

							<Link
								href={'/services'}
								className='group/item cursor-pointer text-primary'>
								<MoveRightIcon
									size={38}
									className='group/edit group/edit stroke-1 transition-all duration-500 group-hover/item:translate-x-2 group-hover/item:text-foreground'
								/>
							</Link>
						</div>
					</CardContent>
				</Card>

				<Card className='h-[450px]'>
					<CardContent>
						<CardTitle className='w-full text-start text-lg font-medium'>
							Cursos e Especializações
						</CardTitle>

						<div className='flex h-full flex-col gap-4 overflow-y-auto [&::-webkit-scrollbar]:hidden'>
							{educationsOrder.map(educ => (
								<>
									<div
										className='flex w-full flex-col gap-1 border-b pb-4 text-xs font-light'
										key={educ.certificationCode}>
										<p className='text-sm font-bold text-primary'>
											{educ.name} -<span className='text-muted-foreground'> {educ.workload}</span>
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
								</>
							))}
						</div>
					</CardContent>
				</Card>

				<div>
					<ContactCard />
				</div>

				<div>
					<Card className='h-full'>
						<CardContent className='grid grid-cols-2 md:grid-cols-4'>
							{experiences.map(experience => (
								<ExperienceItem
									key={experience.description}
									quantity={experience.quantity}
									description={experience.description}
								/>
							))}
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
};

export default AboutPage;
