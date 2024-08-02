import ContactCard from '@/components/contact';
import { ExperienceItem, experiences } from '@/components/experience';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MoveLeftIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectProps {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  descriptionItem: string;
  imageUrlChallenge: string;
  descriptionChallenge: string;
  imageUrlSolution: string;
  descriptionSolution: string;
  imageUrlResult: string;
  descriptionResult: string;
};

const projects: ProjectProps[] = [
  {
    id: 1,
    name: "Aroha agency website1",
    description:
      "Lorem, ipsueqweqwdolor sit amet consectetur adipisicing elit. Aliquid, vitae.",
    imageUrl: "/images/project1.png",
    descriptionItem: "At Aroha Agency, we craft digital experiences that resonate. From web design to marketing strategy, we fuse creativity with technology to elevate your brand. Explore our portfolio, discover innovative solutions, and let us shape a digital presence that captivates and converts.",
    imageUrlChallenge: "https://utfs.io/f/ee13266f-c36a-4b93-959c-5aaede6ae27d-1vd6k.png",
    descriptionChallenge: "Explore our portfolio projects and witness the artistry of Aroha Agency. Each endeavor a testament to our commitment, showcasing innovative design, strategic marketing,Explore our portfolio projects and witness the artistry of Aroha Agency.",
    imageUrlSolution: "/images/project1.png",
    descriptionSolution: "Explore our portfolio projects and witness the artistry of Aroha Agency. Each endeavor a testament to our commitment, showcasing innovative design, strategic marketing,Explore our portfolio projects and witness the artistry of Aroha Agency.",
    imageUrlResult: "/images/project3.png",
    descriptionResult: "Explore our portfolio projects and witness the artistry of Aroha Agency. Each endeavor a testament to our commitment, showcasing innovative design, strategic marketing,Explore our portfolio projects and witness the artistry of Aroha Agency.",
  },
  {
    id: 2,
    name: "Aroha agency website2",
    description:
      "qweqweqwLorem, ipsum dolor sit amet consectetur adipisicing elitdad. Aliquid, vitae.",
    imageUrl: "/images/project2.png",
    descriptionItem: "At Aroha Agency, we craft digital experiences that resonate. From web design to marketing strategy, we fuse creativity with technology to elevate your brand. Explore our portfolio, discover innovative solutions, and let us shape a digital presence that captivates and converts.",
    imageUrlChallenge: "/images/project3.png",
    descriptionChallenge: "Explore our portfolio projects and witness the artistry of Aroha Agency. Each endeavor a testament to our commitment, showcasing innovative design, strategic marketing,Explore our portfolio projects and witness the artistry of Aroha Agency.",
    imageUrlSolution: "/images/project1.png",
    descriptionSolution: "Explore our portfolio projects and witness the artistry of Aroha Agency. Each endeavor a testament to our commitment, showcasing innovative design, strategic marketing,Explore our portfolio projects and witness the artistry of Aroha Agency.",
    imageUrlResult: "https://utfs.io/f/ee13266f-c36a-4b93-959c-5aaede6ae27d-1vd6k.png",
    descriptionResult: "Explore our portfolio projects and witness the artistry of Aroha Agency. Each endeavor a testament to our commitment, showcasing innovative design, strategic marketing,Explore our portfolio projects and witness the artistry of Aroha Agency.",
  },
  {
    id: 3,
    name: "Aroha agency website3",
    description:
      "Lorem, ipsum dolor sit amet cfgsdgsdonsectetur adipisicing elit. Aliquid, vitae.",
    imageUrl: "/images/project3.png",
    descriptionItem: "At Aroha Agency, we craft digital experiences that resonate. From web design to marketing strategy, we fuse creativity with technology to elevate your brand. Explore our portfolio, discover innovative solutions, and let us shape a digital presence that captivates and converts.",
    imageUrlChallenge: "/images/project1.png",
    descriptionChallenge: "Explore our portfolio projects and witness the artistry of Aroha Agency. Each endeavor a testament to our commitment, showcasing innovative design, strategic marketing,Explore our portfolio projects and witness the artistry of Aroha Agency.",
    imageUrlSolution: "https://utfs.io/f/ee13266f-c36a-4b93-959c-5aaede6ae27d-1vd6k.png",
    descriptionSolution: "Explore our portfolio projects and witness the artistry of Aroha Agency. Each endeavor a testament to our commitment, showcasing innovative design, strategic marketing,Explore our portfolio projects and witness the artistry of Aroha Agency.",
    imageUrlResult: "/images/project2.png",
    descriptionResult: "Explore our portfolio projects and witness the artistry of Aroha Agency. Each endeavor a testament to our commitment, showcasing innovative design, strategic marketing,Explore our portfolio projects and witness the artistry of Aroha Agency.",
  },
  {
    id: 4,
    name: "Aroha agency website4",
    description:
      "Lorem, ipsum dolorasas sit amet consecgsdgsdgtetur adipisicing elit. Aliquid, vitae.",
    imageUrl: "https://utfs.io/f/ee13266f-c36a-4b93-959c-5aaede6ae27d-1vd6k.png",
    descriptionItem: "At Aroha Agency, we craft digital experiences that resonate. From web design to marketing strategy, we fuse creativity with technology to elevate your brand. Explore our portfolio, discover innovative solutions, and let us shape a digital presence that captivates and converts.",
    imageUrlChallenge: "/images/project2.png",
    descriptionChallenge: "Explore our portfolio projects and witness the artistry of Aroha Agency. Each endeavor a testament to our commitment, showcasing innovative design, strategic marketing,Explore our portfolio projects and witness the artistry of Aroha Agency.",
    imageUrlSolution: "/images/project3.png",
    descriptionSolution: "Explore our portfolio projects and witness the artistry of Aroha Agency. Each endeavor a testament to our commitment, showcasing innovative design, strategic marketing,Explore our portfolio projects and witness the artistry of Aroha Agency.",
    imageUrlResult: "/images/project1.png",
    descriptionResult: "Explore our portfolio projects and witness the artistry of Aroha Agency. Each endeavor a testament to our commitment, showcasing innovative design, strategic marketing,Explore our portfolio projects and witness the artistry of Aroha Agency.",
  },
];

const ProjectsPage = () => {
  return (
    <section className='mx-auto max-w-5xl'>
      <Link href={'/'} className='flex mb-8 w-fit'>
        <Button className='bg-primary hover:bg-primary/85 '>
          <MoveLeftIcon />
          <span className='ml-2 text-base font-bold'>Home</span>
        </Button>
      </Link>

      <div className='w-full'>

        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
          {projects.map(project => (
            <div
              key={project.id}
              className='w-full border rounded-md group/item relative'>

              <div
                className='hidden md:block group/edit w-full h-0 absolute bottom-0 group-hover/item:h-full bg-gradient-to-t from-black to-black/20 transition-all duration-500 rounded-md'>
              </div>

              <Image
                src={project.imageUrl}
                className='rounded-md object-cover w-full md:h-[250px]'
                alt='...'
                width={702}
                height={450}
              />
              <div
                className='md:absolute z-40 md:bottom-0 p-4 md:p-10 group/edit md:opacity-0 transition-all duration-700 text-xs group-hover/item:opacity-100 flex flex-col gap-2'>
                <p className='text-base md:text-2xl font-light mt-2'>{project.name}</p>
                <p className='font-light'>{project.description}</p>

                <Link href={`/projects/${project.id}`} className='self-end flex p-0 w-fit mt-2'>
                  <Button variant={'outline'} size={'sm'}>Mais detalhes</Button>
                </Link>
              </div>
           </div>
          ))}
        </div>

        <div className='w-full flex flex-col md:flex-row gap-4 mt-4'>
          <div className='md:flex-1'>
            <Card className='h-full'>
              <CardContent
                className='grid grid-cols-2 md:grid-cols-4 '>
                {experiences.map((experience) => (
                  <ExperienceItem
                    key={experience.description}
                    quantity={experience.quantity}
                    description={experience.description} />
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
}

export default ProjectsPage;