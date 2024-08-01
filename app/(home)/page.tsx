import AvatarCard from './components/card-avatar';
import ContactCard from './components/card-contact';
import ExperienceCard from './components/card-experience';
import ProjectCard from './components/card-project';
import ServicesCard from './components/card-services';
import StacksCard from './components/card-stacks';
import TechToolsCard from './components/card-techs';
import TitleDeveloper from './components/card-title';

export default function Home() {
  return (
    <section
      className='mx-auto max-w-5xl grid grid-cols-1 gap-4 md:grid md:grid-cols-12 md:grid-rows-12 md:h-[696px]'>
      <TitleDeveloper />

      <AvatarCard />

      <ProjectCard />

      <StacksCard/>

      <TechToolsCard />

      <ServicesCard />

      <ExperienceCard />
      
      <ContactCard/>

    </section>
  );
}
