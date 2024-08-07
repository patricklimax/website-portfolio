import ContactCard from '@/components/contact';
import { ExperienceItem, experiences } from '@/components/experience';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { projects } from '@/data/projects';
import { MoveLeftIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const projectOrderIDdesc = projects
	.sort((projectA, projectB) => projectA.id - projectB.id)
	.reverse();

const ProjectsPage = () => {
	return (
		<section className="mx-auto max-w-5xl">
			<Link href={'/'} className="flex mb-8 w-fit">
				<Button className="bg-primary hover:bg-primary/85 ">
					<MoveLeftIcon />
					<span className="ml-2 text-base font-bold">Home</span>
				</Button>
			</Link>

			<div className="w-full">
				<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
					{projectOrderIDdesc.map((project) => (
						<div
							key={project.id}
							className="w-full md:h-auto border rounded-md group/item relative">
							<div className="hidden md:block group/edit w-full h-0 absolute bottom-0 group-hover/item:h-full bg-gradient-to-b from-background to-background/75 transition-all duration-500 rounded-md" />

							<Image
								src={project.imgUrlCover}
								className="rounded-md object-cover w-full md:h-[220px]"
								alt={project.name}
								width={702}
								height={450}
							/>

							<div className="md:absolute z-40 md:bottom-0 p-4 md:p-4 group/edit md:opacity-0 transition-all duration-700 group-hover/item:opacity-100 flex flex-col md:justify-between rounded-md h-full">
								<p className="text-lg md:text-2xl text-primary font-semibold">{project.name}</p>

								<p className="text-sm font-medium  rounded-md mt-2 mb:mt-0 md:px-10 shadow-md">
									{project.descriptionCover}
								</p>

								<Link href={`/projects/${project.id}`} className="self-end flex p-0 w-fit mt-2">
									<Button variant={'outline'} className="px-2 py-1" size={'sm'}>
										Mais detalhes
									</Button>
								</Link>
							</div>
						</div>
					))}
				</div>

				<div className="w-full flex flex-col md:flex-row gap-4 mt-10">
					<div className="md:flex-1">
						<Card className="h-full">
							<CardContent className="grid grid-cols-2 md:grid-cols-4">
								{experiences.map((experience) => (
									<ExperienceItem
										key={experience.description}
										quantity={experience.quantity}
										description={experience.description}
									/>
								))}
							</CardContent>
						</Card>
					</div>

					<div className="md:flex-1">
						<ContactCard />
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProjectsPage;
