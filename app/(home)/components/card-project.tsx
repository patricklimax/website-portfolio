import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { MoveRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = () => {
  return (
    <Card className='md:col-start-4 md:col-end-10 md:row-start-5 md:row-end-10'>
      <CardContent className='justify-between'>
        <CardTitle className='text-lg font-medium text-start w-full'>
          Veja meu último trabalho
        </CardTitle>

        <div className='w-full h-[150px]'>
          <Image
            src={"/images/project1.png"}
            width={248}
            height={100}
            alt='imagem do último projeto'
            className='border rounded-md shadow-md shadow-background mx-auto h-[150px] w-8/12'
          />
        </div>

        <div className='w-full flex items-center justify-between text-muted-foreground '>
          <p className='text-sm'>Meus Projetos</p>
          <Link href={'/projects'} className='cursor-pointer group/item text-primary'>
            <MoveRightIcon
              size={38}
              className='stroke-1 transition-all duration-500 group/edit group-hover/item:text-foreground group/edit group-hover/item:translate-x-2' />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;