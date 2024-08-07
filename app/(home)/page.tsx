import ContactCard from '@/components/contact';
import ExperienceCard from '@/components/experience';
import AvatarCard from './components/card-avatar';
import ProjectCard from './components/card-project';
import ServicesCard from './components/card-services';
import StacksCard from './components/card-stacks';
import TechToolsCard from './components/card-techs';
import TitleDeveloper from './components/card-title';

export default function Home() {
	return (
		<section className="mx-auto max-w-5xl grid grid-cols-1 gap-4 md:grid md:grid-cols-12 md:grid-rows-12 md:h-[696px]">
			<TitleDeveloper />

			<AvatarCard />

			<ProjectCard />

			<StacksCard />

			<TechToolsCard />

			<ServicesCard />

			<div className="md:col-start-10 md:col-end-13 md:row-start-2 md:row-end-10">
				<ExperienceCard />
			</div>

			<div className="md:col-start-7 md:col-end-13 md:row-start-10 md:row-end-13">
				<ContactCard />
			</div>
		</section>
	);
}
