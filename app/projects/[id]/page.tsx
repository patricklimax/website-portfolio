import ContactCard from '@/components/contact';
import { ExperienceItem, experiences } from '@/components/experience';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { projects } from '@/data/projects';
import { ChevronsRightIcon, MoveLeftIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProfessionalDetailsPageProps {
	params: {
		id?: string;
	};
}

const ProjectDetailsPage = ({ params }: ProfessionalDetailsPageProps) => {
	if (!params) {
		//TODO: redirect to homepage
		return null;
	}

	const projeto = projects.filter(project => project.id === Number(params.id));
	const projetoItem = projeto[0];
	const funcs = projetoItem.functionalities;
	const techs = projetoItem.technologies;

	if (!projeto) {
		//TODO: redirect to homepage
		return null;
	}

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

			<div className='w-full'>
				<div className='mb-6 flex w-full flex-col items-stretch gap-6 md:flex-row'>
					<div className='w-full rounded-xl border md:w-1/2'>
						<Image
							src={projetoItem.imgUrlCover}
							alt={projetoItem.name}
							width={702}
							height={450}
							className='h-[180px] w-full rounded-xl object-cover md:h-[304px]'
						/>
					</div>

					<div className='flex w-full flex-col justify-between gap-3 rounded-xl border p-6 md:w-1/2'>
						<p className='text-xl font-semibold text-primary md:text-3xl'>
							<span className='text-foreground'>#</span>
							{projetoItem.name}
						</p>

						<p className='text-sm font-light text-muted-foreground'>
							{projetoItem.descriptionProject}
						</p>

						<div className='mt-2 flex items-center gap-10 self-end'>
							<Button
								variant={'outline'}
								size={'sm'}
								className='text-xs'>
								Ver Online
							</Button>
							<Button
								variant={'outline'}
								size={'sm'}
								className='text-xs'>
								Repositório
							</Button>
						</div>
					</div>
				</div>

				<div className='flex flex-col items-stretch gap-6 md:flex-row'>
					<Card className='w-full md:w-1/2'>
						<CardContent>
							<CardTitle className='w-full text-start text-lg font-medium uppercase text-primary'>
								Funcionalidades da Aplicação
							</CardTitle>

							<div>
								<Image
									src={projetoItem.imgUrlFunc}
									alt={projetoItem.name}
									width={702}
									height={450}
									className='h-[180px] w-[492px] rounded-md object-cover md:h-[304px]'
								/>
							</div>

							<div className='ml-2'>
								<ul className='flex flex-col gap-2 text-muted-foreground'>
									{funcs.map(func => (
										<li
											className='flex gap-2 text-sm font-light'
											key={projetoItem.id}>
											<span className='text-primary'>
												<ChevronsRightIcon />
											</span>
											<span>{func}</span>
										</li>
									))}
								</ul>
							</div>
						</CardContent>
					</Card>

					<Card className='w-full md:w-1/2'>
						<CardContent>
							<CardTitle className='w-full text-start text-lg font-medium uppercase text-primary'>
								Tecnologias usadas no Projeto
							</CardTitle>

							<div>
								<Image
									src={projetoItem.imgUrlTech}
									alt={projetoItem.name}
									width={702}
									height={450}
									className='h-[180px] w-[492px] rounded-md object-cover md:h-[304px]'
								/>
							</div>

							<div className='ml-2'>
								<ul className='flex flex-col gap-2 text-muted-foreground'>
									{techs.map(tech => (
										<li
											className='flex gap-2 text-sm font-light'
											key={projetoItem.id}>
											<span className='text-primary'>
												<ChevronsRightIcon />
											</span>
											<span>{tech}</span>
										</li>
									))}
								</ul>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>

			<div className='mt-10 flex w-full flex-col gap-4 md:flex-row'>
				<div className='md:flex-1'>
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

				<div className='md:flex-1'>
					<ContactCard />
				</div>
			</div>
		</section>
	);
};

export default ProjectDetailsPage;
