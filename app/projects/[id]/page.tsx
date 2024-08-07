import ContactCard from '@/components/contact';
import { ExperienceItem, experiences } from '@/components/experience';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { ChevronsRightIcon, MoveLeftIcon } from 'lucide-react';
import Image from 'next/image';

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

	const projeto = projects.filter((project) => project.id === Number(params.id));

	const projetoItem = projeto[0];

	const funcs = projetoItem.functionalities;
	const techs = projetoItem.technologies;

	if (!projeto) {
		//TODO: redirect to homepage
		return null;
	}

	return (
		<section className="mx-auto max-w-5xl">
			<Link href={'/'} className="flex mb-8">
				<Button className="bg-primary hover:bg-primary/85 ">
					<MoveLeftIcon />
					<span className="ml-2 text-base font-bold">Home</span>
				</Button>
			</Link>

			<div className="w-full">
				<div className="w-full flex flex-col md:flex-row items-stretch gap-6 mb-6">
					<div className="w-full md:w-1/2 border rounded-xl">
						<Image
							src={projetoItem.imgUrlCover}
							alt={projetoItem.name}
							width={702}
							height={450}
							className="w-full rounded-xl object-cover h-[180px] md:h-[304px]"
						/>
					</div>

					<div className="w-full md:w-1/2 flex flex-col justify-between gap-3 rounded-xl border p-6">
						<p className="text-xl md:text-3xl font-semibold text-primary">
							<span className="text-foreground">#</span>
							{projetoItem.name}
						</p>

						<p className="text-sm font-light text-muted-foreground">
							{projetoItem.descriptionProject}
						</p>

						<div className="self-end flex items-center gap-10 mt-2">
							<Button variant={'outline'} size={'sm'} className="text-xs">
								Ver Online
							</Button>
							<Button variant={'outline'} size={'sm'} className="text-xs">
								Repositório
							</Button>
						</div>
					</div>
				</div>

				<div className="flex flex-col md:flex-row items-stretch gap-6">
					<Card className="w-full md:w-1/2">
						<CardContent>
							<CardTitle className="text-lg font-medium text-start w-full uppercase text-primary">
								Funcionalidades da Aplicação
							</CardTitle>

							<div>
								<Image
									src={projetoItem.imgUrlFunc}
									alt={projetoItem.name}
									width={702}
									height={450}
									className="w-[492px] rounded-md object-cover h-[180px] md:h-[304px]"
								/>
							</div>

							<div className="ml-2">
								<ul className="flex flex-col gap-2 text-muted-foreground">
									{funcs.map((func) => (
										<li className="flex gap-2 text-sm font-light" key={projetoItem.id}>
											<span className="text-primary">
												<ChevronsRightIcon />
											</span>
											<span>{func}</span>
										</li>
									))}
								</ul>
							</div>
						</CardContent>
					</Card>

					<Card className="w-full md:w-1/2">
						<CardContent>
							<CardTitle className="text-lg font-medium text-start w-full uppercase text-primary">
								Tecnologias usadas no Projeto
							</CardTitle>

							<div>
								<Image
									src={projetoItem.imgUrlTech}
									alt={projetoItem.name}
									width={702}
									height={450}
									className="w-[492px] rounded-md object-cover h-[180px] md:h-[304px]"
								/>
							</div>

							<div className="ml-2">
								<ul className="flex flex-col gap-2 text-muted-foreground">
									{techs.map((tech) => (
										<li className="flex gap-2 text-sm font-light" key={projetoItem.id}>
											<span className="text-primary">
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
		</section>
	);
};

export default ProjectDetailsPage;
