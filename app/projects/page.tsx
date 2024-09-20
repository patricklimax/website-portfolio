'use client';
import ContactCard from '@/components/contact';
import { ExperienceItem, experiences } from '@/components/experience';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { projects } from '@/data/projects';
import { MoveLeftIcon, MoveRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel';

import Autoplay from 'embla-carousel-autoplay';

const projectOrderIDdesc = projects
	.filter(project => project.class === 'principal')
	.sort((projectA, projectB) => projectA.id - projectB.id)
	.reverse();

const ProjectsPage = () => {
	return (
		<section className='mx-auto max-w-5xl'>
			<Link
				href={'/'}
				className='mb-8 flex w-fit'>
				<Button className='bg-primary hover:bg-primary/85'>
					<MoveLeftIcon />
					<span className='ml-2 text-base font-bold'>Home</span>
				</Button>
			</Link>

			<div className='w-full'>
				<div className='flex items-center justify-center rounded-md border p-10'>
					<Carousel
						plugins={[
							Autoplay({
								delay: 2000,
								stopOnMouseEnter: true
							})
						]}
						className='w-full'>
						<CarouselContent className='-ml-2 md:-ml-4'>
							{projectOrderIDdesc.map(project => (
								<CarouselItem
									key={project.id}
									className='w-1/2 pl-4 md:basis-1/2'>
									<div className='p-1'>
										<Card className='p-0'>
											<CardContent className='flex items-center justify-center p-2'>
												<Image
													src={project.imgUrlCover}
													className='w-full rounded-md object-cover md:h-[280px]'
													alt={project.name}
													width={702}
													height={450}
												/>
												<div className='flex w-full items-center justify-between'>
													<p className='ml-2 text-sm'>
														Projeto: {project.name}
													</p>
													<Link
														href={`/projects/${project.id}`}
														className='flex w-fit p-0'>
														<Button
															variant={'outline'}
															className='px-3 py-1 text-xs'
															size={'sm'}>
															Mais detalhes
														</Button>
													</Link>
												</div>
											</CardContent>
										</Card>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>

				<div className='flex items-center justify-end gap-4 p-8 text-sm'>
					<p className='text-primary'>Veja todos os projetos</p>
					<MoveRightIcon
						strokeWidth={1}
						className='text-primary'
					/>
					<Link href={'/projects/all-projects'}>
						<Button
							variant={'outline'}
							className='font-semibold'>
							+ Projetos
						</Button>
					</Link>
				</div>

				<div className='flex w-full flex-col gap-4 md:flex-row'>
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
			</div>
		</section>
	);
};

export default ProjectsPage;
