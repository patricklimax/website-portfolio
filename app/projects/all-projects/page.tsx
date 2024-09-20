import { Button } from '@/components/ui/button';
import { MoveLeftIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { projects } from '@/data/projects';

const projectOrderIDdesc = projects
	.sort((projectA, projectB) => projectA.id - projectB.id)
	.reverse();

const AllProjects = () => {
	return (
		<section className='mx-auto max-w-5xl'>
			<Link
				href={'/projects'}
				className='mb-8 flex w-fit'>
				<Button className='bg-primary hover:bg-primary/85'>
					<MoveLeftIcon />
					<span className='ml-2 text-base font-bold'>Voltar</span>
				</Button>
			</Link>

			<div className='w-full'>
				<div className='grid w-full grid-cols-1 gap-4 md:grid-cols-2'>
					{projectOrderIDdesc.map(project => (
						<div
							key={project.id}
							className='group/item relative w-full rounded-md border md:h-auto'>
							<div className='group/edit absolute bottom-0 hidden h-0 w-full rounded-md bg-gradient-to-b from-background to-background/75 transition-all duration-500 group-hover/item:h-full md:block' />

							<Image
								src={project.imgUrlCover}
								className='w-full rounded-md object-cover md:h-[220px]'
								alt={project.name}
								width={702}
								height={450}
							/>

							<div className='group/edit z-40 flex h-full flex-col rounded-md p-4 transition-all duration-700 group-hover/item:opacity-100 md:absolute md:bottom-0 md:justify-between md:p-4 md:opacity-0'>
								<p className='text-lg font-semibold text-primary md:text-2xl'>
									{project.name}
								</p>

								<p className='mb:mt-0 mt-2 rounded-md text-sm font-medium shadow-md md:px-10'>
									{project.descriptionCover}
								</p>

								<Link
									href={`/projects/${project.id}`}
									className='mt-2 flex w-fit self-end p-0'>
									<Button
										variant={'outline'}
										className='px-2 py-1'
										size={'sm'}>
										Mais detalhes
									</Button>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default AllProjects;
